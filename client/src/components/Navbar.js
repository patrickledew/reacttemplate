import React, { Component } from 'react';
import "../scss/Navbar.scss";
/**
 * NAVBAR
 * When making a page that is linked through the navbar, make sure to add a <Navbar page="id" />,
 * where "id" is the id of the nav-item in the navbar.
 */
class Navbar extends Component {
    //Constructor
    //Get the "page" property and put it in state
    constructor(props) {
        super(props);

        console.log("props: ", props);
        this.state = {
            currentPage: this.props.page
        }

    }

    //Once the page loads, find the navbar element with the ID of the "page" property's value, then add an active class to it
    componentDidMount() {
        var activeItem = document.getElementById(this.state.currentPage);
        if (activeItem) {
            activeItem.classList.add("active");
        } else {
            console.log("Navbar: Current page not found, defaulting to no active items.");
        }
    }

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand p-0">
                <div className="container-fluid flex mx-5">
                            <a className="navbar-brand" href="/"><img src="/images/logo-transparent.png" alt="Logo" /></a>
                      
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item" id="home">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item" id="contact">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                
                </div>
            </nav>
        );
    }
}

export default Navbar;
