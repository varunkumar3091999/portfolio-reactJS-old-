import React from 'react'

//file imports
import Name from '../components/Name'
import Skills from '../components/Skills'
import Certifications from '../components/Certificatons'
import SocialMediaLinks from '../components/SocialMediaLinks'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.setState({
      loading: false
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <p>Loading...</p>
      )
    }

    return (
      <div>
        <Name />

        <Skills />
        {/* <Certifications /> */}
        <SocialMediaLinks />
        <div>
          <p>for more details, Click__
            <a
              className="about"
              href="/about">
              {/* <img className="infoImage" src={require("../images/.png")} /> */}
              Here
      </a> </p>

        </div>
      </div>
    )
  }
}