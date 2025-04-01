"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { motion } from 'framer-motion';


import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  

  return (
    <mesh>
      <hemisphereLight intensity={5} skyColor="white" groundColor="black" position={[20, 10, 0]} />

      <spotLight
        // ref={spotLightRef}
        position={[-7, 10, 5]}
        angle={0.8}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />

      <pointLight
        position={[0, 2, -1]}
        intensity={8}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 1}
        position={isMobile ? [0, -0.8, -0.8] : [0, -1.95, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 500);
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="relative w-full">

    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "50vh", padding: "0", margin: "0" }}
      >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
        </Canvas>
    <div className='absolute xs:bottom-10 md:bottom-8 w-full flex justify-center items-center bottom-24'>
    <a href='#about'>
      <div className='md:w-[35px] md:h-[64px] h-14 w-6 rounded-3xl md:border-4 border-2 border-yellow-500 flex justify-center items-start p-2'>
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className='md:w-3 md:h-3 w-2 h-1 rounded-full bg-cyan-500 mb-1'
          />
      </div>
    </a>
  </div>
          </section>
  );
};

export default ComputersCanvas;
