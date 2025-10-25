import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 fade-in" style={{ animationDelay: '700ms' }}>My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 fade-in" style={{ animationDelay: '900ms' }}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;