import React, { useEffect } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Avatar = ({ height, width }) => {
  useEffect(() => {
    const canvas = document.getElementById("myCanvas");
    const canvasWidth = width || 350;
    const canvasHeight = height || 500;

    const scene = new THREE.Scene();
    const BlackMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

    // Créer un renderer avec alpha activé pour la transparence
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
    renderer.setSize(canvasWidth, canvasHeight);

    const camera = new THREE.PerspectiveCamera(
      75,
      canvasWidth / canvasHeight,
      0.1,
      1000
    );

    const loader = new OBJLoader();
    loader.load("/3DModel_LowPoly.obj", (obj) => {
      scene.add(obj);

      camera.position.z = 1.5;

      const light = new THREE.AmbientLight(0xffffff, 0.7);
      scene.add(light);

      function animate() {
        requestAnimationFrame(animate);
        obj.rotation.y += 0.005;
        renderer.render(scene, camera);
      }


    
      animate();
    });

    return () => {
      renderer.dispose();
    };
  }, [height, width]);

  return (
    <div className="canvas-container mt-10">
      <canvas
        id="myCanvas"
        width={width || 350}
        height={height || 500}
        className="rounded-lg"
      ></canvas>
    </div>
  );
};

export default Avatar;
