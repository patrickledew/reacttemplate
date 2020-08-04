import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import {Link, animateScroll} from "react-scroll";
import '../scss/Home.scss';
class Home extends Component {
    constructor(props) {
        super(props);
        const images = [
            'homebackground.jpg'
        ]
        this.state = {
            images: images,
            currentImage: Math.floor(Math.random()*images.length)
        }
    }

    fadeImage(e) {
        void e.offSetWidth;
        e.classList.add('fadeout');
        void e.offSetWidth;
        setTimeout(() => {
            this.state.currentImage = this.state.currentImage < this.state.images.length - 1 ? this.state.currentImage+1 : 0;
            e.style.backgroundImage = `url(\"/images/home-background/${this.state.images[this.state.currentImage]}\")`;
            void e.offSetWidth;
            e.classList.remove('fadeout');
            void e.offSetWidth;
            e.classList.add('fadein');
            setTimeout(() => {
                void e.offSetWidth;
                e.classList.remove('fadein');
                void e.offSetWidth; //Dummy expression to retrigger animation
            }, 2000);
        }, 2000);
    }
    componentDidMount() {
        setTimeout((() => {
            this.fadeImage(document.querySelector(".homeimage"));
            setInterval(this.fadeImage.bind(this, document.querySelector(".homeimage")), 10000);
        }).bind(this), 6000);

        this.state.images.forEach((picture) => { //preload images so they don't take time to load after fade-in starts
            const img = new Image();
            img.src = `/images/home-background/${picture}`;
        });
    }

    render() {
        
       

        

        return (
            <div className="App">
                <Navbar page="home" />
                <div className="container-fluid p-0">
                        <div className="row landing p-0 m-0">
                            <div className="homeimage"  style={{"backgroundImage": `url(\"/images/home-background/${this.state.images[this.state.currentImage]}\") `}}></div>
                            <div className="gradient"></div>
                            <div className="col-md-8 mx-auto my-auto">
                                <img src="/images/logo-transparent.png" className="d-block img-fluid biglogo"></img>
                                <center>
                                    <Link to="section-1" smooth={true} offset={-100} duration={800}>
                                        <button className="p-2 m-2 btn btn-lg btn-primary quick-button">
                                            <i className="fas fa-users fa-lg"></i> About
                                        </button>
                                    </Link>
                                    <Link to="section-2" smooth={true} duration={800}>
                                        <button className="p-2 m-2 btn btn-lg btn-secondary quick-button">
                                            <i className="fas fa-dollar-sign fa-lg"></i> Contact
                                        </button>
                                    </Link>
                                </center>
                            </div>
                    </div>
                    <section id="section-1" style={{marginBottom:"100px"}}>
                                <div className="row p-5">
                                    <div className="col-8">
                                        <h1 className="display-1">This is a template website.</h1>
                                        <p className="lead">It's meant for quickly and easily getting a website up and running for a customer. The process is simple: Customer requests a website, I show them some designs they might
                                        like, and tailor them to their liking. This light themed website is easily customizable, and even provides some <a href="/api/hello">api endpoints</a> for extended functionality.</p>
                                    </div>
                                </div>
                    </section>
                    <section id="section-2">
                                <div className="row py-5 pr-5">
                                    <div className="col-8 ml-auto justify-content-end">
                                        <h1 className="display-2">This isn't going to be the final product.</h1>
                                        <p className="lead ">I'm going to change this a bunch, add pages as needed, and fill it with information about the business/team/thing.</p>
                                    </div>
                                </div>
                    </section>
                </div>
                
                <Footer></Footer>

            </div>
        );
    }
}

export default Home;
