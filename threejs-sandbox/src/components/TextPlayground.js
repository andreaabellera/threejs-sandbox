import React from "react";
import "../styles/viewport.css";
import * as THREE from "three";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Interaction } from 'three.interaction';
import TextSprite from '@seregpie/three.text-sprite';

class Viewport extends React.Component {

    componentDidMount() {
        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 20; // CHANGED
        scene.add(camera);

    
        var canvas = document.createElement('canvas');
        var size = 1000; // CHANGED
        canvas.width = size;
        canvas.height = size;
        
        var context = canvas.getContext('2d');
        context.fillStyle = '#540981'; // CHANGED
        context.textAlign = 'center';
        context.font = '70px Tahoma';
        context.fillText("I ditched my soft eng team", size / 2, size / 2);

        var amap = new THREE.Texture(canvas);
        amap.needsUpdate = true;

        var mat = new THREE.SpriteMaterial({
            map: amap,
            transparent: false,
            useScreenCoordinates: false,
            color: 0xffffff // CHANGED
        });

        var sp = new THREE.Sprite(mat);
        sp.scale.set( 10, 10, 1 ); // CHANGED
        scene.add(sp); 
        
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const interaction = new Interaction(renderer, scene, camera);

        var spin = false;
        var limit = Math.PI/3;
        var steps = Math.PI/180;
        var direction;
        var mult = 1;
        sp.cursor = 'pointer'
		sp.on('click', ev => {
            spin = true;
            direction = Math.random()
		})

        var animate = function () {
            requestAnimationFrame( animate );

            if(spin){
                if(direction < 0.5){
                    camera.rotation.x += steps;
                    if(camera.rotation.x >= limit){
                        spin = false;
                        camera.rotation.x = 0;
                    }
                }
                else{
                    camera.rotation.y += steps;
                    if(Math.abs(camera.rotation.y) >= limit){
                        spin = false;
                        camera.rotation.y = 0;
                    }
                }
                
            }
            // if(moveRight){
            //     moveLeft = false;
            //     camera.position.x += 0.1;
            //     if(camera.position.x >= 4){
            //         moveRight = false;
            //     }
            // }
            // else if(moveLeft){
            //     moveRight = false;
            //     camera.position.x -= 0.1;
            //     if(camera.position.x <= -4){
            //         moveLeft = false;
            //     }
            // }

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