import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState("");

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <input
        placeholder="Search projects..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <div className="project-grid">
        {filtered.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}
