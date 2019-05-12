import React, { Component } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';
import SearchAdd from '../../components/SearchAdd';
import ToolList from '../../components/ToolList';

export default class Main extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      tools: [],
      checkTag: false
    }
  }  

  componentDidMount() {
    this.loadTools();
  }

  loadTools = async () => {
    const response = await api.get('/tools');

    const tools = response.data;

    this.setState({ tools: tools });
  }

  removeTool = async (tool) => {
    await api.delete(`/tools/${tool}`);

    this.loadTools();
  };

  filterTools = async (word) => {
    let tools = {};
    let response

    if (!this.state.checkTag) {
      response = await api.get(`/tools?q=${word}`);
    } else {
      response = await api.get(`/tools?tags_like=${word}`);            
    }

    tools = response.data;

    if (tools) {
      console.log(tools);
      this.setState({ tools });
    }
  };

  searchByTag(checkTag) {
    this.setState({ checkTag });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchAdd filterTools={(word) => this.filterTools(word)} searchByTag={(check) => this.searchByTag(check)}/>
        <ToolList removeTool={(tool) => this.removeTool(tool)} tools={this.state.tools} />
      </div> 
    );
  }

}