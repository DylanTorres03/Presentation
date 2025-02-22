import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1.',
      image: 'url-de-la-imagen-1',
      technologies: ['React', 'Tailwind CSS'],
      link: 'https://github.com/tu-usuario/proyecto-1'
    },
    {
      id: 2,
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2.',
      image: 'url-de-la-imagen-2',
      technologies: ['Node.js', 'Express'],
      link: 'https://github.com/tu-usuario/proyecto-2'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Mis Proyectos</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              {selectedProject === project && (
                <div className="project-details">
                  <p>{project.description}</p>
                  <p className="project-technologies">
                    Tecnologías: {project.technologies.join(', ')}
                  </p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Ver en GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;