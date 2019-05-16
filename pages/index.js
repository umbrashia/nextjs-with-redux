import React, { Component } from 'react';
import HomeComponent from '../component/HomeComponent';
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import axios from 'axios';

// @connect((store)=>{
//   return {};
// })
class Index extends Component {

    constructor(props) {
        super(props);
        // this.contentWillMount();
    }

    render() {
        return (
            <div>
                <HomeComponent></HomeComponent>
            </div>
        );
    }

}


export default Index;