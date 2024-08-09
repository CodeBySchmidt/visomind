import {useState, useRef} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {Points, PointMaterial} from '@react-three/drei'

import {OrbitControls} from "@react-three/drei"

// import * as random from 'maath/random/dist/maath-random.esm'

import mySVG from "../VISOTRAIN.svg"

import "./LoadingContainer.css"; // Importiere die CSS-Datei für die Stile der LoadingContainer-Komponente

const LoadingContainer = () => {

    return (
        <div className={"hero-section"}>
            <div className={"canvas-container"}>
                <Canvas camera={{position: [0, 0, 1]}}>
                    <Stars/>
                    <OrbitControls enableZoom={false}/>
                </Canvas>
            </div>

            <div className="loading-container">
                <div className="loader">
                    <img src={mySVG} alt="SVG"/>
                </div>
            </div>

        </div>

    );
};

export default LoadingContainer;


// Function to generate random points on the surface of a sphere
function randomOnSphere(numPoints, radius) {
    const points = new Float32Array(numPoints * 3)
    for (let i = 0; i < numPoints; i++) {
    const theta = Math.random() * 2 * Math.PI
    const phi = Math.acos(2 * Math.random() - 1)
    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = radius * Math.sin(phi) * Math.sin(theta)
    const z = radius * Math.cos(phi)
    points[i * 3] = x
    points[i * 3 + 1] = y
    points[i * 3 + 2] = z
  }
  return points
}

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => randomOnSphere(5000, 0.5))

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

