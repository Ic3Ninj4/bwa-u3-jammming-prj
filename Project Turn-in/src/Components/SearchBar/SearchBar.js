import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: "",
      tokenAvailable: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  handleSearch(){
    this.props.onSearch(this.state.term);
  }
  handleTermChange(event){
    this.setState({term: event.target.value});
  }
  render(){
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} id="term" placeholder="Enter A Song Title" />
        <a onClick={this.handleSearch}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;

// <input onChange={this.handleTermChange} id="term" placeholder="Enter A Song, Album, or Artist" />
