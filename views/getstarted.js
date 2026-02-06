import React from 'react'

import { Helmet } from 'react-helmet'

import './getstarted.css'

const Getstarted = (props) => {
  return (
    <div className="getstarted-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="getstarted-getstarted">
        <div className="getstarted-shape">
          <img
            alt="Ellipse27062"
            src="/ellipse27062-nrjs.svg"
            className="getstarted-ellipse2"
          />
          <img
            alt="Ellipse17062"
            src="/ellipse17062-35n.svg"
            className="getstarted-ellipse1"
          />
        </div>
        <div className="getstarted-notify">
          <span className="getstarted-text10">12:30</span>
        </div>
        <span className="getstarted-text11">get things done with learnEDU</span>
        <span className="getstarted-text12">
          <span>
            welcome to one of the best online learning place
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>where you can learn from one of the best Teachers</span>
        </span>
        <div className="getstarted-button">
          <span className="getstarted-text16">get started</span>
        </div>
        <span className="getstarted-text17">sign up with Google</span>
        <img
          alt="image18053"
          src="/image18053-hh1e-200h.png"
          className="getstarted-image1"
        />
        <span className="getstarted-text18">or</span>
        <span className="getstarted-text19">sign up with facebook</span>
        <img
          alt="image28054"
          src="/image28054-d5v4-200w.png"
          className="getstarted-image2"
        />
        <img
          alt="image38054"
          src="/image38054-7cj-400w.png"
          className="getstarted-image3"
        />
      </div>
    </div>
  )
}

export default Getstarted
