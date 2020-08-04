import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, animateScroll } from "react-scroll";
import "../scss/Contact.scss";

class Contact extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <div className="App">
            <Navbar page="contact"></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-12justify-content-left">
                        <h1 className="display-2 ">Contact Us</h1>
                    </div>
                </div>
                <div className="row my-5">
                <div className="col-lg-6 text-center">
                    <a href="mailto:example@example.com">
                        <div className="mb-5">
                            <button className="btn-circle disabled btn-xl btn-primary mr-4"><i className="fa fa-envelope"></i></button><br />
                            <span className="lead" style={{fontSize: "2em"}}>example@example.com</span>
                        </div>
                    </a>
                    <a href="javascript:void">
                        <div>
                            <button className="btn-circle disabled btn-xl btn-primary mr-4"><i className="fa fa-map"></i></button><br />
                            <span className="lead" style={{fontSize: "2em"}}>Nowhere<br />12345 Nowhere Ln, CA 54321</span><br />
                        </div>
                    </a>
                </div>
                <div className="col-lg-6 text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.7546880160551!2d-98.4426963804932!3d35.16028760528789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x145a97e92e23432a!2sNowhere%20Store!5e0!3m2!1sen!2sus!4v1596499563484!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style={{border:"5px", borderRadius:"15px", backgroundColor: "#111"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    
                </div>
                </div>
                <div className="row">
                    <div className="col-12 justify-content-left">
                        <h3 className="display-5">Ask Away!</h3>
                        <p className="lead">If you have any questions or concerns, feel free to email us. We'll try to get back as soon as we can.</p>
                    </div>

                </div>
            </div>

            <Footer></Footer>
        </div>;
    }
}

export default Contact;