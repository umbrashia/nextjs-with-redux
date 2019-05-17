import React, { Component } from 'react';
import AboutComponent from '../component/AboutComponent';
import { Provider } from 'react-redux';
import  store  from './store';

class About extends Component {

  constructor(props) {
    super(props);
    // this.contentWillMount();
  }

  render() {
    return (
      <Provider store={store}>
        <AboutComponent></AboutComponent>
      </Provider>
    );
  }

}


export default About;