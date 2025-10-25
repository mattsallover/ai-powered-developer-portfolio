
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Guitar Practice Journal',
    description: 'A comprehensive web platform that helps guitarists structure their musical growth through AI and data-driven insights. Features practice session logging, progress tracking, and personalized AI recommendations for improvement.',
    imageUrl: 'https://picsum.photos/seed/guitar-journal/600/400',
    techStack: ['React', 'TypeScript', 'Supabase', 'OpenAI GPT APIs', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/mattsallover/Guitar-Journal',
  },
  {
    id: 2,
    title: 'Concert Memories Video Wall',
    description: 'An innovative media-technology platform that transforms live concert experiences into monetizable digital assets. Uses AI to synchronize crowd-shot videos with professional audio, creating cinematic highlight films within 48 hours.',
    imageUrl: 'https://picsum.photos/seed/concert-memories/600/400',
    techStack: ['AI/ML Pipeline', 'n8n Automation', 'Google Sheets API', 'Video Processing', 'Python'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Levine Load Mini - Guitar Attenuator',
    description: 'A hand-built reactive speaker attenuator designed for real feel and real tone at manageable volume levels. Features custom circuit design with air-core inductor and L-pad resistive load for authentic speaker dynamics.',
    imageUrl: 'https://picsum.photos/seed/guitar-pedal/600/400',
    techStack: ['Circuit Design', 'Electronics', 'Ohm\'s Law', 'Resonance Modeling', 'Hardware Engineering'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 4,
    title: 'AI-Powered Developer Portfolio',
    description: 'This very portfolio! A modern React application with AI chat integration powered by Gemini. Features modular prompt system, responsive design, and showcases technical skills through interactive elements.',
    imageUrl: 'https://picsum.photos/seed/portfolio/600/400',
    techStack: ['React', 'TypeScript', 'Gemini API', 'Tailwind CSS', 'Vite'],
    liveUrl: '#',
    repoUrl: 'https://github.com/mattsallover/ai-powered-developer-portfolio',
  },
];
