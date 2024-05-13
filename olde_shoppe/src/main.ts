import Phaser from 'phaser'

import Game from './Game'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { x: 0, y: 0 },
			// debug: true,
		},
	},
	scene: [Game],
}

export default new Phaser.Game(config)
