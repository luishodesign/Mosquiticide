class Menu {
    create() {
        // Display the background image
        this.add.image(80 * 2, 72 * 2, 'background')

        // Display the name of the game
        let title = this.add.image(80 * 2, 0, 'title')
        title.setScale(1)

        this.tweens.add({
            targets: title,
            y: 90,
            duration: 1000,
            ease: 'bounce.out',
        })

        // Display how to start the game
        let startText = 'PRESS UP\nTO START!'
        let startLabel = this.add.text(80 * 2, 200, startText, {
            font: '16px EarlyGameBoy',
            fill: '#333346',
            align: 'center',
        })

        startLabel.setOrigin(0.5, 0.5)

        // Add the mosquitos
        this.mosquito1 = this.physics.add.sprite(140, 40, 'mosquito')
        this.mosquito2 = this.physics.add.sprite(240, 140, 'mosquito')

        // Create the mosquito animation
        this.anims.create({
            key: 'mosquitoLive',
            frames: this.anims.generateFrameNumbers('mosquito', {
                frames: [0, 1],
            }),
            frameRate: 4,
            repeat: -1,
        })

        // Store the up arrow key
        this.upKey = this.input.keyboard.addKey('up')
    }

    update() {
        // Mosquitos alives
        this.mosquito1.anims.play('mosquitoLive', true)
        this.mosquito2.anims.play('mosquitoLive', true)

        // When to up arrow key is down
        if (this.upKey.isDown) {
            // Start the play scene
            this.scene.start('play')
        }
    }
}
