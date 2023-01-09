import handlebars from "vite-plugin-handlebars";
import { visualizer } from "rollup-plugin-visualizer";

export default async ({ mode }) => {
    // import assertion problems when using template literals
    let config;
    if (mode === "pixi") {
        config = await import("./pixi.json", { assert: { type: 'json' } });
    } else if (mode === "phaser") {
        config = await import("./phaser.json", { assert: { type: 'json' } });
    } else if (mode === "melon") {
        config = await import("./melon.json", { assert: { type: 'json' } });
    }
    return {
        plugins: [
            handlebars({
                context: config.default,
            }),
            visualizer({
                filename: './dist/report.html',
                // open: true,
                gzipSize: true,
            }),
        ],
    };
};