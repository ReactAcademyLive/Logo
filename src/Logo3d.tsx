import { EllipseCurve, Color, Mesh } from 'three';
import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Trail,
  Float,
  Line,
  // Sphere, Stars, Text,
  useGLTF,
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// start typescript workaround

// import { ThreeElements } from '@react-three/fiber';

// declare global {
//   // eslint-disable-next-line @typescript-eslint/no-namespace
//   namespace React {
//     // eslint-disable-next-line @typescript-eslint/no-namespace
//     namespace JSX {
//       // eslint-disable-next-line @typescript-eslint/no-empty-object-type
//       interface IntrinsicElements extends ThreeElements {}
//     }
//   }
// }

// end typescript workaround

interface GLTFResult /* extends GLTF */ {
  nodes: {
    mesh_0: Mesh;
    mesh_1: Mesh;
    mesh_2: Mesh;
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  materials: {
    // Define materials if needed
  };
}

export default function Logo3d() {
  // ts-disable-next-line
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      {/* <color attach='background' args={['transparent']} /> */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Atom />
      </Float>
      {/* <Stars saturation={0.9} count={1000} speed={1} /> */}
      <EffectComposer>
        <Bloom
          //mipmapBlur
          luminanceThreshold={1}
          radius={0.7}
        />
      </EffectComposer>
    </Canvas>
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AtomProps {}

function Atom(props: AtomProps) {
  const points = useMemo(
    () =>
      new EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100),
    []
  );
  const col = new Color().setRGB(
    0.11697066774917994,
    0.6938717612856897,
    0.9559733532482866
  );

  const { nodes /* materials */ } = useGLTF(
    '/model.gltf'
  ) as unknown as GLTFResult;

  return (
    <group {...props}>
      <Line worldUnits={true} points={points} color={col} lineWidth={0.3} />
      <Line
        worldUnits={true}
        points={points}
        color={col}
        lineWidth={0.3}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits={true}
        points={points}
        color={col}
        lineWidth={0.3}
        rotation={[0, 0, -1]}
      />
      <Electron position={[0, 0, 0.3]} speed={6} />
      <Electron
        position={[0, 0, 0.3]}
        rotation={[0, 0, Math.PI / 3]}
        speed={6.5}
      />
      <Electron
        position={[0, 0, 0.3]}
        rotation={[0, 0, -Math.PI / 3]}
        speed={7}
      />
      {/* <Sphere args={[0.35, 64, 64]}>
        <meshBasicMaterial color='turquoise' toneMapped={false} />
      </Spher</Sphere>e> */}

      <group scale={[0.1, -0.1, 0.1]} position={[-0.8, 0.9, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_1.geometry}
          material={nodes.mesh_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2.geometry}
          material={nodes.mesh_2.material}
        />
      </group>
    </group>
  );
}

function Electron({ radius = 2.9, speed = 6, ...props }) {
  const ref = useRef<Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current?.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  return (
    <group {...props}>
      <Trail
        local={false}
        // worldUnits={true}
        //rotation={props.rotation}
        width={5}
        length={6}
        color={new Color().setRGB(1, 1, 10)}
        attenuation={(t) => t * t}
      >
        <mesh ref={ref} rotation={props.rotation}>
          <sphereGeometry args={[0.22]} />
          <meshBasicMaterial
            //    rotation={props.rotation}
            color={new Color().setRGB(10, 1, 1)}
            toneMapped={true}
          />
        </mesh>
      </Trail>
    </group>
  );

  ///////////

  // const ref = useRef();
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime() * speed;
  //   ref.current.position.set(
  //     Math.sin(t) * radius,
  //     (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
  //     0
  //   );
  // });
  // return (
  //   <group {...props}>
  //     <Trail
  //       local
  //       width={5}
  //       length={6}
  //       color={new Color().setRGB(2, 1, 10)}
  //       attenuation={(t) => t * t}
  //     >
  //       <mesh ref={ref}>
  //         <sphereGeometry args={[0.1]} />
  //         <meshBasicMaterial color={[1, 1, 10]} toneMapped={false} />
  //       </mesh>
  //     </Trail>
  //   </group>
  // );
}
