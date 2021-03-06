import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>

  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {this.props.description}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={this.props.onSubmit} data-dismiss="modal">{this.props.action}</button>
        </div>
      </div>
    </div>
  </div>
</div>
,
      document.querySelector('#modal')
    )
  }
}

export default Modal;