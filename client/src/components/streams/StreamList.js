import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import {fetchStreams} from '../../actions/index'
import StreamDelete from './StreamDelete';
import Modal from '../../Modal';

class StreamList extends Component {

  componentDidMount() {
    this.props.fetchStreams();
  }

  renderCreate = () => {
    return (
      <Link className="btn btn-primary mt-4 mr-2 float-right" to="./streams/new">
        Create Stream
      </Link>
    )
  }

  renderAdmin = (stream) => {
    if(stream.userId === this.props.currentUserId) {
      return (
        <div className="col-sm-2 align-self-center">
          <div className="row">
          <div className="col-sm-6  align-self-center">
            <Link className="btn btn-warning" to={`./streams/edit/${stream.id}`}>Edit</Link>
          </div>

          <div className="col-sm-6  align-self-center">
            <StreamDelete id={stream.id}/>
            
          </div>
          
          </div>
          
        </div>
      )
    } 
  }


  renderList = () => {
    return this.props.streams.map(stream => { 
      return (
        <div className="list-group-item">
          <div className="row " key={stream.id}>
            <div className="col-sm-1 align-self-center">
              <i className="far fa-user fa-3x"/>
            </div>
            
            <div className="col-sm-9">
              <div className="content">
                <div className="description">
                  <Link to={`./streams/${stream.id}`}><h2>{stream.title}</h2></Link>
                  <p>{stream.description}</p>
                </div>
              </div>
            </div>

            {this.renderAdmin(stream)}
          </div>
        </div>
       
      );
    });
  }

  render() {
    console.log(this.props.streams);
    return (
      <div>
        {this.renderList()}
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
  }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);