
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useAnimations , Float } from "@react-three/drei";
import { LoopOnce, LoopPingPong, LoopRepeat } from "three";

import Stars from "./Stars";

export default function Model({props}) {
    const group = useRef();
  const { scene, animations } = useGLTF('./sniper/scene.gltf')
  const { actions } = useAnimations(animations,scene);
  useEffect(() => {
         console.log(actions);
         //actions.Entrance.setLoop(LoopOnce, 1).play();

         actions.fly.play();

      },[]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* <Float speed={3.75} rotationIntensity={3} floatIntensity={20} floatingRange={[-0.02,0.02]}> */}
      <mesh castShadow receiveShadow >
      <hemisphereLight intensity={1.25}
      groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[20, 50, 100]}
        angle={0.20}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
        />
        <meshStandardMaterial
        roughness={1} />
      <primitive
        object={scene}
        
        scale={props? .01 : .8}
        position={props? [0, 2, 0 ] :[10, 20, -50]}
      />
    </mesh>
    {/* </Float> */}
    </group>
  );
}

useGLTF.preload('./sniper/scene.gltf');