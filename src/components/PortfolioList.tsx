import React from 'react'
import PortfolioItem from './PortfolioItem'
import portfolio from '../projects.json'

const PortfolioList = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Portfolio</h2>
            <hr className="star-primary" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 portfolio-item-list">
            {portfolio.map((project) => (
              <PortfolioItem
                key={project.id}
                website={project.website}
                thumbnail={project.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioList
