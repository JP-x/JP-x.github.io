import DisplayIcon from '../displayicon';

export default function ExperienceItem({imageDirection, data}) {
    //issue with 
    var imageClasses = "order-sm-last order-md-first col-sm-12 col-md-4";
    if(imageDirection == "left"){
        imageClasses = "order-sm-last order-md-first col-sm-12 col-md-4";
    }
    else{
        imageClasses = "order-sm-last col-sm-12 col-md-4";
    }

    return (
        <>
            <div className="container mt-3em block-section">
                <div className="row">
                    <div className="order-1 col-sm-12 col-md-8 ">
                        <div className="row info-text text-teal">
                            <div className="col-12">
                                {data.jobTitle} | {data.dates}
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
                            <h1 className="info-text">{data.company}</h1>
                            <DisplayIcon iconName={data.icon}  />
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}