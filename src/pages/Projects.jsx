import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../data/projects';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProjects(projectData);
    }, 1000);
  }, []);

  return (
    <main className="projects">
      <h2>My Projects</h2>
      <div className="project-gallery">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}

export default Projects;
