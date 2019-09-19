import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editStream, fetchStream} from '../../actions/index';
import StreamForm from './StreamForm';
import Modal from '../../Modal';

class StreamEdit extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }

  onSubmit = (formValues) => {
    this.editStream(formValues);
  }

  editStream = (formValues) => {
    this.props.editStream(formValues.id, formValues);
    console.log(formValues)
  }


  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const initialValues = this.props.stream;


    return (
      <div>
        <div className="container">
        <h3>Edit a Stream</h3>
        <StreamForm initialValues={initialValues} onSubmit={this.onSubmit}/>
      </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}


export default connect(mapStateToProps, {editStream, fetchStream})(StreamEdit);