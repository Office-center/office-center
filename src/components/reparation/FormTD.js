import React from "react";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Model = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  useEffect(() => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);

  const { nodes, materials } = useGLTF("/Projet.glb");
  return (
    <group dispose={null}>
      <group
        position={[0.02, 0.02, 0.01]}
        rotation={[-Math.PI / 2, y / 400, x / 400]}
        scale={1.5}
      >
        <mesh
          geometry={nodes["3D_Text_-_W_-_baked"].geometry}
          material={materials["Cosmic Aura 1"]}
          position={[-30.35, 7.5, -15.81]}
          material-wireframe
        />
      </group>
    </group>
  );
};

const FormTD = () => {
  const mesh = useRef();
  useFrame(({ clock }) => {
    mesh.current.rotation.x = clock.getElapsedTime();
    mesh.current.rotation.y = clock.getElapsedTime();
  });
  return (
    <>
      <mesh ref={mesh}>
        <Model />
        {/* <boxGeometry attach="geometry" /> */}
        {/* <meshLambertMaterial attach="material" color="hotpink" wireframe /> */}
      </mesh>
    </>
  );
};

export default FormTD;
