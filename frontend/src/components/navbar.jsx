import icon from "../assets/sabores_logo.png"





export const Navbar = () => {
    return(

        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header mb-3">
                    <h1 className="d-flex justify-content-evenly">
                        <div>
                            <img
                                    src={icon}
                                    alt="mentalHealth"
                                    width="120"
                                    height="100"
                                />
                        </div>
                        <div>
                            <h1 className="navbar-brand mt-4" style={{textDecorationLine: "underline"}}> Sabores de la Tierra</h1>
                        </div>
                        <div >
                            {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button> */}
                        </div>
                    </h1>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}