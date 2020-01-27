import React from 'react'
import { render } from 'react-dom';


class Skills extends React.Component {

  skills = ["ReactJS", "NodeJS", "firebase"]
  renderSkill = this.skills.map(function (skill) {
    return (
      <ul>
        <li>
          {skill}
        </li>
      </ul>
    )
  })

  render() {
    return (
      <div>
        <h4>Skills</h4>
        <p>{this.renderSkill}</p>
      </div>
    )
  }
}


export default Skills