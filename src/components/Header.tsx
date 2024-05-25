import React from 'react'

interface HeaderProps {
  refProps?: React.RefObject<HTMLElement>
}

const Header = ({ refProps }: HeaderProps) => {
  return (
    <header id="header" ref={refProps}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img
              className="img-responsive img-profile"
              src="/images/jbadger.png"
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
