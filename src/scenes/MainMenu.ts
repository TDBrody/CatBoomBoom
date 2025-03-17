import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene {
    background: Phaser.GameObjects.Image;
    waffle: GameObjects.Image;
    thingg: GameObjects.Image;

    constructor() {
        super('MainMenu');
    }

    preload() {
        // Ensure the file paths are correct
        console.log('Preloading images...');
    }

    create() {
        console.log('Creating scene...');
        this.background = this.add.image(950, 520, 'waffle').setScale(1.06);
        this.add.text(80,345,"CLICK ME TO PLAY :)", {
            fontSize: '30px',
            color: '#ffffff', // White fill
            fontStyle: 'bold', // Bold font
            stroke: '#000000', // Black outline
            strokeThickness: 6 // Thickness of the outline
        })
        this.add.text(1200,20,"Image of Walter White from Breaking Bad. © AMC Networks. Music and audio clips from Breaking Bad. © AMC Networks.", {
            fontSize: '10px',
            color: '#ffffff', // White fill
            fontStyle: 'bold', // Bold font
            stroke: '#000000', // Black outline
            strokeThickness: 2 // Thickness of the outline
        })
        this.add.text(80,940,"This project is a parody and is intended for educational purposes only. It uses copyrighted material from Breaking Bad under the fair use doctrine (Title 17, U.S. Code, Section 107). All images, music, and audio clips are the property of AMC Networks. No copyright infringement is intended.", {
            fontSize: '10px',
            color: '#ffffff', // White fill
            fontStyle: 'bold', // Bold font
            stroke: '#000000', // Black outline
            strokeThickness: 1 // Thickness of the outline
        })
        if (!this.background) {
            console.error('Failed to load background image');
        }

        this.input.once('pointerdown', () => {
            this.scene.start('Game');
        });
    }
}