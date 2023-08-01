import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useAnimations } from "@react-three/drei";
import { useRef } from "react";

import CanvasLoader from '../Loader';
import { LoopRepeat } from "three";

import Bot from './Bot'

// const Computers = () => {

//   const group = useRef();
//   const { scene , animations } = useGLTF('./patrol_bot__vgdc/bot.gltf')
//   const { actions } = useAnimations(animations, group);
//   useEffect(() => {
//     actions.Idle.play(LoopRepeat);
//   },[]);

 
//   return (
//     <mesh ref={group} dispose={null}>
//       <hemisphereLight intensity={1.25}
//       groundColor='black' />
//       <pointLight intensity={1} />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.20}
//         penumbra={1}
//         intensity={2.5}
//         castShadow
//         shadow-mapSize={1024}
//         />
//       <primitive
//         object={scene}
//         scale={1.5}
//         position={[0, -6, 0]}
//       />
//     </mesh>
//   )
// }

const ComputersCanvas = () => {

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
            <Bot props={isMobile} />
        </Suspense>
        <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;