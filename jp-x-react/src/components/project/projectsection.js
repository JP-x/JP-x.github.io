import Project from "../../repository/project.json";
import ProjectItem from "./projectitem";



//order-md-first
export default function ProjectSection() {
    return (
        <div>
            {Project.projects.map((item, index) => (
                <ProjectItem key={item.name} imageDirection={index % 2 === 0 ? "left" : "right"} data={item} />
            ))}
        </div>
    );
}
