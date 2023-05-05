export default function SectionDivider({title}) {
    return (
        <div className="padding-top-2em">
            <div className="row m-3">
                <div className="d-flex">
                    <hr className="hr-divider" />
                    <span className="sectionTitle text-center">{title}</span>
                    <hr className="hr-divider" />
                </div>
            </div>
        </div>
    );
}