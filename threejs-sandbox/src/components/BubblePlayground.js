import React from "react";
import "../styles/viewport.css";
import * as THREE from "three";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Interaction } from 'three.interaction';
import TextSprite from '@seregpie/three.text-sprite';

class Viewport extends React.Component {

    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.z = 2;
        var renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setClearColor("#fffff6");
        renderer.setSize( window.innerWidth, window.innerHeight );
        this.mount.appendChild( renderer.domElement );

        var bubbles = [];
        var curr = 0;
        var startX = Math.random() *2;
        var startY = Math.random() *2;
        // var geometry = new THREE.CircleGeometry( 0.1, 16 );
        // var material = new THREE.MeshStandardMaterial( { color: 0x9FE4EB } );
        // var bubble = new THREE.Mesh( geometry, material );
        bubbles.push( new THREE.Mesh( new THREE.CircleGeometry( 0.1, 16 ), new THREE.MeshStandardMaterial( { color: 0x9FE4EB } ) ) )
        bubbles[curr].position.set(Math.random() *2, Math.random() *2, 0);
        scene.add( bubbles[curr] );

        const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( light );
        const ambient = new THREE.AmbientLight( 0x404040 );
        scene.add( ambient );

        const interaction = new Interaction(renderer, scene, camera);

        bubbles[curr].cursor = 'pointer'
		bubbles[curr].on('mouseover', ev => {
            curr += 1
            bubbles.push( new THREE.Mesh( new THREE.CircleGeometry( 0.1, 16 ), new THREE.MeshStandardMaterial( { color: 0x9FE4EB } ) ) )
            bubbles[curr].position.set(Math.random() *2, Math.random() *2, 0);
            scene.add( bubbles[curr] );
		})

        const controls = new OrbitControls( camera, renderer.domElement );

        var animate = function () {
            requestAnimationFrame( animate );

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