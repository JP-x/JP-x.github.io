import DisplayIcon from '../displayicon';

export default function ProjectItem({ imageDirection, data }) {
    var imageClasses = "order-sm-last order-md-first col-sm-12 col-md-4";
    if (imageDirection === "left") {
        imageClasses = "order-sm-last order-md-first col-sm-12 col-md-4";
    }
    else {
        imageClasses = "order-sm-last col-sm-12 col-md-4";
    }

    return (
        <>
            <div className="container mt-3em block-section">
                <div className="row">
                    <div className="order-1 col-sm-12 col-md-8 ">
                        <div className="row info-text text-teal">
                            <div className="d-flex flex-sm-row flex-column text-center-on-sm sm-pb-05em">
                                <div>
                                    <a className="text-teal outlineButton" href={data.demoUrl} target="_blank" rel="noreferrer" role="button"><span>VIEW DEMO</span></a>
                                </div>
                                <div className="d-none d-md-block">
                                    &nbsp;|&nbsp;
                                </div>
                                <div>
                                    {data.dates}
                                </div>
                            </div>
                        </div>

                        <div className="info-text">
                            {data.description.map((item) => <li key={item + "1"}>{item}</li>)}
                        </div>
                        <ul>
                        </ul>
                    </div>
                    <div className={imageClasses}>
                        <div className="red-hr text-center-on-sm">
                            <h1 className="info-text text-2-em">{data.name}</h1>
                            <DisplayIcon iconName={data.icon} />
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}