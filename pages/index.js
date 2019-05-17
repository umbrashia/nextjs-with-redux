import React, { Component } from 'react';
import HomeComponent from '../component/HomeComponent';
import { Provider } from 'react-redux';
import  store  from './store';

class Index extends Component {

    constructor(props) {
        super(props);
        // this.contentWillMount();
    }

    render() {
        return (
                <Provider store={store}>
                    <HomeComponent></HomeComponent>
                </Provider>
        );
    }

}

export default Index;