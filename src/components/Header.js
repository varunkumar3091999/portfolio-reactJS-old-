import React from 'react'

const Header = (props) => (
  <div>
    <h1>{props.name}</h1>
    <h3>{props.email}</h3>
  </div>
)

Header.defaultProps = {
  name: "Varun Kumar S",
  email: "varunkumar0930@gmail.com"
}

export default Header