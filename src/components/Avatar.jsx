import React, { useEffect } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Avatar = () => {
  useEffect(() => {
    // Récupérer le canvas
    const canvas = document.getElementById("myCanvas");
    if (!canvas) return;

    // Créer une scène Three.js
    const scene = new THREE.Scene();

    // Créer une caméra
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.width / canvas.height,
      0.1,
      1000
    );

    // Créer un renderer Three.js et l'ajouter au canvas
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.width, canvas.height);

    // Créer un chargeur de modèle OBJ
    const loader = new OBJLoader();

    // Charger un modèle 3D
    loader.load(
      "/3DModel_LowPoly.obj",
      (obj) => {
        // Ajouter le modèle .obj à la scène
        scene.add(obj);

        // Positionner la caméra
        camera.position.z = 1.5;

        // Ajouter de la lumière à la scène
        const light = new THREE.AmbientLight(0x404040); // Lumière ambiante douce
        scene.add(light);

        // Fonction de rendu pour animer le modèle
        const animate = () => {
          requestAnimationFrame(animate);

          // Appliquer une rotation au modèle pour l'animer
          obj.rotation.y += 0.005;

          // Rendre la scène avec la caméra
          renderer.render(scene, camera);
        };

        // Démarrer l'animation
        animate();
      },
      undefined,
      (error) => {
        console.error("Erreur lors du chargement du modèle :", error);
      }
    );

    // Nettoyage à la destruction du composant
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className="canvas-container mt-10">
      <canvas
        id="myCanvas"
        width="350"
        height="500"
        className="border-2 border-dashed border-primary-color rounded-lg"
      ></canvas>
    </div>
  );
};

export default Avatar;
