import React from 'react'

//file imports
import Name from './Name'
import Skills from './Skills'
import SocialMediaLinks from './SocialMediaLinks'
import Certifications from './Certificatons'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Name />
        <Skills />
        <SocialMediaLinks />
        {/* <Certifications /> */}
      </div>
    )
  }
}
