import React, { Component } from 'react';

import './styles.css';

export default class Model extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      link: '',
      description: '',
      tags: ''
    }
  }

  handleAddTool = (e) => {
    e.preventDefault();
    
    const newTool = {
      title: this.state.title,
      link: this.state.link,
      description: this.state.description,
      tags: [this.state.tags]
    }

    this.props.addTool(newTool);
  }

  handleInputChange = (e) => {
    e.preventDefault();    
    
    this.setState({ [e.target.name]: e.target.value });
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
              <input type="text" name="title" onChange={this.handleInputChange} />
                          
              <label>Tool Link</label>
              <input type="text" name="link" onChange={this.handleInputChange} />
                          
              <label>Tool Description</label>
              <textarea name="description" onChange={this.handleInputChange} />             
            
              <label>Tags</label>
              <input type="text" name="tags" onChange={this.handleInputChange} />
              
              <button className="btn-add">Add tool</button>
            </form>
          </div>              
        </div>
      </div>
    );
  }
}