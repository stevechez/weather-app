import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import ForcastList from '../containers/ForcastList';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <SearchBar />
        <ForcastList />
      </div>

    );
  }
}
