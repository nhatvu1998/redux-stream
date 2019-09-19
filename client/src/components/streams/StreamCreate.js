import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createStream} from '../../actions/index';
import {Field, reduxForm} from 'redux-form';
import StreamForm from './StreamForm';
class StreamCreate extends Component {

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
    alert('You have successfully created!')
  }

  render() {

    return (
      <StreamForm onSubmit={this.onSubmit}/>
     
    );
  }

}





export default connect(null, {createStream})(StreamCreate);