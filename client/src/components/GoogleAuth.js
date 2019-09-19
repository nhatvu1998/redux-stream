import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signIn, signOut} from '../actions/index';



class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '265210386831-8fqr7ab239d1nsa081ho9i7uq3o5srs7.apps.googleusercontent.com',
        fetch_basic_profile: true,
        scope: 'profile'
      })
      .then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());  
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getBasicProfile().getId());
    } else {
      this.props.signOut();
    }
  }

  
  renderButton = () => {
    if(this.props.isSignedIn == null) {
      return <div> Loading</div>  
    } else if (this.props.isSignedIn === true) {
      return ( <button className="btn btn-danger" onClick={() =>this.onSignOut()}>Sign Out</button>  )
    } else {
      return ( <button className="btn btn-danger" onClick={() =>this.onSignIn()}><i className="fab fa-google"></i> Sign In with Google</button>   )
    }
  }
  
  onSignIn = () => {
    this.auth.signIn()
  }

  onSignOut = () => {
    this.auth.signOut();
  }
  render() {
    return (
      <div>
        <div >{this.renderButton()}</div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn, userId: state.auth.userId};
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);

