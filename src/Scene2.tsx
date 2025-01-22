/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scene2.gltf --transform 
Files: scene2.gltf [15.31KB] > /Users/eric/ReactAcademyLogos/scene2-transformed.glb [1.85KB] (88%)
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

export function Model(props: JSX.IntrinsicElements) {
  const { nodes } = useGLTF('/scene2-transformed.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={(nodes.mesh_0 as THREE.Mesh).geometry}
        material={(nodes.mesh_0 as THREE.Mesh).material}
        scale={0.1}
      />
    </group>
  );
}

useGLTF.preload('/scene2-transformed.glb');
