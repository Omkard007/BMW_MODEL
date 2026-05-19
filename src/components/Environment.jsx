import React from "react";
import { ContactShadows, Environment as DreiEnvironment } from "@react-three/drei";

export default function Environment() {
  return (
    <>
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 8, 22]} />

      <DreiEnvironment preset="dawn" background={false} environmentIntensity={1.2} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.03, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#111111" roughness={0.38} metalness={0.15} />
      </mesh>

      <gridHelper
        args={[40, 40, "#2b2b2b", "#171717"]}
        position={[0, -1.02, 0]}
      />

      <ContactShadows
        position={[0, -0.98, 0]}
        opacity={0.55}
        scale={12}
        blur={2.5}
        far={6}
      />
    </>
  );
}
