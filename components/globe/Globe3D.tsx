'use client'
// components/globe/Globe3D.tsx
// Globe 3D WebGL avec vraie carte Terre — React Three Fiber

import { useEffect, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { createEarthTexture } from './earthTexture'

// ── Atmosphère extérieure (halo vert) ──
function Atmosphere() {
  return (
    <mesh scale={[1.04, 1.04, 1.04]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial
        color={new THREE.Color(0.04, 0.18, 0.04)}
        transparent
        opacity={0.15}
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  )
}

// ── Marqueur Bénin — simple point orange sur la surface ──
function BeninMarker() {
  // Bénin centre : lon=2.3°, lat=9.3° → coordonnées 3D sur sphère unité
  const lonRad = (2.3 * Math.PI) / 180
  const latRad = (9.3 * Math.PI) / 180
  // Formule Three.js SphereGeometry : x=-cos(phi)*sin(theta), y=cos(theta), z=sin(phi)*sin(theta)
  // Ici phi=lonRad (longitude en radians depuis l'est), theta=π/2-latRad
  const theta = Math.PI / 2 - latRad
  const phi = lonRad
  const r = 1.008 // légèrement au-dessus de la surface
  const pos: [number, number, number] = [
    -Math.cos(phi) * Math.sin(theta) * r,
    Math.cos(theta) * r,
    Math.sin(phi) * Math.sin(theta) * r,
  ]

  return (
    <mesh position={pos}>
      <sphereGeometry args={[0.012, 8, 8]} />
      <meshBasicMaterial color="#E8820C" />
    </mesh>
  )
}

// ── Globe terrestre ──
function EarthMesh() {
  const meshRef = useRef<THREE.Mesh>(null)

  const texture = useMemo(() => {
    const canvas = createEarthTexture()
    const tex = new THREE.CanvasTexture(canvas)
    tex.needsUpdate = true
    return tex
  }, [])

  // Rotation lente, automatique
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.04
    }
  })

  // Rotation initiale pour centrer l'Afrique de l'Ouest / Bénin face caméra.
  // Dans THREE SphereGeometry, phi=π/2 → +Z (face caméra).
  // Bénin est à lon=2.3° → phi_texture = (2.3+180)/360 * 2π = 3.18 rad
  // On doit amener phi=3.18 à phi=π/2=1.57, donc rotation.y = -(3.18 - π/2) = -1.61 rad
  const initialY = -(((2.3 + 90) * Math.PI) / 180)

  return (
    <mesh ref={meshRef} rotation={[0, initialY, 0]}>
      <sphereGeometry args={[1, 128, 128]} />
      <meshStandardMaterial
        map={texture}
        roughness={0.85}
        metalness={0.0}
      />
    </mesh>
  )
}

// ── Camera setup ──
function CameraSetup() {
  const { camera } = useThree()
  useEffect(() => {
    camera.position.set(0, 0.15, 2.0)
    camera.lookAt(0, 0, 0)
  }, [camera])
  return null
}

// ── Canvas principal ──
export default function Globe3D() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <Canvas
        camera={{ position: [0, 0.15, 2.0], fov: 38 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <CameraSetup />

        {/* Lumière ambiante — donne une base de visibilité globale */}
        <ambientLight intensity={0.55} />

        {/* Soleil depuis la gauche-avant */}
        <directionalLight position={[-4, 2, 3]} intensity={1.6} color="#fff8f0" />

        {/* Contre-lumière subtile depuis la droite */}
        <directionalLight position={[3, -1, -2]} intensity={0.2} color="#0a2040" />

        {/* Étoiles 3D */}
        <Stars
          radius={80}
          depth={50}
          count={3500}
          factor={2.2}
          saturation={0}
          fade
          speed={0.2}
        />

        {/* Globe */}
        <EarthMesh />
        <Atmosphere />
        <BeninMarker />

        {/* Contrôles — l'utilisateur peut tourner le globe */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          minPolarAngle={Math.PI * 0.15}
          maxPolarAngle={Math.PI * 0.85}
        />
      </Canvas>
    </div>
  )
}
