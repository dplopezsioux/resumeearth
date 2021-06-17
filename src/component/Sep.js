/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
//import * as THREE from "three";

//start

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();

  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return <orbitControls args={[camera, gl.domElement]} ref={orbitRef} />;
};

const Earth = () => {
  const [model, setModel] = useState();
  useEffect(() => {
    new GLTFLoader().load("scene.gltf", setModel);
  });

  return model ? <primitive object={model.scene} /> : null;
};

const Box = () => {
  const [hoverd, setHoverd] = useState(false);
  return (
    <mesh
      onPointerOver={() => setHoverd(true)}
      onPointerOut={() => setHoverd(false)}
    >
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshBasicMaterial
        attach="material"
        color={hoverd ? "hotpink" : "gray"}
      />
    </mesh>
  );
};

const Sep = () => {
  return (
    <Canvas>
      <ambientLight />
      <Controls />
      <Box />
      <Earth />
    </Canvas>
  );
};

export default Sep;
