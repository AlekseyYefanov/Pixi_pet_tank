import { Application, Graphics } from "./pixi.mjs";
import { assetsMap } from "./assetsMap.js";
import { Tank } from "./tank.js";

// Create the application
const app = new Application({
    width: 800,
    height: 800,
    backgroundColor: 0xc2c2c2,
    view: document.getElementById("canvas"),
});

const runGame = () => {
    console.log("LOADED!");
    const marker = new Graphics();
    marker.beginFill(0xff0000, 1);
    marker.drawCircle(0, 0, 10);
    marker.endFill();

    const tank = new Tank();
    app.stage.addChild(tank.view);
    app.stage.addChild(marker);

    app.stage.position.set(400, 400);

};

assetsMap.sprites.forEach((value) => app.loader.add(value));
app.loader.load(runGame);
