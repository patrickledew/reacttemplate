import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import {Link, animateScroll} from "react-scroll";
import '../scss/Footer.scss';

class Footer extends Component {
    render() {
        return <footer className="footer">
        <div className="container p-2 text-center">
            <hr></hr>
            <span className="text-muted">
                This is the footer.<br />
                Put social links, contact info, etc. here.   
            </span>
        </div>
        </footer>
    }
}
export default Footer;