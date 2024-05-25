import React from 'react'
import PortfolioItem from './PortfolioItem'
import portfolio from '../projects.json'

interface PortfolioListProps {
  refProps?: React.RefObject<HTMLElement>
}

const PortfolioList: React.FC<PortfolioListProps> = ({ refProps }) => {
  return (
    <section id="portfolio" ref={refProps}>
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
