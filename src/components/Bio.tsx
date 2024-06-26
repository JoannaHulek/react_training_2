import image from "./images/IMG_20240221_073450.jpg"
function AboutMe(){
    return(
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded" width="40%" alt="pink image"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with
                            supporting text below as a natural lead-in to additional content. This content is a little
                            bit longer.</p>
                        <a href="https://getbootstrap.com/docs/5.3/components/card/#horizontal" target="_blank"><h6>LINK</h6></a>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe