import React, { Component } from 'react';
import Link from 'next/link';
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
            <div><h1>Hello Index</h1><br /><h2>content form index.js</h2>
                <Link href="/about" title="About Page">
                <button>Go to About Page</button>
                </Link>
                <hr />
            </div>
        );
    }

}


export default Index;