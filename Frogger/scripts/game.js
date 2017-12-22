var game = (function() {

    "use strict";

    Physijs.scripts.worker = 'deps/physijs_worker.js';
    Physijs.scripts.ammo = 'ammo.js';


    var scene = new Physijs.Scene(),
        camera,
        renderer = new THREE.WebGLRenderer(),
        width = window.innerWidth,
        height = window.innerHeight - 10,
        playerBox,
        playerActive = true,
        lives = 3,
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
        resetScene();
        player.createPlayer();
        render();
    }

    function resetScene(){
        camera.position.set(0, 20, 200);
        camera.rotation.set(0, 0, 0);
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