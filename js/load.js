class Load {
    preload() {
        // Load background
        this.load.image('background', 'assets/background.png')

        // Load title
        this.load.image('title', 'assets/title.png')

        // Load the spray spritesheet (player)
        this.load.spritesheet('spray', 'assets/spray.png', {
            frameWidth: 40,
            frameHeight: 40,
        })

        // Load the mosquito spritesheet (enemy)
        this.load.spritesheet('mosquito', 'assets/mosquito.png', {
            frameWidth: 40,
            frameHeight: 40,
        })

        // Display a loading label
        this.loadLabel = this.add.text(80 * 2, 72 * 2, `loading 0%`, {
            font: '14px EarlyGameBoy',
            fill: '#fff',
            align: 'center',
        })

        // Change the origin point to center the text
        this.loadLabel.setOrigin(0.5, 0.5)
    }

    create() {
        // Call 'this.progress' every time a new file is loaded
        this.load.on('progress', this.progress, this)

        // Start the menu scene
        this.scene.start('menu')
    }

    //////////////////
    // New Methods //
    ////////////////

    progress(value) {
        // Compute the percentage, between 0 and 100
        let percentage = Math.round(value * 100) + '%'

        // Update the label
        this.loadLabel.setText(`loading ${percentage}`)
    }
}
