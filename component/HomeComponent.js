import React, { Component } from 'react';
import { Header, Footer, SeoHead } from './include';
import { connect } from 'react-redux';
import { setSeoData } from './actions';

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        // this.contentWillMount();
        //  this.onInit();
    }

    onInit() {
        this.props.dispatch(setSeoData({ metaDescription: "header page...", title: "thanks Page :)" }));
    }

    render() {
        return (
            <div>
                <SeoHead></SeoHead>
                <Header></Header>
                <label>Hii Iam Index Home Page Calling----{this.props.seoData.seoHeaderData.title}----</label>
                <button onClick={this.onInit.bind(this)}> change data</button>
                <Footer></Footer>
            </div>
        );
    }

}


export default connect((state) => {
    return { seoData: state.seoReducer };
})(HomeComponent);