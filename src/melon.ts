import * as me from "melonjs"

me.device.onReady(() => {
    if (!me.video.init(1218, 562, {parent : "screen", scaleMethod : "flex"})) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }

    me.loader.preload(
        [
            {
                name   : "test",
                type   : "image",
                src    : "/test.png",
            },
        ],
        function () {
            me.state.change(me.state.DEFAULT, true);

            const image = new me.Sprite(
                0,
                0,
                {
                    image : "test",
                    anchorPoint : new me.Vector2d(0.5, 0.5)
                }
            );

            me.game.world.addChild(image);

            me.event.on(me.event.VIEWPORT_ONRESIZE, (width: number, height: number) => {
                image.pos.set(width / 2, height / 2);
            });

            image.pos.set(me.game.viewport.width / 2, me.game.viewport.height / 2);

            me.event.on(me.event.GAME_UPDATE, () => {
                image.rotate(0.01);
            });
        }
    );
});