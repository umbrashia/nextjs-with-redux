import React, { Component } from 'react';
import {Header,Footer, SeoHead} from './include';
import {connect} from 'react-redux';

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


export default connect((state)=>{
    console.log(state);
    return {seoData:state.seoReducer};
})(HomeComponent);