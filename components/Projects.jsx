
import { projectsData } from '@/lib/data';
import React from 'react';
import Project from './Project';


const Projects = () => {
  return (
    <main id="projects" className='scroll-mt-28'>
      <h2 className="capitalize text-3xl font-bold mb-10 text-center">My Projects</h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-5 ">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
            siteUrl={project.siteUrl}  // Pass siteUrl here
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;



