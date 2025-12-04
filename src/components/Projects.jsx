import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "HTML & CSS Portfolio",
    description: "My first portfolio buil with HTML and CSS.",
  },
  {
    id: 2,
    title: "Mini E-commerce",
    description: "A simple online shop layout I built to practice structure",
  },
  {
    id: 3,
    title: "React Practice",
    description: "Learning React step by step and building components.",
  },
];

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
        />
      ))}
    </section>
  );
}
