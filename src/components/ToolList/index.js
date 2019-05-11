import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

export default class ToolList extends Component {
  state = {
    tools: []
  }

  componentDidMount() {
    this.loadTools();
  }

  loadTools = async () => {
    const response = await api.get('/tools');

    const tools = response.data;

    this.setState({ tools: tools });
  }

  removeTool = async (id) => {
    await api.delete(`/tools/${id}`);

    this.loadTools();
  };

  render() {
    const { tools } = this.state;

    return (
      <div>
        {tools.map(element => (
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