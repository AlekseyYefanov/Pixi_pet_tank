import { AnimatedSprite, Container, Sprite, Texture } from "./pixi.mjs";

export const createAnimationSprite = (textureNames, position = { x: 0, y: 0 }, anchor = { x: 0.5, y: 0.5 }) => {
    const textures = textureNames.map(name => Texture.from(name));

    const animatedSprite = new AnimatedSprite(textures);
    animatedSprite.position.copyFrom(position);
    animatedSprite.anchor.copyFrom(anchor);
    return animatedSprite;
}

export const createSprite = (textureNames, position = { x: 0, y: 0 }, anchor = { x: 0.5, y: 0.5 }) => {
    const sprite = new Sprite(Texture.from(textureNames));

    sprite.position.copyFrom(position);
    sprite.anchor.copyFrom(anchor);
    return sprite;
}

export class Tank {
    constructor() {
        this._view = new Container();

        this._tracksLeft =  createAnimationSprite(["TrackСFrame1", "TrackСFrame2"], { x: 0, y: -80});
        this._tracksRight =  createAnimationSprite(["TrackСFrame1", "TrackСFrame2"], { x: 0, y: 80});


        this._tracksLeft.animationSpeed = 0.25;
        this._tracksRight.animationSpeed = 0.25;

        this._view.addChild(this._tracksLeft, this._tracksRight);


        this._hull = new Sprite(Texture.from("HeavyHullB"));
        this._hull.anchor.set(0.5);
        this._view.addChild(this._hull);

        const gunLeft = createSprite("HeavyGunB", { x: 140, y: -27});
        const gunRight = createSprite("HeavyGunB", { x: 160, y: 29});

        this._view.addChild(gunLeft, gunRight);

        const gunConnector =  createSprite("GunConnectorD", { x: 80, y: 0});
        const heavyTowerB =  createSprite("HeavyTowerB");

        this._view.addChild(gunConnector, heavyTowerB);

    }

    get view() {
        return this._view;
    }
}