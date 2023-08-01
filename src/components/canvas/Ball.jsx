import React , { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, Reflector, useTexture } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={2.75} rotationIntensity={1} floatIntensity={4}>
      <ambientLight color="#ebccff" intensity={0.35} />
      <directionalLight position={[-1, 5, 5]} intensity={.8}/>
      <mesh castShadow receiveShadow scale={2.85}>
        <dodecahedronGeometry args={[1,1]} />
        <meshStandardMaterial 
        color="white"
        metalness={.5}
        roughness={0}
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        />
        <Decal position={[0,0,1]} rotation={[2 * Math.PI, 0 ,6.25 ]} flatShading map={decal} />
      </mesh>
    </Float>
  )
}
const BallCanvas = ({ icon }) => {
  return(
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true}}>
        
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            />
            <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
    </Canvas>
  )
}

export default BallCanvas