import React from 'react';
import { Project } from '../types';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-indigo-500/30 hover:-translate-y-2">
      <div className="absolute inset-0 z-10 rounded-xl border-2 border-transparent group-hover:border-indigo-500/50 transition-all duration-300 pointer-events-none"></div>
      <img
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        src={project.imageUrl}
        alt={project.title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent"></div>
      <div className="relative p-6 flex flex-col justify-end h-[24rem]">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 text-indigo-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-end space-x-4 mt-4">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <ExternalLinkIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;