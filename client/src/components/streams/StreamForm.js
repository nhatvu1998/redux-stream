import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import history from '../../history';

class StreamForm extends Component {
  renderError = ({error, touched}) => {
    if (touched && error) {
      return (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )
    }
  }

  renderInput = ({input, label, meta}) => {
    return (
      <div>
        <div className="form-group">
          <label>{label}</label>
          <input className="form-control" {...input} />
          <div>{this.renderError(meta)}</div>
        </div>
      </div>
     
      )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);

  }

  render() {

    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form error">
          <Field name="title" component={this.renderInput} label="Enter title"/>
          <Field name="description" component={this.renderInput} label="Enter description"/>
          <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Submit</button>
        </form>
      </div>
     
    );
  }

}

const validate = (formValues) => {
  const errors = {};
  if(!formValues.title) {
    errors.title = "You must enter a title";
  }
  if(!formValues.description) {
    errors.description = "You must enter a description";
  } 
  return errors;   
}


export default reduxForm({
  form: 'streamForm',
  //@ts-ignore
  validate
})(StreamForm);

