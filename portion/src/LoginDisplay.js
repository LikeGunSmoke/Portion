import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars} from '@react-three/drei';
import Earth from './Earth.js';

const LoginDisplay = () => {


  return (
    <Canvas>
      <color attach='background' args={['black']} />
      <Stars />
      <ambientLight intensity={0.5}/>
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}


export default LoginDisplay;