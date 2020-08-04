import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Page404 extends Component {
    render() {
        return (
            <div className="App">
                <Navbar page="404" />
                <div className="container"><h1 className="jumbo text-center">404 Not Found</h1></div>
                

            </div>
        );
    }
}

export default Page404;