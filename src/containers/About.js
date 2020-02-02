import React from 'react'

const About = (props) => (
  <div>
    <h4>{props.title}</h4>
    <p>{props.content}</p>
  </div>
)


About.defaultProps = {
  title: "About me",
  content: "this.s some filler text"
}

export default About