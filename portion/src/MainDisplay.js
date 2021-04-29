import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';

const MainDisplay = () => {

  const Plane = () => {
    return (
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]} receiveShadow >
        <planeBufferGeometry attach='geometry' args={[250, 250]} />
        <meshPhysicalMaterial attach='material' color='darkgreen' />
      </mesh>
    )
  }

  return (
    <Canvas>
      {/* <Sky distance={100}/> */}
      <color attach='background' args={['lightblue']} />
      <ambientLight intensity={0.5}/>
      <OrbitControls />
      <Plane />
    </Canvas>
  )
}


export default MainDisplay;