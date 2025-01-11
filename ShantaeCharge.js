class shantaeCharge {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.animator = new animator(ASSET_MANAGER.getAsset("./ShantaeCharge.png"), 0, 0, 230, 110, 8, 0.06);

        this.x1 = -500;
        this.x2 = -400;
        this.x3 = -300;
        this.x4 = -200;
        this.x5 = -100;
        this.speed = 500;
    };

    update() {
        this.x1 += this.speed*this.game.clockTick;
        this.x2 += this.speed*this.game.clockTick;
        this.x3 += this.speed*this.game.clockTick;
        this.x4 += this.speed*this.game.clockTick;
        this.x5 += this.speed*this.game.clockTick;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x2, 0);
        this.animator.drawFrame(0, ctx, this.x1, 100);
        this.animator.drawFrame(0, ctx, this.x2, 200);
        this.animator.drawFrame(0, ctx, this.x3, 300);
        this.animator.drawFrame(0, ctx, this.x1, 400);
        this.animator.drawFrame(0, ctx, this.x4, 500);
        this.animator.drawFrame(0, ctx, this.x5, 600);
        this.animator.drawFrame(0, ctx, this.x2, 100);
        this.animator.drawFrame(0, ctx, this.x1, 200);
        this.animator.drawFrame(0, ctx, this.x2, 300);
        this.animator.drawFrame(0, ctx, this.x4, 400);
        this.animator.drawFrame(0, ctx, this.x3, 500);
    }
}