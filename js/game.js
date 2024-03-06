let game = new Phaser.Game({
    width: 80 * 4,
    height: 72 * 4,
    backgroundColor: '#3498db',
    physics: { default: 'arcade' },
    parent: 'game',
})

// All the scenes
game.scene.add('load', Load)
game.scene.add('menu', Menu)
game.scene.add('play', Play)

// Start the scene
game.scene.start('load')
