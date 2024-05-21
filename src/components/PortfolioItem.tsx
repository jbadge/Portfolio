import React from 'react'
import { PortfolioType } from '../types/PortfolioTypes'

const PortfolioItem = ({ website, thumbnail }: PortfolioType) => {
  return (
    <a href={website} className="portfolio-link" data-toggle="modal">
      <div className="caption">
        <div className="caption-content">
          <i className="fa fa-search-plus fa-3x"></i>
        </div>
      </div>
      <img src={thumbnail} className="img-responsive img-portfolio" alt="" />
    </a>
  )
}

export default PortfolioItem
