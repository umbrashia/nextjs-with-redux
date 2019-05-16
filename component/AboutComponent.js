import React, { Component } from 'react';
import Header from './include/Header';
import Footer from './include/Footer';

class AboutComponent extends Component {

    constructor(props) {
        super(props);
        // this.contentWillMount();
    }

    render() {
        return (
            <div>
                <Header></Header>
                <label>Hello Iam About Page Calling.....</label>
                <Footer></Footer>
            </div>
        );
    }

}


export default AboutComponent;