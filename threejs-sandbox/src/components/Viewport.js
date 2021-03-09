import React from "react";
import "../styles/viewport.css";
import * as THREE from "three";
import {
	BoxGeometry,
	Mesh,
	MeshLambertMaterial,
	PerspectiveCamera,
	PointLight,
	Scene,
	WebGLRenderer
} from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Interaction } from 'three.interaction';


class Viewport extends React.Component {

    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.z = 2;
        var renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setClearColor("#e5e5e5");
        renderer.setSize( window.innerWidth, window.innerHeight );
        this.mount.appendChild( renderer.domElement );
      
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshStandardMaterial( { color: 0xFFCC00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( light );

        const interaction = new Interaction(renderer, scene, camera);

        cube.cursor = 'pointer';

		cube.on('click', ev => {
			cube.rotation.x += 3;
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