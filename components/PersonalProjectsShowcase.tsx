import React from 'react';
import ProjectCard from './ProjectCard'; // Adjust the import path
import PersonalProjectsMobileCarousel from './PersonalProjectsMobileCarousel';
import { projects } from '@/constants/projects';

const Projects = () => {
  return (
    <section className='w-full'>
      <div className=" mx-auto hidden max-w-[900px] flex-col  gap-4 md:flex">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            href={project.href}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            title={project.title}
            description={project.description}
            badges={project.badges}
          />
        ))}
      </div>
      <div className="mb-12 w-full md:hidden">
        <PersonalProjectsMobileCarousel projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
