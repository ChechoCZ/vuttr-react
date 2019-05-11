import React, { Component } from 'react';

import './styles.css';

export default class SearchAdd extends Component {
  render() {
    return (
      <div className="search-add">
        <div className="search">
          <input type="text" name="search" placeholder="Search" />
          <input type="checkbox" name="tag" /><small>Search by Tag</small>
        </div>
        <div className="add">
          <button>+ Add</button>
        </div>
      </div>
    );
  }
}