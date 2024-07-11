import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { lazy } from "react";

function Scene() {
    const { scene } = useGLTF('/three/computers.glb');
    return <primitive object={scene} />;
}

const Scene1 = lazy(async () => ({ default: Scene }));

function Radio() {
    return (
        <div className="flex-1 relative">
            <div className="absolute inset-0">
                <Canvas>
                    {/* <ambientLight intensity={Math.PI / 2} /> */}
                    <PerspectiveCamera makeDefault position={[0.275, 2, -1]} fov={90}>
                        {/* <spotLight position={[0, 40, 2]} angle={0.5} decay={1} distance={45} penumbra={1} intensity={2000} /> */}
                        <spotLight position={[0, 1, 1]} ang color="red" decay={0.75} distance={185} penumbra={-1} intensity={400} />
                    </PerspectiveCamera>
                    <Scene1 />
                </Canvas>
            </div>
        </div>
    )
}

export default Radio;