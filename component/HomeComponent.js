import React, { Component } from 'react';
// import Header from './include/Header';
import {Header,Footer, SeoHead} from './include';

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        // this.contentWillMount();
    }

    render() {
        return (
            <div>
                <SeoHead></SeoHead>
                <Header></Header>
                <label>Hii Iam Index Home Page Calling.....</label>
                <Footer></Footer>
            </div>
        );
    }

}


export default HomeComponent;