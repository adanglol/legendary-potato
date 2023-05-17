console.log('game.js has been loaded')


// Menu Scene
class Menu extends Phaser.Scene {
    constructor() {
        super('Menu')
    }
    preload() {
        this.load.image('heart', 'ASSETS/myheart.png')
    }
    create() {
        console.log('menuScene has been created')
        // Set the pixel art scaling mode
        this.scale.scaleMode = Phaser.Scale.ScaleModes.NEAREST;
        let heart = this.add.sprite(500, 300, 'heart')
        heart.setScale(2)
        
      
    }
    update() {}
}

const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        width: '100%',
        height: '100%',
        parent : 'game-container',
        pixelArt : true,
        zoom : 1,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: true,
        },
    },
    style: {
        border : '10px solid black'
    },
    scene: [Menu],
    backgroundColor: '#87CEEB',
}

const game = new Phaser.Game(config)