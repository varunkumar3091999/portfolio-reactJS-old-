import React from 'react';
import ReactDom from 'react-dom'
import logo from './logo.svg';
// import './App.css';

//file imports
import Sidebar from './components/Sidebar'

export default class App extends React.Component {

  render() {
    return (
      <Sidebar />
    )
  }
}


