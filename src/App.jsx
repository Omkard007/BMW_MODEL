import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";

import { Scene } from "./components/Scene";

const carColors = [
  { name: "Graphite", value: "#2f343a" },
  { name: "Alpine White", value: "#e8e6df" },
  { name: "M Blue", value: "#1f6feb" },
  { name: "Racing Red", value: "#c1121f" },
  { name: "Isle Green", value: "#0f6b4f" },
];

export default function App() {
  const [carColor, setCarColor] = useState(carColors[0].value);

  return (
    <div className="app">
      <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
        <Scene carColor={carColor} />
      </Canvas>

      <div className="color-panel" aria-label="Car paint colors">
        {carColors.map((color) => (
          <button
            key={color.value}
            className={`color-button ${carColor === color.value ? "active" : ""}`}
            style={{ backgroundColor: color.value }}
            title={color.name}
            aria-label={color.name}
            onClick={() => setCarColor(color.value)}
          />
        ))}
      </div>
    </div>
  );
}
