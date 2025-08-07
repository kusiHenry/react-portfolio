function ProjectCard({ title, tech, description, image, link }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{tech}</p>
      <p>{description}</p>
      <a href={link} target="_blank">View Project</a>
    </div>
  );
}

export default ProjectCard;
