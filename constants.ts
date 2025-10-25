
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Content Platform',
    description: 'A full-stack web application that uses generative AI to help users create, summarize, and translate content in real-time. Features a collaborative editor and secure authentication.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    techStack: ['React', 'TypeScript', 'Node.js', 'Gemini API', 'Tailwind CSS', 'Firebase'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Interactive Data Visualization Dashboard',
    description: 'A dynamic dashboard for visualizing complex datasets. Implemented custom charts with D3.js and Recharts, offering filtering and real-time data updates via WebSockets.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    techStack: ['React', 'D3.js', 'Recharts', 'TypeScript', 'Express', 'WebSocket'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Decentralized E-Commerce Marketplace',
    description: 'A proof-of-concept marketplace built on blockchain technology. Allows for peer-to-peer transactions without intermediaries, ensuring security and transparency.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    techStack: ['Solidity', 'Hardhat', 'React', 'Ethers.js', 'IPFS', 'Next.js'],
    liveUrl: '#',
    repoUrl: '#',
  },
   {
    id: 4,
    title: 'Mobile Fitness Companion',
    description: 'A cross-platform mobile app designed to track workouts, set fitness goals, and provide personalized exercise recommendations using a machine learning model.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    techStack: ['React Native', 'TypeScript', 'Redux', 'TensorFlow.js', 'Node.js'],
    liveUrl: '#',
    repoUrl: '#',
  },
];
