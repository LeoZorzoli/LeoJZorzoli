import React from 'react'
import './social.css'

const Social = () => {
  return (
        <div className="icon_bar animate__animated animate__fadeIn animate__delay-1s">
            <a href="https://twitter.com/ProgramandoM" className="redLink" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
            <a href="mailto:zorzolileonel@gmail.com" className="redLink" target="_blank" rel="noopener noreferrer"><i className="fa fa-google"></i></a>
            <a href="https://www.linkedin.com/in/leonelzorzoli/" className="redLink" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
            <a href="https://github.com/LeoZorzoli" className="redLink" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
        </div>
  )
}

export default Social;