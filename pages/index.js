import React, { Component } from 'react';
import App, { Container } from 'next/app';
import HomeComponent from '../component/HomeComponent';
import { Provider } from 'react-redux';
import { initStore } from './store';
import withRedux from 'next-redux-wrapper';
class Index extends App {

    constructor(props) {
        super(props);
        // this.contentWillMount();
    }

    render() {
        const { store } = this.props;
        console.log("asasasasasasa"+this.props);
        return (
            <Container>
                <Provider store={store}>
                    <HomeComponent></HomeComponent>
                </Provider>
            </Container>
        );
    }

}


export default withRedux(initStore,{ debug: true })(Index);