import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function ImportBox(props) {
  const { nodes, materials } = useGLTF("/purpleblock1.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("/purpleblock1.glb");

export default ImportBox;
