'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WireframeRing() {
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ringRef.current.rotation.x = Math.cos(time * 0.2) * 0.3 + 0.8;
    ringRef.current.rotation.y = time * 0.1;
    ringRef.current.rotation.z = Math.sin(time * 0.25) * 0.2;
  });

  return (
    <mesh ref={ringRef} position={[0, 0, 0]}>
      <torusGeometry args={[2.8, 0.004, 16, 160]} />
      <meshBasicMaterial color="#00f0ff" transparent opacity={0.3} />
    </mesh>
  );
}

export function ParticleScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <WireframeRing />
      </Canvas>
    </div>
  );
}
