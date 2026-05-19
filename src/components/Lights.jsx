import React from "react";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[6, 8, 5]} intensity={2.2} castShadow />
      <spotLight
        position={[-4, 6, 4]}
        angle={0.45}
        penumbra={0.8}
        intensity={3}
        castShadow
      />
    </>
  );
}
