import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        //  We loaded this image in our Boot Scene, so we can display it here
        this.add.image(950,520, 'waffle').setScale(1.06);

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0x00ffaa);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress: number) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');
        this.load.image('gameOver', 'meo.jpg'); // Preload the game over image
        this.load.image('background', 'meowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeow.jpg');
        this.load.spritesheet('cat', 'cat.png', { frameWidth: 1080, frameHeight: 1080 });
        this.load.spritesheet('catboom', 'catblowupohnocaboommeowmeow.png', { frameWidth: 3240, frameHeight: 3240 });
        this.load.audio('meow', 'meow.mp3'); // Preload the audio file
        this.load.audio('theme', 'histheme.mp3'); // Preload the audio file
        this.load.audio('pro', 'prow.mp3'); // Preload the audio file
        this.load.audio('hah', 'haha.mp3'); // Preload the audio file
        this.load.audio('meowboomboommeowboomy', 'kaboomymeow.mp3'); // Preload the audio file
        this.load.audio('hecantkeep', 'getaway.mp3'); // Preload the audio file
        this.load.audio('sualtheme', 'sual.mp3'); // Preload the audio file
        this.load.audio('full', 'fullpower.mp3');
        this.load.audio('hapi', 'happi.mp3');
        this.load.audio('metaa', 'mettheme.mp3');
        this.load.audio('skell', 'sanstheme.mp3');
        this.load.audio('pasta', 'paptheme.mp3');
        this.load.audio('pig', 'pigtheme.mp3');
        this.load.audio('green', 'biggreentheme.mp3');
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }
}
