export default function SectionDivider({title}) {
    return (
        <div className="pt-2em">
            <div className="row">
                <div className="d-flex">
                    <div className="hr-divider" />
                    <span className="sectionTitle text-center">{title}</span>
                    <div className="hr-divider" />
                </div>
            </div>
        </div>
    );
}