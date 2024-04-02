"use client";

import * as THREE from "three";
import React, { forwardRef, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Float,
  PivotControls,
  QuadraticBezierLine,
  Backdrop,
  ContactShadows,
} from "@react-three/drei";

const Spaceman = forwardRef(({ children, ...props }, ref) => {
  const { nodes, materials } = useGLTF("/Astronaut-transformed.glb");
  as;
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 0;
    });
  }, []);
  return (
    <mesh
      castShadow
      receiveShadow
      ref={ref}
      {...props}
      geometry={nodes.Astronaut_mesh.geometry}
      material={materials.Astronaut_mat}
      material-envMapIntensity={0}
      dispose={null}
    >
      {children}
    </mesh>
  );
});

const Ship = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/images/modal.gltf");
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 0;
    });
  }, []);
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.Mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_1.geometry}
        material={materials.Mat1}
        material-color="black"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_2.geometry}
        material={materials.Mat2}
        material-envMapIntensity={0.2}
        material-color="black"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_3.geometry}
        material={materials.Window_Frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_4.geometry}
        material={materials.Mat4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_6.geometry}
        material={materials.Window}
      />
    </group>
  );
});

function Cable({
  start,
  end,
  v1 = new THREE.Vector3(),
  v2 = new THREE.Vector3(),
}) {
  const ref = useRef();
  useFrame(
    () =>
      ref.current.setPoints(
        start.current.getWorldPosition(v1),
        end.current.getWorldPosition(v2)
      ),
    []
  );
  return <QuadraticBezierLine ref={ref} lineWidth={3} color="#ff2060" />;
}

export default function App() {
  const spaceman = useRef();
  const ship = useRef();
  return (
    <Canvas shadows className="h-full" camera={{ position: [0, 1.5, 3] }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[-10, 0, -5]} intensity={1} color="red" />
      <directionalLight
        position={[-1, -2, -5]}
        intensity={0.2}
        color="#0c8cbf"
      />
      <spotLight
        position={[5, 0, 5]}
        intensity={2.5}
        penumbra={1}
        angle={0.35}
        castShadow
        color="#0c8cbf"
      />

      <Float scale={0.75} position={[0, 0.65, 0]} rotation={[0, 0.6, 0]}>
        <PivotControls
          anchor={[0, 0.7, 0.09]}
          depthTest={true}
          scale={0.5}
          lineWidth={2}
        >
          <Ship ref={ship} />
        </PivotControls>
      </Float>

      <Float
        position={[1, 1.1, -0.5]}
        rotation={[Math.PI / 3.5, 0, 0]}
        rotationIntensity={4}
        floatIntensity={6}
        speed={1.5}
      ></Float>

      <ContactShadows position={[0, -0.485, 0]} scale={5} blur={1.5} far={1} />
      <Environment preset="city" />
      <OrbitControls makeDefault />
    </Canvas>
  );
}
