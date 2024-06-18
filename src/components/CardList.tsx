import React from 'react'
import Card from '../components/Card'
import card from '../projectsCard.json'

const CardList = () => {
  return (
    <section id="card">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Cards</h2>
            <hr className="star-primary" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 card-item-list">
            {card.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                content={project.content}
                imageUrl={project.thumbnail}
                overlayTitle={project.overlayTitle}
                overlayContent={project.overlayContent}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardList
