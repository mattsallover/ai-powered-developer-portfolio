import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';
import { PROJECTS } from '../constants';

// Project coordinates mapping
const projectCoordinates = {
  1: { x: 20, y: 90, z: 90 }, // Intuit Dashboard - Business, Software, Enterprise
  2: { x: 30, y: 80, z: 70 }, // AI Concert Outreach - Business, Software, Commercial
  3: { x: 80, y: 85, z: 40 }, // Guitar Practice Journal - Creative, Software, Personal
  4: { x: 85, y: 15, z: 30 }, // Levine Load Mini - Creative, Hardware, Personal
  5: { x: 70, y: 60, z: 80 }, // PostShowProfit - Creative, Software, Commercial
  6: { x: 60, y: 95, z: 50 }, // AI Portfolio - Creative, Software, Personal
};

// Color mapping by category
const categoryColors = {
  'Professional Impact': '#3B82F6', // Blue
  'Music & Audio Technology': '#8B5CF6', // Purple
  'AI & Automation': '#10B981', // Green
};

interface ProjectBubbleProps {
  project: any;
  position: [number, number, number];
  color: string;
}

const ProjectBubble: React.FC<ProjectBubbleProps> = ({ project, position, color }) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} transparent opacity={0.8} />
      
      {/* Project name on hover */}
      {hovered && (
        <Html distanceFactor={10}>
          <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
            {project.title}
          </div>
        </Html>
      )}
      
      {/* Project details on click */}
      {clicked && (
        <Html distanceFactor={8}>
          <div className="bg-gray-900 text-white p-4 rounded-lg max-w-xs border border-gray-600">
            <h3 className="font-bold text-lg mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.techStack.slice(0, 3).map((tech: string, index: number) => (
                <span key={index} className="bg-indigo-600 text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Html>
      )}
    </mesh>
  );
};

const Scene: React.FC = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />

      {/* Grid helper */}
      <gridHelper args={[50, 50, '#4B5563', '#374151']} />

      {/* Axis lines */}
      <mesh>
        <arrowHelper args={[new Vector3(1, 0, 0), new Vector3(0, 0, 0), 5, 0xff0000, 0.5, 0.3]} />
        <arrowHelper args={[new Vector3(0, 1, 0), new Vector3(0, 0, 0), 5, 0x00ff00, 0.5, 0.3]} />
        <arrowHelper args={[new Vector3(0, 0, 1), new Vector3(0, 0, 0), 5, 0x0000ff, 0.5, 0.3]} />
      </mesh>

      {/* Axis labels */}
      <Text
        position={[25, 0, 0]}
        fontSize={2}
        color="#ff0000"
        anchorX="center"
        anchorY="middle"
      >
        Creative
      </Text>
      <Text
        position={[0, 25, 0]}
        fontSize={2}
        color="#00ff00"
        anchorX="center"
        anchorY="middle"
        rotation={[0, 0, Math.PI / 2]}
      >
        Software
      </Text>
      <Text
        position={[0, 0, 25]}
        fontSize={2}
        color="#0000ff"
        anchorX="center"
        anchorY="middle"
        rotation={[Math.PI / 2, 0, 0]}
      >
        Enterprise
      </Text>

      {/* Project bubbles */}
      {PROJECTS.map((project) => {
        const coords = projectCoordinates[project.id as keyof typeof projectCoordinates];
        if (!coords) return null;
        
        const position: [number, number, number] = [coords.x - 50, coords.y - 50, coords.z - 50];
        const color = categoryColors[project.category as keyof typeof categoryColors] || '#6B7280';
        
        return (
          <ProjectBubble
            key={project.id}
            project={project}
            position={position}
            color={color}
          />
        );
      })}
    </>
  );
};

const ProjectVisualization3D: React.FC = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 fade-in" style={{ animationDelay: '700ms' }}>
          Where Innovation Intersects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto fade-in" style={{ animationDelay: '800ms' }}>
          Each project positioned in 3D space based on its blend of business vs creative, 
          software vs hardware, and individual vs enterprise focus.
        </p>
      </div>

      <div className="h-96 w-full fade-in" style={{ animationDelay: '900ms' }}>
        <Canvas
          camera={{ position: [30, 30, 30], fov: 60 }}
          style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)' }}
        >
          <Scene />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={false}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Legend */}
      <div className="mt-8 flex justify-center space-x-8 fade-in" style={{ animationDelay: '1000ms' }}>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-300">Professional Impact</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
          <span className="text-sm text-gray-300">Music & Audio</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-300">AI & Automation</span>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-6 text-center fade-in" style={{ animationDelay: '1100ms' }}>
        <p className="text-sm text-gray-400">
          🖱️ Drag to rotate • 🔍 Scroll to zoom • 🎯 Click bubbles for details
        </p>
      </div>
    </section>
  );
};

export default ProjectVisualization3D;
