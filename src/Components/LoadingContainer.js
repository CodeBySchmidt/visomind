import {useState, useRef} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {Points, PointMaterial, OrbitControls} from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

import mySVG from "../VISOTRAIN.svg"

import "./LoadingContainer.css"; // Importiere die CSS-Datei für die Stile der LoadingContainer-Komponente

const LoadingContainer = () => {

    return (
        <div className={"canvas-container"}>
            <Canvas camera={{position: [0, 0, 1]}}>
                <Stars/>
                <OrbitControls enableZoom={false} />
            </Canvas>

            <div className="loading-container">
                <div className="loader">
                    <img src={mySVG} alt="SVG"/>
                </div>
            </div>
        </div>
    );
};

export default LoadingContainer;

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 0.6 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 12
    ref.current.rotation.y -= delta / 12
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}