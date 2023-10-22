import React from "react";

function ABox(props) {
  return (
    <mesh {...props} recieveShadow={true} castShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  );
}
export default ABox;
