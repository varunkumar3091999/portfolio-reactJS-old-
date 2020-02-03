import React from 'react'

const Name = (props) => (
  <div>
    <h2>
      {props.name}
      <a
        className="about"
        href="/about">
        {/* <img className="infoImage" src={require("../images/info.png")} /> */}
        about
      </a>
    </h2>
    <p>{props.email}</p>
    <p>{props.dev}</p>
  </div>
)

Name.defaultProps = {
  name: "Varun Kumar S",
  email: "varunkumar0930@gmail.com",
  dev: 'Front End Web Developer'
}

export default Name