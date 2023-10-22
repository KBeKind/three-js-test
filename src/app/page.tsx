"use client";

import { useEffect } from "react";
import * as THREE from "three";

export default function Home() {
  const innerWidth = 1000;
  const innerHeight = 500;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();

  useEffect(() => {
    // Render the Three.js scene to the DOM
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry1 = new THREE.BoxGeometry(1, 1, 1);
    const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube1 = new THREE.Mesh(geometry1, material1);
    cube1.position.set(-1, 0, 0);

    const nextColor = new THREE.Color("hsla(200, 100%, 50%)");
    const geometry2 = new THREE.BoxGeometry(1, 1, 1);
    const material2 = new THREE.MeshBasicMaterial({ color: nextColor });
    const cube2 = new THREE.Mesh(geometry2, material2);
    cube2.position.set(1, 0, 0);

    const geometry3 = new THREE.BoxGeometry(1, 1, 1);
    const material3 = new THREE.MeshBasicMaterial({
      color: new THREE.Color("hsla(10, 100%, 50%)"),
    });
    const cube3 = new THREE.Mesh(geometry3, material3);
    cube3.position.set(0, 1, 0);

    scene.add(cube1);
    scene.add(cube2);
    scene.add(cube3);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    // Clean up the scene when the component unmounts
    return () => {
      renderer.dispose();
    };
  }, []);

  return <div></div>;
}
