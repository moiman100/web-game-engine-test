import { Application, Assets, Sprite } from 'pixi.js';

(async () => {
  const app = new Application();
  
  document.body.appendChild(app.view as HTMLCanvasElement);
  
  const texture = await Assets.load("/test.png");
  
  const image = new Sprite(texture);
  image.anchor.set(0.5);
  app.stage.addChild(image);
  
  const resize = () => {
    const height = document.body.clientHeight;
    const width = document.body.clientWidth;
    app.renderer.resize(width, height);
    image.position.set(width / 2, height  / 2);
  };
  
  addEventListener("resize", resize);
  
  resize();
  
  app.ticker.add(() => {
      image.rotation += 0.01;
  });
})();