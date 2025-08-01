import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "My React Portfolio Website",
    description:
      "A personal portfolio website built with React to showcase my projects and skills.",
    imgUrl: "/images/project1.jpg",
    tag: ["All", "React", "Portfolio", "Web", "Website"],
  },
  {
    id: 2,
    title: "Tenant Maintenance Management System",
    description:
      "A web application for managing tenant maintenance requests and tracking their status.",
    imgUrl: "/images/project2.jpg",
    tag: ["All", "Next.js", "E-commerce", "Web", "Website", "TypeScript"],
  },
  {
    id: 3,
    title: "AI-To-Do List App",
    description:
      "A task management app that uses AI to help users organize and prioritize their tasks.",
    imgUrl: "/images/project3.jpg",
    tag: ["All", "Node.js", "Express", "Web", "Website"],
  },
];

const ProjectSection = () => {
  return <h1> My Projects </h1>;
};

export default ProjectSection;
