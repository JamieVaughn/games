import { KaboomCtx, GameObj, SpriteComp, AreaComp, BodyComp, PosComp, ScaleComp, DoubleJumpComp, HealthComp, OpacityComp } from "kaboom";
import { globalGameState } from "./state";
const scale = 4

export function makePlayer(k: KaboomCtx, posX: number, posY: number) {
  const player = k.make([
    k.sprite('assets', { anim: 'kirbIdle' }),
    k.area({ shape: new k.Rect(k.vec2(4, 5.9), 8, 10) }),
    k.scale(scale),
    k.pos(posX * scale, posY * scale),
    k.body(),
    k.health(3),
    k.opacity(1),
    k.doubleJump(10),
    {
      speed: 300,
      direction: 'right',
      isInhaling: false,
      isFull: false,
    },
    'player',
  ])
  player.onCollide('enemy', async (enemy: GameObj) => {
    if (player.isInhaling && enemy.isInhalable) {
      player.isInhaling = false
      k.destroy(enemy)
      player.isFull = true
      return
    }
    if (player.hp() === 0) {
      k.destroy(player)
      k.go(globalGameState.currentScene)
      return
    }
    player.hurt()
    await k.tween(player.opacity, 0, 0.05, o => player.opacity = o, k.easings.easeInOutCubic)
    await k.tween(player.opacity, 1, 0.05, o => player.opacity = o, k.easings.easeInOutCubic)
  })
  player.onCollide('exit', () => k.go(globalGameState.nextScene))

  const inhaleEffect = k.add([
    k.sprite('assets', { anim: 'kirbInhaleEffect' }),
    k.scale(scale),
    k.pos(),
    k.opacity(0),
    'inhaleEffect',
  ])
  const inhaleZone = player.add([
    k.area({ shape: new k.Rect(k.vec2(0), 20, 4) }),
    k.pos(),
    'inhaleZone',
  ])
  inhaleZone.onUpdate(() => {
    if (player.direction === 'left') {
      inhaleZone.pos = k.vec2(-14, 8)
      inhaleEffect.pos = k.vec2(player.pos.x - 60, player.pos.y + 0)
      inhaleEffect.flipX = true
      return
    }
    inhaleZone.pos = k.vec2(14, 8)
    inhaleEffect.pos = k.vec2(player.pos.x + 60, player.pos.y + 0)
    inhaleEffect.flipX = false
  })

  player.onUpdate(() => {
    if (player.pos.y > 2000) {
      k.go(globalGameState.currentScene)
    }
  })

  return player
}

export type PlayerGameObj = GameObj<
  SpriteComp &
  AreaComp &
  BodyComp &
  PosComp &
  ScaleComp &
  DoubleJumpComp &
  HealthComp &
  OpacityComp & {
    speed: number,
    direction: string,
    isInhaling: boolean,
    isFull: boolean,
  }
>

export function setControls(k: KaboomCtx, player: PlayerGameObj) {
  const inhaleEffect = k.get('inhaleEffect')[0]

  k.onKeyDown((key) => {
    switch (key) {
      case 'left':
        player.direction = 'left'
        player.flipX = true
        player.move(-player.speed, 0)
        break
      case 'right':
        player.direction = 'right'
        player.flipX = false
        player.move(player.speed, 0)
        break
      case 'z':
        if (player.isFull) {
          player.play('kirbFull')
          inhaleEffect.opacity = 0
        } else {
          player.isInhaling = true
          player.play('kirbInhaling')
          inhaleEffect.opacity = 1
        }
        break
      default:
        break
    }
  })

  k.onKeyPress((key) => {
    switch (key) {
      case 'space':
        player.doubleJump()
        break
      default:
        break
    }
  })

  k.onKeyRelease((key) => {
    switch (key) {
      case 'z':
        if (player.isFull) {
          player.play('kirbInhaling')
          const shootingStar = k.add([
            k.sprite('assets', { anim: 'shootingStar', flipX: player.direction === 'right' }),
            k.area({ shape: new k.Rect(k.vec2(5, 4), 6, 6) }),
            k.pos(player.direction === 'left' ? player.pos.x - 80 : player.pos.x + 80, player.pos.y + 5),
            k.scale(scale),
            player.direction === 'left' ? k.move(k.LEFT, 800) : k.move(k.RIGHT, 800),
            'shootingStar',
          ])
          shootingStar.onCollide('platform', () => k.destroy(shootingStar))
          player.isFull = false
          k.wait(0.5, () => player.play('kirbIdle'))
          return
        }
        inhaleEffect.opacity = 0
        player.isInhaling = false
        player.play('kirbIdle')
        break
      default:
        break
    }
  })
}

