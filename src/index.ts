import Phaser from "phaser";
import Level from "./scenes/Level";
import preloadPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", preloadPackUrl);
    }

    create() {

       this.scene.start("Preload");
    }
}

const game = new Phaser.Game({
    width: 800,
    height: 600,
    backgroundColor: "#2f2f2f",
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        autoCenter: Phaser.Scale.Center.CENTER_BOTH
    },
    scene: [Boot, Preload, Level]
});

game.scene.start("Boot");


