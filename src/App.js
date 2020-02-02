import React from 'react';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom'

// import './App.css';

//file imports
import Home from './containers/Home'
import About from './containers/About'
import app from '../src/App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount = () => {
    this.setState({
      loading: false
    })
  }

  render() {

    if (this.state.loading) {

      return <div>
        <p>Loading...</p>
      </div>
    }

    return (
      <div className='app' >
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


