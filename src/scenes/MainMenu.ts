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

        if (!this.background) {
            console.error('Failed to load background image');
        }

        this.input.once('pointerdown', () => {
            this.scene.start('Game');
        });
    }
}