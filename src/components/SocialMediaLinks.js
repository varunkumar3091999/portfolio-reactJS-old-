import React from 'react'

const SocialMediaLinks = () => {

  return (
    <div className='socialMediaLinks'>

      <a className="links"
        href="https://twitter.com/Varunkumar30999"
        target="_blank">
        <img className="image" src={require("../images/twitter2.jpeg")} />
      </a>

      <a className="links"
        href="https://www.linkedin.com/in/varun-kumar-0bb881192/detail/contact-info/"
        target="_blank">
        <img className="image" src={require("../images/linkedin.jpeg")} />
      </a>

      <a className="links"
        href="https://github.com/varunkumar3091999"
        target="_blank"
      >
        <img className="image" src={require("../images/git4.png")} />
      </a>
      <a className="links"
        href="https://mail.google.com/mail/u/2/#search/varunkumar0930%40gmail.com?compose=new"
        target="_blank"
      >
        <img className="image" src={require("../images/gmail2.png")} />
      </a>
    </div>
  )
}

export default SocialMediaLinks