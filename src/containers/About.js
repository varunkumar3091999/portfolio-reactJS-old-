import React from 'react'

//file import

import Footer from '../components/footer'


export default class About extends React.Component {
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
    return (
      <div className="about">
        <h2>About me</h2>
        {/* <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p> */}
        <img src={require("../images/avatar2.jpeg")} />
        <p>
          My name is Varun Kumar Saravanan. I am a front End Web Developer.
        </p>
        <h3>Technical skills (in detail)</h3>
        <li>
          <h4>Programming</h4>
          <ul>
            <li>NodeJs</li>
            <li>c++</li>
          </ul>
          <h4>FrameWork</h4>
          <ul>
            <li>ReactJs</li>
          </ul>
          <h4>DataBase</h4>
          <ul>
            <li>MongoDB</li>
            <li>Firestore(Firebase)</li>
          </ul>
          <h4>Others</h4>
          <p>{this.aboutMe}</p>
          <ul>
            <li>Version Control(Git)</li>
            <li>Firebase</li>
          </ul>
        </li>

        <h3>Projects</h3>
        <ul>
          <li>
            <a href="https://varun-weather-app.herokuapp.com/"
              target="blank"
              className="link">
              Weather app
            </a>
            :    A Web application used to forecase weather of any location (nodeJs,HTML,css).
          </li>
          <li>
            <a href="https://mychatterbox-varun.herokuapp.com/"
              target="blank"
              className="link">
              Chat app
            </a>
            :    A Real Time Chat-application on the web built using NodeJs, socket.io, HTML, css.
          </li>
          <li>
            <a href="https://northapp.co/"
              target="blank"
              className="link">
              North App
              </a>
            :   (Part of the Development Team as an Intern) Project status and update tool
            <a
              href="https://drive.google.com/open?id=1LkHxGCm1ye9UON_Um0fXFlz9rt1sikn2"
              target="blank"
              className="link">
              (Intern Certificate).
            </a>
          </li>
          <li>
            Portfolio:  Developed my own portfolio , which you are looking at right now!!   (Reactjs, HTML, css)    </li>
        </ul>
        {/* <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p> */}

        <h3>"The ability to learn is the true form of intelligence"</h3>
      </div>
    )
  }
}