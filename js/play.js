let customCursor
let isSprayOverMosquito = false // Flag to track if cursor is over image

class Play {
    create() {
        // Display the background image
        this.add.image(80 * 2, 72 * 2, 'background')

        // Custom cursor
        this.spray = this.input.setDefaultCursor('none')
        customCursor = this.add.sprite(0, 0, 'spray')

        // Custom cursor animation
        this.anims.create({
            key: 'cursorAnim',
            frames: this.anims.generateFrameNumbers('spray', {
                frames: [0, 1, 2],
            }),
            frameRate: 8,
            repeat: -1,
        })

        customCursor.play('cursorAnim')

        // Add the mosquito
        this.mosquito = this.physics.add
            .sprite(140, 40, 'mosquito')
            .setInteractive()

        // Create the mosquito animation
        this.anims.create({
            key: 'mosquitoLive',
            frames: this.anims.generateFrameNumbers('mosquito', {
                frames: [0, 1],
            }),
            frameRate: 4,
            repeat: -1,
        })

        this.mosquito.anims.play('mosquitoLive')

        // Store the score
        this.score = 0

        // The style of the text
        let style = { font: '16px EarlyGameBoy', fill: '#333346' }

        // Display the score in the top left cornere
        this.scoreText = this.add.text(160, 24, 'score: ' + this.score, style)
    }

    update() {
        // Custom Cursor
        customCursor.x = this.spray.x
        customCursor.y = this.spray.y

        // Spray kills mosquitos
        this.spray.on('pointerover', () => {
            console.log('down')

            if (!isSprayOverMosquito) {
                // Increment the score
                isSprayOverMosquito = true

                // Increment the score by 1
                this.score += 1

                // Display the updated score on the screen
                this.scoreText.setText('score: ' + this.score)
            }

            // Change the position x and y of the mosquito randomly
            this.mosquito.x = Phaser.Math.Between(80, 240)
            this.mosquito.y = Phaser.Math.Between(72, 216)
        })

        this.spray.on('pointerout', () => {
            isSprayOverMosquito = false
        })

        if (this.score === 10) {
            customCursor.destroy()
            this.mosquito.destroy()
            // this.scoreText.destroy()

            // Display win screen
            // The style of the text
            let style = {
                font: '24px EarlyGameBoy',
                fill: '#333346',
                align: 'center',
            }

            this.winText = this.add.text(
                160,
                144,
                'YOU ARE THE\nMOSQUITO\nSLAYER!',
                style
            )
            this.winText.setOrigin(0.5, 0.5)
        }
    }
}
