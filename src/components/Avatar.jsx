import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Avatar = ({ height, width }) => {
  const scene = useRef(new THREE.Scene());
  const humanModel = useRef(null);
  const headModel = useRef(null);
  const torsoModel = useRef(null);
  const legModel = useRef(null);
  const controls = useRef(null);
  const humanBoundingBox = useRef(null);

  const [modelCloth, setModelCloth] = useState({
    head: { model: "", size: "", color: "" },
    torso: { model: "", size: "", color: "" },
    leg: { model: "", size: "", color: "" }
  });
  useEffect(() => {
    localStorage.setItem("myCloth", JSON.stringify(modelCloth));
  }, [modelCloth]); // Store in localStorage whenever state updates

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
      humanModel.current = obj;
      scene.current.add(obj);
      humanBoundingBox.current = new THREE.Box3().setFromObject(obj);
    });

    // OrbitControls
    controls.current = new OrbitControls(camera, renderer.domElement);
    controls.current.enableDamping = true;
    controls.current.dampingFactor = 0.05;
    controls.current.screenSpacePanning = false;
    controls.current.minDistance = 1;
    controls.current.maxDistance = 10;
    controls.current.maxPolarAngle = Math.PI / 2;

    function animate() {
      requestAnimationFrame(animate);
      controls.current.update();
      renderer.render(scene.current, camera);
    }
    animate();

    return () => {
      renderer.dispose();
    };
  }, [height, width]);

  const handleDrop = (e) => {
    e.preventDefault();
    let cloth;
    const items = e.dataTransfer.items;
    if (items && items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        cloth = items[i].type.split("|");
        console.log(cloth)
      }
    }

    setModelCloth((prev) => {
      const newModelCloth = { ...prev };
      newModelCloth[cloth[2]] = {
        model: cloth[0],
        size: cloth[4],
        color: cloth[3]
      };
      return newModelCloth;
    });

    // Remove previous model if exists
    if (cloth[2] === "torso" && torsoModel.current) {
      scene.current.remove(torsoModel.current);
      torsoModel.current.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((mat) => mat.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      torsoModel.current = null;
    }

    switch (cloth[1]) {
      case "fbx":
        const fbxLoader = new FBXLoader();
        fbxLoader.load(
          "/" + cloth[0] + ".fbx",
          (fbx) => {
            fbx.scale.set(parseFloat(cloth[6]), parseFloat(cloth[7]), parseFloat(cloth[8]));
            fbx.position.y += parseFloat(cloth[9]);
            fbx.position.z += parseFloat(cloth[10]);

            const material = new THREE.MeshStandardMaterial({ color: parseInt(cloth[5]) });
            fbx.traverse((child) => {
              if (child.isMesh) {
                child.material = material;
                child.castShadow = true;
                child.receiveShadow = true;
              }
            });

            scene.current.add(fbx);
            if (cloth[2] === "torso") {
              torsoModel.current = fbx;
            }
          },
          undefined,
          (error) => console.error("Error loading fbx file:", error)
        );
        break;

      case "obj":
        const objLoaderDrop = new OBJLoader();
        objLoaderDrop.load(
          "/" + cloth[0] + ".obj",
          (obj) => {
            obj.scale.set(parseFloat(cloth[6]), parseFloat(cloth[7]), parseFloat(cloth[8]));
            obj.position.y += parseFloat(cloth[9]);
            obj.position.z += parseFloat(cloth[10]);

            const material = new THREE.MeshStandardMaterial({ color: parseInt(cloth[5]) });
            obj.traverse((child) => {
              if (child.isMesh) {
                child.material = material;
                child.castShadow = true;
                child.receiveShadow = true;
              }
            });

            scene.current.add(obj);
            if (cloth[2] === "torso") {
              torsoModel.current = obj;
            }
          },
          undefined,
          (error) => console.error("Error loading obj file:", error)
        );
        break;

      case "stl":
        const stlLoader = new THREE.STLLoader();
        stlLoader.load(
          "/" + cloth[0] + ".stl",
          (geometry) => {
            const material = new THREE.MeshStandardMaterial({ color: parseInt(cloth[5]) });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(parseFloat(cloth[6]), parseFloat(cloth[7]), parseFloat(cloth[8]));
            mesh.position.y += parseFloat(cloth[9]);
            mesh.position.z += parseFloat(cloth[10]);

            mesh.castShadow = true;
            mesh.receiveShadow = true;

            scene.current.add(mesh);
            if (cloth[2] === "torso") {
              torsoModel.current = mesh;
            }
          },
          undefined,
          (error) => console.error("Error loading stl file:", error)
        );
        break;

      default:
        console.log("Unsupported file type:", cloth[1]);
    }
  };

  return (
    <div className="canvas-container mt-10 drop-zone" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
      <canvas id="myCanvas" width={width || 350} height={height || 500} className="rounded-lg"></canvas>
    </div>
  );
};

export default Avatar;
