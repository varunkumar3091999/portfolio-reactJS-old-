import React from 'react'

//file imports
import Header from './Header'
import Skills from './Skills'
import SocialMediaLinks from './SocialMediaLinks'
import Certifications from './Certificatons'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <SocialMediaLinks />
        <Skills />
        <Certifications />
      </div>
    )
  }
}
