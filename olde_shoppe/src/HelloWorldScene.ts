import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene {
	constructor() {
		super('hello-world')
	}

	preload() {
		this.load.setBaseURL('https://labs.phaser.io')

		this.load.image('sky', 'assets/skies/space3.png')
		this.load.image('logo', 'assets/sprites/phaser3-logo.png')
		this.load.image('red', 'assets/particles/red.png')
	}

	create() {
		this.add.image(400, 300, 'sky')

		const particles = this.add.particles(0, 0, 'red', {
			angle: { min: -100, max: 100 },
			speed: 200
		})

		const logo = this.physics.add.image(400, 100, 'logo')

		logo.setVelocity(200, 180)
		logo.setBounce(1, 1)
		logo.setCollideWorldBounds(true)

		particles.startFollow(logo)
	}
}
