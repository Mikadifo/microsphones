import { Stage, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

const initialCameraPosition = [0, 4684.300370120001, 0];

const ModelViewer = () => {
  const canvasStyles = {
    position: "fixed",
    zIndex: -2,
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "#06030b",
  };

  return (
    <Canvas dpr={[1, 2]} style={canvasStyles}>
      <PerspectiveCamera
        makeDefault
        fov={10}
        position={initialCameraPosition}
      />
      <OrbitControls />
      <Stage environment={null}>
        <pointLight color="#552e8c" power={100} position={[0, 0, 100]} />
        <pointLight color="#3772ff" power={5} position={[10000, 0, 0]} />
        <pointLight color="#3772ff" power={5} position={[-10000, 0, 0]} />
        <Model />
      </Stage>
    </Canvas>
  );
};

export default ModelViewer;
