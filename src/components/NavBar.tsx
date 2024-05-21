import React from 'react'

const NavBar = () => {
  React.useEffect(() => {
    const cbpAnimatedHeader = (function () {
      let docElem: HTMLElement = document.documentElement,
        header: HTMLElement | null =
          document.querySelector('.navbar-fixed-top'),
        didScroll: boolean = false,
        changeHeaderOn: number = 300

      function init(): void {
        window.addEventListener(
          'scroll',
          function (event: Event): void {
            if (!didScroll) {
              didScroll = true
              setTimeout(scrollPage, 250)
            }
          },
          false
        )
      }

      function scrollPage(): void {
        let sy: number = scrollY()
        if (header) {
          if (sy >= changeHeaderOn) {
            header.classList.add('navbar-shrink')
          } else {
            header.classList.remove('navbar-shrink')
          }
        }
        didScroll = false
      }

      function scrollY(): number {
        return window.scrollY
      }

      init()
    })()
  }, [])

  return (
    <nav
      className="navbar navbar-default navbar-fixed-top"
      aria-label="breadcrumbs"
    >
      <div className="container">
        <div className="navbar-header page-scroll">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#page-top">
            Jeremy Badger
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li className="hidden">
              <a href="#page-top"></a>
            </li>
            <li className="page-scroll">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="page-scroll">
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
