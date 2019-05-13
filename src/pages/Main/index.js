import React, { Component } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';
import SearchAdd from '../../components/SearchAdd';
import ToolList from '../../components/ToolList';
import Modal from '../../components/Modal';

export default class Main extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      tools: [],
      checkTag: false,
      showModal: false
    }
  }  

  componentDidMount() {
    this.loadTools();
  }

  loadTools = async () => {
    const response = await api.get('/tools');

    console.log(response);

    const tools = response.data.docs;

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
      this.setState({ tools });
    }
  };

  searchByTag = (checkTag) => {
    this.setState({ checkTag });
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchAdd 
          filterTools={(word) => this.filterTools(word)} 
          searchByTag={(check) => this.searchByTag(check)} 
          openModal={this.openModal} />
        <ToolList 
          removeTool={(tool) => this.removeTool(tool)} 
          tools={this.state.tools} />
        <Modal 
          className="modal"
          show={this.state.showModal}
          close={this.closeModal} />
      </div> 
    );
  }

}