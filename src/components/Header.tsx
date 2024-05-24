import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img
              className="img-responsive img-profile"
              src="/images/look.jpg"
              alt=""
            />
            <div className="intro-text">
              <span className="name">Jeremy Badger</span>
              <hr className="star-light" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
