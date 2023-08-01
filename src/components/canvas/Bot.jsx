
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useAnimations } from "@react-three/drei";
import { LoopOnce, LoopPingPong, LoopRepeat } from "three";


export default function Model({props}) {
    const group = useRef();
  const { scene, animations } = useGLTF('./patrol_bot__vgdc/bot.gltf')
  const { actions } = useAnimations(animations,scene);
  useEffect(() => {
         console.log(actions);
         actions.Entrance.setLoop(LoopOnce, 1).play();

         actions.Idle.play();

      },[]);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh rotation-y={Math.PI * 0.40}>
      <hemisphereLight intensity={1.25}
      groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.20}
        penumbra={1}
        intensity={2.5}
        castShadow
        shadow-mapSize={1024}
        />
        
      <primitive
        object={scene}
        scale={props? 1 : 1.5}
        position={props? [0, -3.8, 0 ] :[0, -6, 0]}
      />
    </mesh>
    </group>
  );
}

useGLTF.preload('./patrol_bot__vgdc/bot.gltf');