import React from 'react'

const About = () => {
  return (
    <section className="success" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>About</h2>
            <hr className="star-light" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-lg-offset-2">
            <p>
              I am a technology nerd who has been passionate about tech my
              entire life. I graduated with a degree in physics, but my love for
              coding in college led me to shift my career path. I am dedicated
              to <span className="nowrap">self-improvement</span> and continuous
              learning. When I'm not in front of my computer, I enjoy working
              out and playing board games.
            </p>
          </div>
          <div className="col-lg-4">
            <p>
              Looking for a team where I can continue to develop my abilities.
              I've developed my frontend skills{' '}
              <span className="nowrap">(HTML/CSS,</span> React.js, TypeScript)
              over the past couple of years. Prior to learning full-stack, my
              experience was in STEM projects, mostly using Python and C++. My
              favorite language is the one I’ve used most recently.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
