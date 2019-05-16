import React, { Component } from 'react';
import { Header, Footer, SeoHead } from './include';

class AboutComponent extends Component {

    constructor(props) {
        super(props);
        // this.contentWillMount();
    }

    render() {
        return (
            <div>
                <SeoHead></SeoHead>
                <Header></Header>
                <label>Hello Iam About Page Calling.....</label>
                <Footer></Footer>
            </div>
        );
    }

}


export default AboutComponent;