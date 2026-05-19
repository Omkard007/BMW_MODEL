import React, { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const paintMaterialNames = [
  "paint___",
  "2024paint_material",
  "paint_orange",
  "metalicpaint",
];

function isPaintMaterial(material) {
  const name = material?.name?.toLowerCase() || "";

  return (
    paintMaterialNames.some((paintName) => name.includes(paintName)) &&
    !name.includes("matteblack")
  );
}

export default function BMW({ color = "#2f343a", ...props }) {
  const carRef = useRef();
  const { scene } = useGLTF("/models/bmw.glb");
  const rotationSpeed = 0.4;

  useFrame((_, delta) => {
    carRef.current.rotation.y += rotationSpeed * delta;
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (!child.isMesh) return;

      child.castShadow = true;
      child.receiveShadow = true;

      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];

      materials.forEach((material) => {
        if (!isPaintMaterial(material) || !material.color) return;

        material.color.set(color);
        material.metalness = Math.max(material.metalness ?? 0, 0.65);
        material.roughness = Math.min(material.roughness ?? 0.35, 0.35);
        material.needsUpdate = true;
      });
    });
  }, [scene, color]);

  return (
    <primitive
      ref={carRef}
      object={scene}
      scale={1}
      position={[0, -1, 0]}
      castShadow
      receiveShadow
      {...props}
    />
  );
}
