import React from 'react';

class Navbar  extends React.Component {

    render(){
        return (
            <nav className = "navbar navbar-dark bg-info">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="active text-light">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="text-light">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="text-light">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="disabled">Login</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;