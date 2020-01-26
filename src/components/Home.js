import React from 'react'

//file imports
import Header from './Header'
import Skills from './Skills'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <Skills />
      </div>
    )
  }
}
