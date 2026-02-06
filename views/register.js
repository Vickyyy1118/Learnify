import React from 'react'

import { Helmet } from 'react-helmet'

import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="register-register">
        <div className="register-shape">
          <img
            alt="Ellipse27068"
            src="/ellipse27068-94ya.svg"
            className="register-ellipse2"
          />
          <img
            alt="Ellipse17069"
            src="/ellipse17069-mtu6c.svg"
            className="register-ellipse1"
          />
        </div>
        <div className="register-notify">
          <img
            alt="batterythreequarters7069"
            src="/batterythreequarters7069-j18f.svg"
            className="register-batterythreequarters"
          />
          <img
            alt="wifi7069"
            src="/wifi7069-4gsi.svg"
            className="register-wifi"
          />
          <img
            alt="signal7069"
            src="/signal7069-lrms.svg"
            className="register-signal"
          />
          <span className="register-text10">12:30</span>
        </div>
        <span className="register-text11">Welcome Onboard!</span>
        <div className="register-button">
          <span className="register-text12">Register</span>
        </div>
        <div className="register-group1">
          <img
            alt="Rectangle2I706"
            src="/rectangle2i706-ptlw-200h.png"
            className="register-rectangle21"
          />
          <span className="register-text13">Enter your full name</span>
        </div>
        <div className="register-group2">
          <img
            alt="Rectangle2I706"
            src="/rectangle2i706-aktq-200h.png"
            className="register-rectangle22"
          />
          <span className="register-text14">Enter email address</span>
        </div>
        <div className="register-group4">
          <img
            alt="Rectangle2I706"
            src="/rectangle2i706-9sej-200h.png"
            className="register-rectangle23"
          />
          <span className="register-text15">Confirm Password</span>
        </div>
        <div className="register-group3">
          <img
            alt="Rectangle2I706"
            src="/rectangle2i706-8vro-200h.png"
            className="register-rectangle24"
          />
          <span className="register-text16">Enter Password</span>
        </div>
        <span className="register-text17">let’s get your task completed</span>
        <span className="register-text18">
          <span className="register-text19">
            Already have an account ?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Sign in</span>
        </span>
        <div className="register-frame3"></div>
      </div>
    </div>
  )
}

export default Register
