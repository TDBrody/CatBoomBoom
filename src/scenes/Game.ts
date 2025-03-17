import { Scene } from 'phaser';

function convertToInversePercentage(decimal: number): string {
  return ((1 - decimal) * 100).toFixed(2) + '%';
}

export class Game extends Scene {
  score = 0;
  scoreText: Phaser.GameObjects.Text;
  meowmeowmeowcatmeow: Phaser.GameObjects.Text;
  gameOverImage: Phaser.GameObjects.Image;
  intervalId: number;
  happiCat: number;
  catmood: Phaser.GameObjects.Text;
  catThink: Phaser.GameObjects.Text;
  catThought: string;
  callback: Phaser.GameObjects.Text;
  catNum: number;
  boooom: Phaser.GameObjects.Text;
  meowSound: Phaser.Sound.BaseSound;
  character: Phaser.GameObjects.Sprite;
  explode: Phaser.Sound.BaseSound;
  catBark: Phaser.Sound.BaseSound;

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
    this.catNum = 0.8333;
    this.happiCat = 100;
    setInterval(() => {
      this.happiCat -= this.catNum / 100;
      //console.log(`this.happiCat: ${this.happiCat.toFixed(2)}`);
      this.catmood.setText('Cat Happiness: ' + this.happiCat);
    }, 10);
    //console.log (this.catNum);
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
      if (this.happiCat < 40.20 && Math.random() < 0.1) {
        this.happiCat += 5;

      }
      if (this.happiCat < 70.69 && Math.random() < 0.01) {
        this.happiCat += 5;

      }
      if (Math.random() < 0.01) {
        this.happiCat -= 6.9;
      }
      if (Math.random() < 0.003) {
        this.happiCat += 15;
      }
      if (this.happiCat > 99.99 && Math.random() < 0.1) {
        this.happiCat -= 0.4;

      }
      this.happiCat += ((this.score) / 100);
      if (this.score < 0) {
        this.happiCat = 0;

      }
      {
        if (this.happiCat < 0.1) {
          this.catThought = "am deid :(";
        } else if (this.happiCat >= 1 && this.happiCat <= 7) {
          this.catThought = "am much depress";
        } else if (this.happiCat > 7 && this.happiCat <= 14) {
          this.catThought = "i am depres";
        } else if (this.happiCat > 14 && this.happiCat <= 21) {
          this.catThought = "so many sads";
        } else if (this.happiCat > 21 && this.happiCat <= 28) {
          this.catThought = "am the sad";
        } else if (this.happiCat > 28 && this.happiCat <= 35) {
          this.catThought = "no is the happy";
        } else if (this.happiCat > 35 && this.happiCat <= 42) {
          this.catThought = "sad is the me";
        } else if (this.happiCat > 42 && this.happiCat <= 49) {
          this.catThought = "am mid fr rn";
        } else if (this.happiCat > 49 && this.happiCat <= 56) {
          this.catThought = "am bored";
        } else if (this.happiCat > 56 && this.happiCat <= 63) {
          this.catThought = "am a cat";
        } else if (this.happiCat > 63 && this.happiCat <= 70) {
          this.catThought = "am a little sad but am ok";
        } else if (this.happiCat > 70 && this.happiCat <= 77) {
          this.catThought = "i want hug";
        } else if (this.happiCat > 77 && this.happiCat <= 84) {
          this.catThought = "am a ok";
        } else if (this.happiCat > 84 && this.happiCat <= 91) {
          this.catThought = "am happi";
        } else if (this.happiCat > 91 && this.happiCat <= 98) {
          this.catThought = "am so happy";
        } else if (this.happiCat > 98 && this.happiCat <= 105) {
          this.catThought = "am the most not deressed";
        } else if (this.happiCat > 105 && this.happiCat <= 112) {
          this.catThought = "yippee";
        } else if (this.happiCat > 112 && this.happiCat <= 119) {
          this.catThought = "am eat cus am happy";
        } else if (this.happiCat > 119 && this.happiCat <= 126) {
          this.catThought = "me the happy so many";
        } else if (this.happiCat > 126 && this.happiCat <= 133) {
          this.catThought = "i dont wanna die";
        } else if (this.happiCat > 133 && this.happiCat <= 140) {
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
    this.input.on('gameobjectup', (_pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.Sprite) => {
      if (Math.random() < this.catNum) {
        gameObject.play('click');
        this.catNum -= 0.1667;
        //console.log(this.catNum);
        const catsilly = convertToInversePercentage(this.catNum);
        //console.log(catsilly);
        this.happiCat += (this.catNum * 10) + 1; //Cat hug gratitude
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

    this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '48px', color: '#000' });
    this.catThink = this.add.text(16, 140, '"I is a cat meow"', { fontSize: '48px', color: '#000' });
    this.meowmeowmeowcatmeow = this.add.text(14, 50, 'Boom Boom Chance: 16.67%', { fontSize: '48px', color: '#000' });
    this.catmood = this.add.text(14, 90, 'Cat Happiness: 100', { fontSize: '48px', color: '#000' });

    this.input.on('gameobjectup', (_pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.Sprite) => {
      // Add the event
      const event = this.time.addEvent({
          delay: 1500, // ms
          callback: () => {
              this.computerTurn();
              // Stop the event after it has executed once
              event.remove(); // This removes the event after the first execution
          },
          callbackScope: this,
          loop: false, // Ensures the event only happens once
      });
  });
  
  }

  computerTurn() {
    if (Math.random() < this.catNum) {
      this.character.play('click');
      this.catNum -= 0.1667;
      //console.log(this.catNum);
      const catsilly = convertToInversePercentage(this.catNum);
      //console.log(catsilly);
      this.happiCat += (this.catNum * 10) + 1; //Cat hug gratitude
      this.meowmeowmeowcatmeow.setText('Boom Boom Chance: ' + catsilly);
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