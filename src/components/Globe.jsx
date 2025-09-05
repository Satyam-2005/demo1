// Globe.jsx
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import {
  ShieldCheck,
  Radio,
  Cpu,
  Globe as GlobeIcon,
  Activity,
  Zap,
} from "lucide-react"; // icons

// --- DOT GLOBE ---
function DotGlobe() {
  const pointsRef = useRef();

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002;
    }
  });

  const pointGeometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(1, 100, 100).toNonIndexed();
    const vertexCount = geo.attributes.position.count;

    const colors = [];
    for (let i = 0; i < vertexCount; i++) {
      colors.push(0.2, 0.9, 0.5); // green glow
    }

    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return geo;
  }, []);

  return (
    <points ref={pointsRef} geometry={pointGeometry}>
      <pointsMaterial
        size={0.015}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

// --- PARTICLE BACKGROUND ---
function ParticleBackground() {
  const particlesRef = useRef();
  const count = 2000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0008;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        color="#37FF8B"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

// --- MAIN COMPONENT ---
export default function Globe() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#37FF8B]" />,
      title: "Defence-Grade Security",
      desc: "Built for military, homeland security, and aerospace applications with precision-level reliability.",
    },
    {
      icon: <Radio className="w-8 h-8 text-[#37FF8B]" />,
      title: "Signal Intelligence",
      desc: "Automated SIGINT data capture, classification, and real-time anomaly detection.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#37FF8B]" />,
      title: "AI-Powered Analysis",
      desc: "Harnessing Machine Learning for spectrum monitoring and adaptive threat recognition.",
    },
    {
      icon: <GlobeIcon className="w-8 h-8 text-[#37FF8B]" />,
      title: "Global Monitoring",
      desc: "Designed for worldwide deployment with satellite & AIS data integration.",
    },
    {
      icon: <Activity className="w-8 h-8 text-[#37FF8B]" />,
      title: "Real-Time Detection",
      desc: "Instant alerts and decision-making support in critical defense operations.",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#37FF8B]" />,
      title: "Powered by DevHustlers",
      desc: "A professional industrial-grade innovation team building next-gen defense solutions.",
    },
  ];

  return (
    <div className="relative w-full h-screen bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-10">
      {/* LEFT SIDE CONTENT */}
      <div className="flex flex-col justify-center space-y-6 z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent tracking-wider drop-shadow-lg animate-fadeInDown">
          ASTRA
        </h1>
        <p className="text-gray-300 text-lg max-w-xl leading-relaxed animate-fadeInUp delay-200">
          <span className="text-[#37FF8B] font-semibold animate-pulse">ASTRA</span> — Automated SIGINT Threat Recognition & Analysis, 
          a next-generation defense intelligence system designed for industrial and 
          professional-grade spectrum analysis. Combining <span className="font-semibold">AI</span>, 
          <span className="font-semibold"> real-time monitoring</span>, and <span className="font-semibold">defense security</span>, 
          ASTRA empowers decision-makers with automation, speed, and precision.
        </p>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-start space-x-4 p-4 bg-gray-900/40 rounded-xl hover:bg-gray-800/60 transition transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {f.icon}
              <div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE GLOBE */}
      <div className="relative flex items-center justify-center animate-fadeInRight">
        <Canvas camera={{ position: [0, 0, 3.5] }}>
          <ambientLight intensity={1} />
          <ParticleBackground />
          <DotGlobe />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>
    </div>
  );
}
