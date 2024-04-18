interface Props{

}

function NavElements() {
    return (
        <ul className="nav nav-underline">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#bio">About Me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#resume">Resume</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
            </li>
        </ul>
    );
}

function Navbar(){


    return TogglerNav()
}

function TogglerNav (){
    return(
        <nav className="navbar navbar-expand-lg border-bottom">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarToggler">
                    {NavElements()}
                </div>
            </div>
        </nav>
    )
}

export default Navbar