import React from 'react'

const Footer = (props) => {
  return (
    <div>{props.footerText}</div>
  )
}

Footer.defaultProps = {
  footerText: 'This portfolio is built by me using ReactJS, Html, css'
}

export default Footer