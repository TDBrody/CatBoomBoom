import { Scene } from 'phaser';

export class Game extends Scene {
    catClickable: Phaser.Physics.Arcade.StaticGroup;
    score = 0;
    scoreText: any;

    constructor() {
        super('Game');
    }

    preload() {
        // Ensure the file paths are correct
        this.load.image('background', 'assets/meowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeow.jpg');
        this.load.spritesheet('cat', 'assets/cat.png', { frameWidth: 1080, frameHeight: 1080 });
        this.load.audio('meow', 'assets/meow.mp3'); // Preload the audio file
    }

    create() {
        this.add.image(856, 460, 'background').setScale(1.1);
        const character = this.add.sprite(856, 500, 'cat').setScale(0.75);
        character.setInteractive();
        
        // Create the animation
        this.anims.create({
            key: 'click',
            frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 9 }),
            frameRate: 45,
            repeat: 0 // Play the animation once
        });

        const meowSound = this.sound.add('meow'); // Add the audio to the scene

        this.input.on('gameobjectup', (pointer, gameObject) => {
            gameObject.play('click');
            meowSound.play(); // Play the audio when the animation is triggered
        });
    }

    update() {
        // Update logic here
    }
}
