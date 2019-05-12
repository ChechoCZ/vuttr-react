import React, { Component } from 'react';

import './styles.css';

export default class ToolList extends Component {
  removeTool(tool) {
    this.props.removeTool(tool);
  }

  render() {
    return (
      <div>
        {this.props.tools.map(element => (
          <div className="tool" key={element.id}>
            <header>
              <h4>{element.title}</h4>
              <button onClick={() => this.removeTool(element.id)}>remove X</button>
            </header>          
            <p>{element.description}</p>
            <div className="tags">
              {element.tags.map(tag => (
                <small key={element.tag}>#{tag}</small>
              ))}   
            </div>                     
          </div>
        ))}          
      </div>  
    );
  }
}