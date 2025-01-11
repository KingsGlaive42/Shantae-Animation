class shantae {
    constructor(game) {
        this.game = game;
        this.animator = new animator(ASSET_MANAGER.getAsset("./ShantaeDance.png"), 4.5, 2, 128, 118, 16, 0.07);
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 50);
    }
}