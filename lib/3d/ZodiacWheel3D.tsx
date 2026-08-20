"use client"

import React, { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars, Text } from "@react-three/drei"
import * as THREE from "three"

const zodiacSigns = [
  "Aries","Taurus","Gemini","Cancer",
  "Leo","Virgo","Libra","Scorpio",
  "Sagittarius","Capricorn","Aquarius","Pisces",
]

const planets = [
  { name: "Sun", color: "#F1CE73", size: 0.3, distance: 1.8, speed: 0.3 },
  { name: "Moon", color: "#AAA6BE", size: 0.2, distance: 2.2, speed: 0.5 },
  { name: "Mars", color: "#D66A6A", size: 0.18, distance: 2.6, speed: 0.25 },
  { name: "Mercury", color: "#86C99A", size: 0.15, distance: 3.0, speed: 0.7 },
  { name: "Jupiter", color: "#C89B3C", size: 0.35, distance: 3.4, speed: 0.15 },
  { name: "Venus", color: "#E4A94B", size: 0.22, distance: 3.8, speed: 0.4 },
  { name: "Saturn", color: "#7A7790", size: 0.28, distance: 4.2, speed: 0.1 },
  { name: "Rahu", color: "#38245E", size: 0.15, distance: 4.6, speed: 0.2 },
  { name: "Ketu", color: "#17183B", size: 0.15, distance: 4.6, speed: -0.2 },
]

function ZodiacRing() {
  const ringRef = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (ringRef.current) ringRef.current.rotation.y += delta * 0.05
  })
  const ringGeo = useMemo(() => new THREE.RingGeometry(4.5, 4.7, 64), [])
  return (
    <group ref={ringRef}>
      <mesh geometry={ringGeo} rotation={[-Math.PI/2, 0, 0]}>
        <meshBasicMaterial color="#C89B3C" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      {zodiacSigns.map((sign, i) => {
        const angle = (i/12) * Math.PI * 2
        const x = Math.cos(angle) * 4.6
        const z = Math.sin(angle) * 4.6
        return (
          <Text key={sign} position={[x, 0, z]} fontSize={0.25} color="#C89B3C"
            anchorX="center" anchorY="middle"
            rotation={[-Math.PI/2, 0, -angle + Math.PI/2]}>
            {sign.slice(0,2)}
          </Text>
        )
      })}
    </group>
  )
}

function Planet({ planet }: { planet: typeof planets[0] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const angleRef = useRef(Math.random() * Math.PI * 2)
  useFrame((_, delta) => {
    angleRef.current += delta * planet.speed
    if (meshRef.current) {
      meshRef.current.position.x = Math.cos(angleRef.current) * planet.distance
      meshRef.current.position.z = Math.sin(angleRef.current) * planet.distance
    }
  })
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[planet.size, 16, 16]} />
      <meshStandardMaterial color={planet.color} emissive={planet.color} emissiveIntensity={0.5} />
      <pointLight color={planet.color} intensity={0.5} distance={2} />
    </mesh>
  )
}

function CentralSun() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.05)
    }
  })
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color="#F1CE73" emissive="#C89B3C" emissiveIntensity={2} />
      <pointLight color="#F1CE73" intensity={3} distance={10} />
    </mesh>
  )
}

function OrbitRings() {
  return (
    <>
      {planets.map((p) => (
        <mesh key={p.name} rotation={[-Math.PI/2, 0, 0]}>
          <ringGeometry args={[p.distance-0.02, p.distance+0.02, 64]} />
          <meshBasicMaterial color="#C89B3C" transparent opacity={0.08} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </>
  )
}

export default function ZodiacWheel3D() {
  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px]">
      <Canvas camera={{ position: [0, 8, 8], fov: 45 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.2} />
        <Stars radius={50} depth={50} count={2000} factor={3} saturation={0} fade speed={1} />
        <CentralSun />
        <ZodiacRing />
        <OrbitRings />
        {planets.map((p) => <Planet key={p.name} planet={p} />)}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI/2.5} minPolarAngle={Math.PI/4} />
      </Canvas>
    </div>
  )
}
