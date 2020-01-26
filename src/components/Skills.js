import React from 'react'
import { render } from 'react-dom';


class Skills extends React.Component {

  skills = ["ReactJS", "NodeJS", "firebase"]
  renderSkill = this.skills.map(function (skill) {
    return <li><h4>{`  =>${skill}`}</h4></li>;
  })

  render() {
    return (
      <div>
        <h1>Skills</h1>
        <h2>{this.renderSkill}</h2>
      </div>
    )
  }



}


export default Skills