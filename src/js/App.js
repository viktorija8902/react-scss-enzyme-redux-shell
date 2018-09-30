import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getData } from '../actions/actionCreators'
import logo from './../images/logo.svg';
import './../styles/App.scss';
import AnotherFile from './AnotherFile.js';

class App extends Component {
   componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.props.data}
        {this.props.error && <div>Error!!</div>}
        <AnotherFile test={"test test test"}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.results.data,
  error: state.results.error,
})

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
