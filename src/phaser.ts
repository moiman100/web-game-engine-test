import Phaser from "phaser";

enum ImageNames {
    Logo = "logo",
}

class TestScene extends Phaser.Scene {
    image!: Phaser.GameObjects.Image;
    constructor() {
        super();
    }

    preload() {
        this.load.image(ImageNames.Logo, "/test.png")
    }

    create() {
        this.image = this.add.image(200, 200, ImageNames.Logo);

        this.scale.on("resize", this.resize, this);
        this.scale.refresh();

        this.game.events.on("step", this.step, this);
    }

    resize (gameSize: Phaser.Structs.Size) {
        const width = gameSize.width;
        const height = gameSize.height;

        // this.cameras.resize(width, height);

        this.image.setPosition(width / 2, height / 2);
    }

    step() {
        this.image.rotation += 0.01;
    }
}

const config = {
    type: Phaser.AUTO,
    width: "100%",
    height: "100%",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: TestScene,
    scale: {
        mode: Phaser.Scale.RESIZE,
    }
};

new Phaser.Game(config);
