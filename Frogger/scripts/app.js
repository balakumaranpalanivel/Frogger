var example = (function(){

    // strict mode captures more errors
    "use strict";

    var scene = new THREE.Scene(),
    renderer = new THREE.WebGLRenderer(),
    light = new THREE.AmbientLight(0xffffff),
    camera,
    box;

    function initScene(){
        // what size do we render content
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById("webgl-container").appendChild(
            renderer.domElement);

        scene.add(light);

        camera = new THREE.PerspectiveCamera(35,
            window.innerWidth/window.innerHeight,
            1,
            1000
        );
        camera.position.z = 100;

        scene.add(camera);

        box = new THREE.Mesh(
            new THREE.BoxGeometry(20, 20, 20),
            new THREE.MeshBasicMaterial({color: 0xFF0000})
        );
        box.name = "box";
        scene.add(box);

        render();
    }

    function render(){
        box.rotation.y += 0.01;
        
        renderer.render(scene, camera);
        // ensure animation is as smooth as possible
        requestAnimationFrame(render);
    }

    // initialise scene
    window.onload = initScene;

    // for debugging
    return{
        scene: scene
    }

})();