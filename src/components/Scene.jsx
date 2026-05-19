import React from "react";
import { OrbitControls } from "@react-three/drei";

import BMW from "./BMW";
import Environment from "./Environment";
import Lights from "./Lights";

export const Scene = ({ carColor }) => {
  return (
    <>
      <OrbitControls enableDamping />
      <Environment />
      <Lights />
      <BMW color={carColor} />
    </>
  );
};

export default Scene;
