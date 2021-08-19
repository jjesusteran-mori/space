/// <reference path='./vendor/babylon.d.ts' />

//getting canvas
const canvas = document.getElementById("renderCanvas");

//create a babylonJS engine
const engine = new BABYLON.Engine(canvas, true);

function createScene() {
    //create a scene
    const scene = new BABYLON.Scene(engine);
    //create a camera
    const camera = new BABYLON.FreeCamera(
        "camera",
        new BABYLON.Vector3(0, 0, 0),
        scene
    );
    //create a light
    const light = new BABYLON.HemisphericLight(
        "light",
        new BABYLON.Vector3(0, 1, 0),
        scene
    );
    return scene;
}

//create our scene
const scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
});
