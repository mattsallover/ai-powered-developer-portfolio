import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  // Group projects by category
  const groupedProjects = PROJECTS.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof PROJECTS>);

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 fade-in" style={{ animationDelay: '700ms' }}>My Projects</h2>
      
      {Object.entries(groupedProjects).map(([category, projects], categoryIndex) => (
        <div key={category} className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-indigo-300 fade-in" style={{ animationDelay: `${800 + categoryIndex * 200}ms` }}>
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 fade-in" style={{ animationDelay: `${900 + categoryIndex * 200}ms` }}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;