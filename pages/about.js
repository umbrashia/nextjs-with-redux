import React, { Component } from 'react';
import AboutComponent from '../component/AboutComponent';

class About extends Component {

  constructor(props) {
    super(props);
    // this.contentWillMount();
  }

  render() {
    return (
      <div>
        <AboutComponent></AboutComponent>
      </div>
    );
  }

}


export default About;