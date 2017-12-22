var game = (function() {

    "use strict";

    Physijs.scripts.worker = 'deps/physijs_worker.js';
    Physijs.scripts.ammo = 'ammo.js';


    var scene = new Physijs.Scene(),
        camera,
        renderer = new THREE.WebGLRenderer(),
        width = window.innerWidth,
        height = window.innerHeight - 10,
        controls;

    renderer.setSize(width, height);
    renderer.setClearColor(0xE0EEEE);
    
    document.getElementById("webgl-container").
                    appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(
        35,
        width/height,
        1,
        1000
    );

    scene.add(camera);
    scene.fog = new THREE.Fog(0xE0EEEE, 250, 600);
    scene.setGravity(new THREE.Vector3(0, -100, 0));

    function initScene() {
        render();
    }

    function render() {
        scene.simulate();

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }

    return{
        scene: scene,
        camera: camera,
        initScene: initScene,
        controls: controls
    }

})();

window.onload = game.initScene();