import Experience from "../../repository/experience.json";
import ExperienceItem from "./experienceitem";



//order-md-first
export default function ExperienceSection() {
    return (
        <div>
            {Experience.experience.map((item, index) => (
                <ExperienceItem key={item.name + index.toString()} imageDirection={index % 2 === 0 ? "left" : "right"} data={item} />
            ))}
        </div>
    );
}
