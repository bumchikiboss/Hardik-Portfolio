import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'
import LastModel from './LastModel'


const Earth = () => {

  const earth = useGLTF('./space_station_3/scene.gltf')
  return (
    <primitive
    object={earth.scene}/>
  )
}

const EarthCanvas = () => {
  return(
    <Canvas
      shadows
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
      }}>
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls
            //autoRotate
            enableZoom={false}
            enablePan={false}
            />
            <LastModel/>
        </Suspense>
        <Preload all/>
    </Canvas>
  )
}

export default EarthCanvas