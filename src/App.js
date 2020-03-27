import React, { Component } from 'react';
import './App.css';

class App extends Component{
  state = {
    arrToSearch: [],
    searchTerm: "",
  }

  handleInputArr = event => {
    this.setState({arrToSearch: event.target.value.split(', ').join('').split(' ')})
  }
  handleInputSearchTerm = event => {
    this.setState({searchTerm: event.target.value})
  }
  
  handleSubmitLinear = event => {
    event.preventDefault();
    let x;
    const search = this.state.arrToSearch.filter((item, i) => {
      x = i;
      return item === this.state.searchTerm
    })
    if(search.length === 0){
      this.setState({answer: {iterations: x, message: "did not find number"}})
    }
    this.setState({answer: x})
  }

  helperSubmit = () => {
    if(!this.state.answer){return}
    const x = this.state.answer.iterations
    if(!!x){
      return <p>{`It took ${x} iterations to find out the term is not in the array`}</p>
    }
    return <p>{`It took ${this.state.answer} iterations to find `}</p>
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form id="linear-search-form" onSubmit={this.handleSubmitLinear}>
            <label htmlFor="arrToSearch">Linear Search</label><br/>
            <textarea rows="7" cols="70" id="arrToSearch" required onChange={this.handleInputArr}/><br/>
            <label htmlFor="searchTerm">What are you searching for?</label><br/>
            <input type="text" id="search-term" required onChange={this.handleInputSearchTerm}/><br/>
            <button type="submit">Search</button>
          </form>
          {this.helperSubmit()}
        </header>
      </div>
    )
  }
}

export default App;
