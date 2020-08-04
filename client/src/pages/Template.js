//To make a new page, simply make a copy of this page and Ctrl+H replace all instances of "Template" with the name of the page.

import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, animateScroll } from "react-scroll";
import "../scss/Template.scss";

class Template extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <div className="App">
            <Navbar page="template"></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex">
                        <h1 className="mx-auto display-2 ">Template</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="lead">Descriptive Text.</p>
                    </div>
                </div>
                <div className="row">
                <div className="col-12 justify-content-left">
                    <h3 className="display-4">More Information</h3>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at velit et magna consequat condimentum eget id mi. 
                            Suspendisse finibus neque nec accumsan elementum. Morbi eu dignissim nisi, ut tempor ligula. Mauris auctor est a euismod pellentesque. 
                            Sed eget consequat est, ut eleifend tortor. Aliquam id porttitor metus. Duis lacinia est aliquet commodo dictum. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 justify-content-left">
                        <h3 className="display-5">Extra Stuff</h3>
                        <p className="lead">Nunc id lectus et felis elementum euismod ut porttitor sem. Nam quis ipsum ullamcorper risus fringilla porttitor. 
                        Curabitur porttitor nunc ac dignissim consectetur. Nunc vestibulum condimentum ex, id pulvinar lectus malesuada in. Cras id urna elit. 
                        Phasellus sed ipsum a risus scelerisque ornare sit amet sit amet lectus. Orci varius natoque penatibus et magnis dis parturient montes, 
                        nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam faucibus erat
                         non turpis tempus elementum. Mauris ipsum mi, accumsan eu iaculis nec, rhoncus at nisi. Aliquam eu malesuada turpis, et viverra lorem. 
                         Duis at commodo elit, ut dapibus felis. Aenean quis interdum metus.  </p>
                    </div>

                </div>
            </div>

            <Footer></Footer>
        </div>;
    }
}

export default Template;