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
        this.load.spritesheet('catboom', 'assets/catblowupohnocaboommeowmeow.png', { frameWidth: 3240, frameHeight: 3240 });
        this.load.audio('meow', 'assets/meow.mp3'); // Preload the audio file
        this.load.audio('meowboomboommeowboomy', 'assets/kaboomymeow.mp3'); // Preload the audio file
    }

    create() {
        this.add.image(856, 460, 'background').setScale(1.1);
        const character = this.add.sprite(856, 500, 'cat').setScale(0.75);
        character.setInteractive();
        character.setOrigin(0.5, 0.5); // Set the origin to the center
        
        // Create the animations
        this.anims.create({
            key: 'click',
            frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 9 }),
            frameRate: 30, // Adjusted frame rate
            repeat: 0 // Play the animation once
        });

        this.anims.create({
            key: 'boom',
            frames: this.anims.generateFrameNumbers('catboom', { start: 0, end: 9 }),
            frameRate: 30, // Adjusted frame rate
            repeat: 0 // Play the animation once
        });

        const meowSound = this.sound.add('meow'); // Add the audio to the scene
        this.load.audio('meowboomboommeowboomy', 'assets/kaboomymeow.mp3'); // Preload the audio file
        const boooom = this.sound.add('meowboomboommeowboomy'); // Add the audio to the scene

        this.input.on('gameobjectup', (pointer, gameObject) => {
            // 50% chance to play either animationgameObject.setScale(0.59);
            if (Math.random() < 0.9) {
                gameObject.play('click');
            } else {
                
                gameObject.play('boom');
                 boooom.play();
                 this.anims.create({
                  
            key: 'boom',
            frames: this.anims.generateFrameNumbers('catboom', { start: 0, end: 9 }),
            frameRate: 30, // Adjusted frame rate
            repeat: 0 // Play the animation once
        });

        const meowSound = this.sound.add('meow'); // Add the audio to the scene

        this.input.on('gameobjectup', (pointer, gameObject) => {
            // 50% chance to play either animation
            if (Math.random() < 0.5) {
                gameObject.play('click');
            } else {
                gameObject.play('boom');
                gameObject.setScale(0.7);
            }
            meowSound.play(); // Play the audio when the animation is triggered
            this.score += 1;
            this.scoreText.setText('Score: ' + this.score);
        });
            }
            meowSound.play(); // Play the audio when the animation is triggered
            this.score += 1;
            this.scoreText.setText('Score: ' + this.score);
        });

        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '48px', fill: '#000' });
    }

    update() {
        // Update logic here
    }
}
