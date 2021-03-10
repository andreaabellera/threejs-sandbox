import React from "react";
import "../styles/viewport.css";
import * as THREE from "three";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Interaction } from 'three.interaction';


class Viewport extends React.Component {

    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.z = 2;
        var renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setClearColor("#9FE4EB");
        renderer.setSize( window.innerWidth, window.innerHeight );
        this.mount.appendChild( renderer.domElement );
      
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshStandardMaterial( { color: 0xD98643 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        geometry = new THREE.CircleGeometry( 0.3, 16 );
        material = new THREE.MeshStandardMaterial( { color: 0xFFFFFF } );
        var circle = new THREE.Mesh( geometry, material );
        circle.position.set(-4, 0, 0);
        scene.add( circle );

        geometry = new THREE.CircleGeometry( 0.3, 16 );
        material = new THREE.MeshStandardMaterial( { color: 0xFFFFFF } );
        var circle2 = new THREE.Mesh( geometry, material );
        circle2.position.set(4, 0, 0);

        const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( light );

        const interaction = new Interaction(renderer, scene, camera);

        cube.cursor = 'pointer';
		cube.on('click', ev => {
			cube.rotation.x += 3;
		})

        circle.cursor = 'pointer';
        var panCamera = false;
        var panValue = 1;
        circle.on('mouseover', ev => {
            
			panCamera= true;
		})

        const controls = new OrbitControls( camera, renderer.domElement );

        var animate = function () {
            requestAnimationFrame( animate );

            if(panCamera){
                camera.position.x += 0.1;
                scene.add(circle2);
                panValue -= 0.1;
                if(panValue <= 0){
                    panValue = 1
                    panCamera = false;
                }
            }

            renderer.render( scene, camera );
        };

        animate();
    }
    render() {
        return (
            <div ref={ref => (this.mount = ref)} />
        )
    }
}

export default Viewport;