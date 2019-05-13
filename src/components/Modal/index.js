import React, { Component } from 'react';

import './styles.css';

export default class Model extends Component {
  handleAddTool = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="modal-wrapper"
          style={{
            transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>              
          <div className="modal-content"> 
            <div className="modal-header">
              <h4>+ Add new Tool</h4>
              <span className="close-modal-btn" onClick={this.props.close}>×</span>
            </div>

            <form onSubmit={this.handleAddTool.bind(this)}>                
              <label>Tool Name</label>
              <input type="text" name="title" />
                          
              <label>Tool Link</label>
              <input type="text" name="link" />
                          
              <label>Tool Description</label>
              <textarea name="description" />             
            
              <label>Tags</label>
              <input type="text" name="tags[]" />
              
              <button className="btn-add">Add tool</button>
            </form>
          </div>              
        </div>
      </div>
    );
  }
}