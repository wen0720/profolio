'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function generateStreamData(count: number) {
  const pos = new Float32Array(count * 3);
  const vel = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 1.8 + Math.random() * 2.5;
    pos[i * 3] = Math.cos(angle) * radius;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
    pos[i * 3 + 2] = Math.sin(angle) * radius;
    vel[i] = 0.5 + Math.random() * 1.5;
  }
  return { positions: pos, velocities: vel };
}

const STREAM = generateStreamData(200);

function DataStream() {
  const pointsRef = useRef<THREE.Points>(null!);

  useFrame(() => {
    const posAttr = pointsRef.current.geometry.attributes.position as
      | THREE.BufferAttribute
      | undefined;
    if (!posAttr) return;
    const pos = posAttr.array as Float32Array;
    for (let i = 0; i < STREAM.velocities.length; i++) {
      const idx = i * 3 + 1;
      pos[idx] = (pos[idx] ?? 0) - (STREAM.velocities[i] ?? 0) * 0.02;
      if ((pos[idx] ?? 0) < -4) {
        pos[idx] = 4;
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[STREAM.positions, 3]}
          count={STREAM.positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00f0ff"
        size={0.02}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function BackgroundStream() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,240,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-2"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, transparent 0%, rgba(7,8,15,0.5) 50%, rgba(7,8,15,0.97) 100%)',
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <DataStream />
      </Canvas>
    </div>
  );
}
