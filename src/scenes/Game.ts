import { Scene } from 'phaser';

export class Game extends Scene {
    score = 0;
    scoreText: any;
    constructor() {
        super('Game');
    }
    preload() {
        // this.load.image('sky', 'assets/sky.png');
        // this.load.image('ground', 'assets/platform.png');
        // this.load.image('star', 'assets/star.png');
        // this.load.image('bomb', 'assets/bomb.png');cat cat cat cat CAT CATTTTT CAT CAT CAT CAT CAT CATC CAT CAT CACT CAT TCA CAT CAT CAT CAT CTA CAT CTA CAT CTA CTA CTA CAT CAT CAT CATC CAT CAT CAT CA TCAT CAT CAT CAT CAT ACT CAT CAT CAT CAT CAT CT CAT CAT CAT CAT CAT CTACTA CTA CT ACTA CT ATC CT ATCA CTA CTAC YAC YACY C YACYA CA TCT CYAAC TCA
        // this.load.spritesheet('dude', 'assets/dude.png',
        //     { frameWidth: 32, frameHeight: 48 });
        this.load.image('background', 'assets/public/meowmeowmeowmeowmemememememememememememememememememememememememmemememememmeme.jpg')
        this.load.spritesheet('cat', 'assests/cat.png', { frameWidth: 1080, frameHeight: 1080 });
    }
    create() {
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.add.image(400, 300, 'sky');
    }
    update() {

    }
}
