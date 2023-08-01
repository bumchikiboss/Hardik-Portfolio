import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

import Ship from './Ship'

const MidModel = () => {

    const [isMobile , setIsMobile] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 500px)');
  
      setIsMobile(mediaQuery.matches);
  
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }
  
      mediaQuery.addEventListener('change',handleMediaQueryChange);
  
      return () => {
        mediaQuery.removeEventListener('change',handleMediaQueryChange);
      }
    })
    return (
      <Canvas
        shadows
        camera={{position: [20, 3, 5], fov: 25}}
        gl={{ preserveDrawingBuffer: true}}>
          
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              />
              <Ship props={isMobile} />
          </Suspense>
          <Preload all />
      </Canvas>
    )
  }
  
  export default MidModel;