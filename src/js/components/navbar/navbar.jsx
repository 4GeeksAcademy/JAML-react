import React from "react";

const Navbar = () => {
    return (
        <>
            <div className="navbar navbar-expand-md bg-black">
                <div className="container-fluid">

                    <a className="navbar-brand text-light" href="#">Start Boostrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
};

export default Navbar;