import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import {fetchStream} from '../../actions/index'
import StreamDelete from './StreamDelete';

class StreamShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }

  renderAdmin = (stream) => {
    if(stream.userId === this.props.currentUserId) {
      return (
        <div className="col-sm-2 align-self-center">
          <div className="row">
            <div className="col-sm-6  ">
              <div className="btn btn-warning">Edit</div>
            </div>

            <StreamDelete/>
          </div>
        </div>
      )
    } 
  }

  renderStream = () => {

    return (
      <div className="list-group-item">
          <div className="row " key={this.props.stream.id}>
            <div className="col-sm-1 align-self-center">
              <i className="far fa-user fa-3x"/>
            </div>
            
            <div className="col-sm-9">
              <div className="content">
                <div className="description">
                  <h2>{this.props.stream.title}</h2>
                  <p>{this.props.stream.description}</p>
                </div>
              </div>
            </div>
            {this.renderAdmin(this.props.stream)}
            
          </div>
        </div>
       
    )
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
   
    return (
      <div>
        {this.renderStream()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth.userId
  }
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);