"use client";
import { Canvas } from "@react-three/fiber";
import Floor from "./components/Floor";
import ABox from "./components/ABox";
import LightBulb from "./components/LightBulb";
import Controls from "./components/Controls";
import Draggable from "./components/Draggable";
import Importbox from "./components/ImportBox";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black">
      <Canvas
        shadows
        className=""
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.3} />

        <Draggable>
          <ABox rotateX={3} rotateY={0.2} />
        </Draggable>

        <Importbox />
        <LightBulb position={[0, 3, 0]} />
        <Controls />

        <Floor></Floor>
      </Canvas>
    </div>
  );
}
