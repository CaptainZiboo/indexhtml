import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Avatar = ({ height, width }) => {
  const scene = useRef(new THREE.Scene());
  const humanModel = useRef(null); // Store human model reference
  const marcelModel = useRef(null); // Store Marcel reference
  const controls = useRef(null); // Store OrbitControls reference
  const gravity = useRef(-0.005); // Gravity force
  const velocity = useRef(0); // Vertical velocity for Marcel
  const humanBoundingBox = useRef(null); // Bounding box for collision detection

  useEffect(() => {
    const canvas = document.getElementById("myCanvas");
    const canvasWidth = width || 350;
    const canvasHeight = height || 500;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvasWidth, canvasHeight);

    const camera = new THREE.PerspectiveCamera(75, canvasWidth / canvasHeight, 0.1, 1000);
    camera.position.z = 1.5;

    const light = new THREE.AmbientLight(0xffffff, 0.7);
    scene.current.add(light);

    // Load Human Model
    const objLoader = new OBJLoader();
    objLoader.load("/human_model.obj", (obj) => {
      humanModel.current = obj; // Store reference
      scene.current.add(obj);

      // Compute bounding box after the model is loaded
      const box = new THREE.Box3().setFromObject(obj);
      humanBoundingBox.current = box;
    });

    // ✅ Add OrbitControls
    controls.current = new OrbitControls(camera, renderer.domElement);
    controls.current.enableDamping = true;
    controls.current.dampingFactor = 0.05;
    controls.current.screenSpacePanning = false;
    controls.current.minDistance = 1;
    controls.current.maxDistance = 10;
    controls.current.maxPolarAngle = Math.PI / 2;

    function animate() {
      requestAnimationFrame(animate);
      controls.current.update(); // ✅ Update controls each frame

      // ✅ Apply Gravity to Marcel
      if (marcelModel.current) {
        velocity.current += gravity.current; // Apply gravity
        marcelModel.current.position.y += velocity.current; // Move downward

        // ✅ Prevent Marcel from falling through the human model
        if (humanBoundingBox.current) {
          const marcelBox = new THREE.Box3().setFromObject(marcelModel.current);
          if (marcelBox.intersectsBox(humanBoundingBox.current)) {
            marcelModel.current.position.y -= velocity.current; // Stop falling
            velocity.current = 0; // Reset velocity
          }
        }
      }

      renderer.render(scene.current, camera);
    }
    animate();

    return () => {
      renderer.dispose();
    };
  }, [height, width]);

  const handleDrop = (e) => {
    e.preventDefault();
    console.log("Dropped!");
    
    const fbxLoader = new FBXLoader();
    fbxLoader.load(
      "/marcel.fbx",
      (fbx) => {
        fbx.scale.set(0.0038, 0.0038, 0.0038); // Adjust scale if needed
        fbx.position.y += 0.4
        fbx.position.z += 0.02
        velocity.current = 0; // Reset velocity

        // Apply blue material
        const blueMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
        fbx.traverse((child) => {
          if (child.isMesh) {
            child.material = blueMaterial;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        marcelModel.current = fbx; // Store reference for physics
        scene.current.add(fbx);
      },
      undefined,
      (error) => console.error("Error loading marcel.fbx:", error)
    );
  };

  return (
    <div className="canvas-container mt-10 drop-zone" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
      <canvas id="myCanvas" width={width || 350} height={height || 500} className="rounded-lg"></canvas>
    </div>
  );
};

export default Avatar;
