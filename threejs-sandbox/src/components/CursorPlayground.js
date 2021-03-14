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
        renderer.setClearColor("#452806");
        renderer.setSize( window.innerWidth, window.innerHeight );
        this.mount.appendChild( renderer.domElement );

        var mouseVector = new THREE.Vector3();

        var geometry = new THREE.CircleGeometry( 0.3, 3 );
        var material = new THREE.MeshStandardMaterial( { color: 0x658909 } );
        var circle1 = new THREE.Mesh( geometry, material );
        circle1.position.set(-4, 0, 0);
        scene.add( circle1 );

        const controls = new OrbitControls( camera, renderer.domElement );

        var animate = function () {
            requestAnimationFrame( animate );
            //mouseVector = THREE.Vector3();
            circle1.position.x = mouseVector.x;
            circle1.position.y = mouseVector.y;
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