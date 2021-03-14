import React from "react";
import "../styles/viewport.css";
import * as THREE from "three";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Interaction } from 'three.interaction';


class Viewport extends React.Component {

    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.x = 1.3;
        camera.position.z = 2;
        var renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setClearColor("#9FE4EB");
        renderer.setSize( window.innerWidth, window.innerHeight );
        this.mount.appendChild( renderer.domElement );
      
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshStandardMaterial( { color: 0xD98643 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        geometry = new THREE.CircleGeometry( 0.3, 3 );
        material = new THREE.MeshStandardMaterial( { color: 0x658909 } );
        var circle1 = new THREE.Mesh( geometry, material );
        circle1.position.set(-4, 0, 0);
        scene.add( circle1 );

        geometry = new THREE.CircleGeometry( 0.3, 3 );
        material = new THREE.MeshStandardMaterial( { color: 0x658909 } );
        var circle2 = new THREE.Mesh( geometry, material );
        circle2.position.set(4, 0, 0);
        circle2.rotateZ(Math.PI);
        scene.add( circle2 );

        const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( light );
        const ambient = new THREE.AmbientLight( 0x404040 );
        scene.add( ambient );

        const interaction = new Interaction(renderer, scene, camera);

        cube.cursor = 'pointer'
		cube.on('click', ev => {
			cube.rotation.x += 3
		})

        var moveRight = false
        var moveLeft = false
        circle1.cursor = 'pointer'
        circle1.on('mouseover', ev => {
			moveRight = true
		})

        circle2.cursor = 'pointer'
        circle2.on('mouseover', ev => {
			moveLeft = true
		})

        const controls = new OrbitControls( camera, renderer.domElement );

        var animate = function () {
            requestAnimationFrame( animate );

            if(moveRight){
                moveLeft = false;
                camera.position.x += 0.1;
                if(camera.position.x >= 4){
                    moveRight = false;
                }
            }
            else if(moveLeft){
                moveRight = false;
                camera.position.x -= 0.1;
                if(camera.position.x <= -4){
                    moveLeft = false;
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