export function makeInhalable(k: KaboomCtx, enemy: GameObj) {
  enemy.onCollide('inhaleZone', () => enemy.isInhalable = true)
  enemy.onCollideEnd('inhaleZone', () => enemy.isInhalable = false)
  enemy.onCollide('shootingStar', (star: GameObj) => (k.destroy(enemy), k.destroy(star)))
  const playerRef = k.get('player')[0]
  enemy.onUpdate(() => {
    if (playerRef.isInhaling && enemy.isInhalable ) {
      const dir = playerRef.direction === 'right' ? -1 : 1
      enemy.move(dir * 800, 0)
      return
    }
  })
}

export function makeFlameEnemy(k: KaboomCtx, posX: number, posY: number) {
  const flame = k.add([
    k.sprite('assets', { anim: 'flame' }),
    k.scale(scale),
    k.pos(posX * scale, posY * scale),
    k.area({
      shape: new k.Rect(k.vec2(4, 6), 8, 10),
      collisionIgnore: ['enemy']
    }),
    k.body(),
    k.state('idle', ['idle', 'jump']),
    { isInhalable: false },
    'enemy',
  ])

  flame.onStateEnter('idle', async () => {
    await k.wait(1)
    flame.enterState('jump')
  })
  flame.onStateEnter('jump', async () => {
    flame.jump(1000)
  })
  flame.onStateUpdate('jump', () => {
    if (flame.isGrounded()) flame.enterState('idle')
  })
  return flame
}

export function makeGuyEnemy(k: KaboomCtx, posX: number, posY: number) {
  const guy = k.add([
    k.sprite('assets', { anim: 'guyWalk' }),
    k.scale(scale),
    k.pos(posX * scale, posY * scale),
    k.area({
      shape: new k.Rect(k.vec2(2, 3.9), 12, 12),
      collisionIgnore: ['enemy']
    }),
    k.body(),
    k.state('idle', ['idle', 'left', 'right']),
    { isInhalable: false, speed: 100 },
    'enemy',
  ])
  makeInhalable(k, guy)
  guy.onStateEnter('idle', async () => {
    await k.wait(1)
    guy.enterState('left')
  })
  guy.onStateEnter('left', async () => {
    guy.flipX = false
    await k.wait(2)
    guy.enterState('right')
  })
  guy.onStateUpdate('left', () => {
    guy.move(-guy.speed, 0)
  })
  guy.onStateEnter('right', async () => {
    guy.flipX = true
    await k.wait(2)
    guy.enterState('left')
  })
  guy.onStateUpdate('right', () => {
    guy.move(guy.speed, 0)
  })
  return guy
}

export function makeBirdEnemy(k: KaboomCtx, posX: number, posY: number, speed: number) {
  const bird = k.add([
    k.sprite('assets', { anim: 'bird' }),
    k.scale(scale),
    k.pos(posX * scale, posY * scale),
    k.area({
      shape: new k.Rect(k.vec2(4, 6), 8, 10),
      collisionIgnore: ['enemy']
    }),
    k.body({ isStatic: true }),
    k.move(k.LEFT, speed),
    k.offscreen({ destroy: true, distance: 400 }),
    { isInhalable: false, speed },
    'enemy',
  ])

  makeInhalable(k, bird)

  return bird
}
