import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteStream} from '../../actions/index';
import Modal from '../../Modal';

class StreamDelete extends Component {

  deleteStream = () => {
    this.props.deleteStream(this.props.id)

  }
  
  render() {
    return (
      <div>
      <button className="btn btn-danger" data-toggle="modal" data-target="#exampleModal" >Delete</button>
      <Modal onSubmit={this.deleteStream}  title={"Edit stream"} description={" Are you sure you want to edit this stream?"} action={"Delete"}/>
    </div>
    );
  }
}

export default connect(null, {deleteStream})(StreamDelete);