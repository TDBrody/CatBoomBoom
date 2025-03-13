import { GameObjects, Scene } from 'phaser';

export class Game extends Scene {
  score = 0;
  scoreText: any;
  meowmeowmeowcatmeow: any;
  gameOverImage: Phaser.GameObjects.Image;
  intervalId: number;
  happiCat: any;
  catmood: any;
  catThink: any;
  catThought: any;
  callback: any;
  catNum: any;
  boooom: any;
  meowSound: any;
  convertToInversePercentage: any;
  character: Phaser.GameObjects.Sprite;
  explode: Phaser.Sound;
  catBark: Phaser.Sound;

  constructor() {
    super('Game');

  }

  preload() {
    // Ensure the file paths are correct
    this.load.image('background', 'assets/meowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeow.jpg');
    this.load.image('gameOver', 'assets/meo.jpg'); // Preload the game over image
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
    this.character = character;
    let catNum = 0.8333;
    let happiCat = 100;
    setInterval(() => {
      happiCat -= catNum / 100;
      //console.log(`HappiCat: ${happiCat.toFixed(2)}`);
      this.catmood.setText('Cat Happiness: ' + happiCat);
    }, 10);
    //console.log (catNum);
    function convertToInversePercentage(decimal: number): string {
      return ((1 - decimal) * 100).toFixed(2) + '%';
    }
    let catsilly = convertToInversePercentage(catNum);
    //console.log(catsilly);
    // Create the animations
    this.anims.create({
      key: 'click',
      frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 9 }),
      frameRate: 35, // Adjusted frame rate
      repeat: 0 // Play the animation once
    });

    this.anims.create({
      key: 'boom',
      frames: this.anims.generateFrameNumbers('catboom', { start: 0, end: 9 }),
      frameRate: 30, // Adjusted frame rate
      repeat: 0 // Play the animation once
    });


    setInterval(() => {
      if (happiCat < 40.20 && Math.random() < 0.1) {
        happiCat += 5;

      }
      if (happiCat < 70.69 && Math.random() < 0.01) {
        happiCat += 5;

      }
      if (Math.random() < 0.01) {
        happiCat -= 6.9;
      }
      if (Math.random() < 0.003) {
        happiCat += 15;
      }
      if (happiCat > 99.99 && Math.random() < 0.1) {
        happiCat -= 0.4;

      }
      happiCat += ((this.score) / 100);
      if (this.score < 0) {
        happiCat = 0;

      }
      {
        if (happiCat < 0.1) {
          this.catThought = "am deid :(";
        } else if (happiCat >= 1 && happiCat <= 7) {
          this.catThought = "am much depress";
        } else if (happiCat > 7 && happiCat <= 14) {
          this.catThought = "i am depres";
        } else if (happiCat > 14 && happiCat <= 21) {
          this.catThought = "so many sads";
        } else if (happiCat > 21 && happiCat <= 28) {
          this.catThought = "am the sad";
        } else if (happiCat > 28 && happiCat <= 35) {
          this.catThought = "no is the happy";
        } else if (happiCat > 35 && happiCat <= 42) {
          this.catThought = "sad is the me";
        } else if (happiCat > 42 && happiCat <= 49) {
          this.catThought = "am mid fr rn";
        } else if (happiCat > 49 && happiCat <= 56) {
          this.catThought = "am bored";
        } else if (happiCat > 56 && happiCat <= 63) {
          this.catThought = "am a cat";
        } else if (happiCat > 63 && happiCat <= 70) {
          this.catThought = "am a little sad but am ok";
        } else if (happiCat > 70 && happiCat <= 77) {
          this.catThought = "i want hug";
        } else if (happiCat > 77 && happiCat <= 84) {
          this.catThought = "am a ok";
        } else if (happiCat > 84 && happiCat <= 91) {
          this.catThought = "am happi";
        } else if (happiCat > 91 && happiCat <= 98) {
          this.catThought = "am so happy";
        } else if (happiCat > 98 && happiCat <= 105) {
          this.catThought = "am the most not deressed";
        } else if (happiCat > 105 && happiCat <= 112) {
          this.catThought = "yippee";
        } else if (happiCat > 112 && happiCat <= 119) {
          this.catThought = "am eat cus am happy";
        } else if (happiCat > 119 && happiCat <= 126) {
          this.catThought = "me the happy so many";
        } else if (happiCat > 126 && happiCat <= 133) {
          this.catThought = "i dont wanna die";
        } else if (happiCat > 133 && happiCat <= 140) {
          this.catThought = "I'VE BEEN ENLIGHTENDED";
        } else {
          this.catThought = "am broken";
        }

      }
      this.catThink.setText(this.catThought);
    }, 1);


    const meowSound = this.sound.add('meow'); // Add the audio to the scene
    const boooom = this.sound.add('meowboomboommeowboomy'); // Add the audio to the scene
    this.explode = boooom;
    this.catBark = meowSound;

    // Add the game over image and make it invisible initially
    this.gameOverImage = this.add.image(856, 460, 'gameOver').setScale(1.1);
    this.gameOverImage.setVisible(false);
    this.input.on('gameobjectup', (pointer, gameObject) => {
      if (Math.random() < catNum) {
        gameObject.play('click');
        catNum -= 0.1667;
        //console.log(catNum);
        let catsilly = convertToInversePercentage(catNum);
        //console.log(catsilly);
        happiCat += (catNum * 10) + 1; //Cat hug gratitude
        this.meowmeowmeowcatmeow.setText('Boom Boom Chance: ' + catsilly);
      } else {
        gameObject.play('boom');
        boooom.play();
        this.score -= 100000;
        gameObject.on('animationcomplete', () => {

          this.gameOverImage.setVisible(true); // Make the game over image visible
          this.input.enabled = false; // Disable further input
        });
      }
      meowSound.play(); // Play the audio when the animation is triggered
      this.score += 1;
      this.scoreText.setText('Score: ' + this.score);
    });

    this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '48px', fill: '#000' });
    this.catThink = this.add.text(16, 140, '"I is a cat meow"', { fontSize: '48px', fill: '#000' });
    this.meowmeowmeowcatmeow = this.add.text(14, 50, 'Boom Boom Chance: 16.67%', { fontSize: '48px', fill: '#000' });
    this.catmood = this.add.text(14, 90, 'Cat Happiness: 100', { fontSize: '48px', fill: '#000' });

    var timer = this.time.addEvent({
      delay: 1500, // ms
      callback: this.computerTurn.bind(this),
      //args: [],
      callbackScope: this,
      loop: true,
    });
  }

  computerTurn() {
    if (Math.random() < this.catNum) {
    } else {
      this.character.play('boom');
      this.explode.play(); 
      this.score -= 100000;
      this.character.on('animationcomplete', () => {

        this.gameOverImage.setVisible(true); // Make the game over image visible
        this.input.enabled = false; // Disable further input
      });
    }
    this.catBark.play(); // Play the audio when the animation is triggered
    this.score += 1;
    this.scoreText.setText('Score: ' + this.score);
  }

  update() {
    // Update logic here
  }
}
