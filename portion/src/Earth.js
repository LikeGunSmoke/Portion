import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Earth(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('Earth/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.Sphere_Material002_0.geometry} material={materials['Material.002']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')