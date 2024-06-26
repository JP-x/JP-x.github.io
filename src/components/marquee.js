const languages = ["C#", "HTML", "CSS", "Javascript", "TSQL", "Python", "XAML", "C++", "C"];
const technologies = [".Net", "Asp.Net MVC", "Asp.Net Razor", "Asp.Net AJAX", "Angular", "React", "Telerik UI", "Bootstrap"];
const tools = ["Visual Studio", "Azure DevOps", "Workday", "SQL Management Studio", "Active Directory","Peoplesoft", "Microsoft Azure", "Git", "IIS"];
export default function Marquee({ mode, direction, color }) {
    var marqueeData = languages;
    switch (mode) {
        case "Languages":
            marqueeData = languages;
            break;
        case "Technologies":
            marqueeData = technologies;
            break;
        case "Tools":
            marqueeData = tools;
            break;
        default:
    }
    var marqueeDirection = "marquee-left";
    var marqueeColor = "marquee-teal";
    switch (color) {
        case "teal":
            marqueeColor = "marquee-teal";
            break;
        case "gold":
            marqueeColor = "marquee-gold";
            break;
        case "purple":
            marqueeColor = "marquee-purple";
            break;
        case "blue":
            marqueeColor="marquee-blue";
            break;
        case "blue2":
            marqueeColor="marquee-blue2";
            break;
        default:
    }

    switch (direction) {
        case "left":
            marqueeDirection = "marquee-left";
            break;
        case "right":
            marqueeDirection = "marquee-right";
            break;
        default:
    }

    const marqueeClassList =  "marquee " + marqueeDirection + " " + marqueeColor;

    return (
        <>
        <div className="marquee-wrapper">
        <section className={marqueeClassList}>
                {marqueeData.map((item) => <p key={item + '1'}>&nbsp;&nbsp;{item}&nbsp;&nbsp;<span style={{color:"white"}}>•</span></p>)}
        </section>
        <section className={marqueeClassList}>
                {marqueeData.map((item) => <p key={item + '2'}>&nbsp;&nbsp;{item}&nbsp;&nbsp;<span style={{color:"white"}}>•</span></p>)}
        </section>
        <section className={marqueeClassList}>
                {marqueeData.map((item) => <p key={item + '3'}>&nbsp;&nbsp;{item}&nbsp;&nbsp;<span style={{color:"white"}}>•</span></p>)}
        </section>
        <section className={marqueeClassList}>
                {marqueeData.map((item) => <p key={item + '4'}>&nbsp;&nbsp;{item}&nbsp;&nbsp;<span style={{color:"white"}}>•</span></p>)}
        </section>
        
        </div>
        
        </>
    );
}
