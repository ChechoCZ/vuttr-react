import React, { Component } from 'react';

import './styles.css';

export default class SearchAdd extends Component {  
  filterTools(e) {
    const word = e.target.value;
    this.props.filterTools(word);
  }

  onlyTags(e) {
    this.props.searchByTag(e.target.checked);
  }

  render() {
    return (
      <div className="search-add">
        <div className="search">
          <input type="text" name="search" placeholder="Search" onChange={this.filterTools.bind(this)}/>
          <input type="checkbox" name="tag" onChange={this.onlyTags.bind(this)}/><small>Search in Tags only</small>
        </div>
        <div className="add">
          <button>+ Add</button>
        </div>
      </div>
    );
  }
}