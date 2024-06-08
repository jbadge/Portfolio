import React from 'react'

type CardProps = {
  title: string
  content: string
  imageUrl: string
  overlayTitle: string
  overlayContent: string
}

const Card = ({
  title,
  content,
  imageUrl,
  overlayTitle,
  overlayContent,
}: CardProps) => {
  return (
    <div className="card">
      <a className="card-body">
        {imageUrl && (
          <img src={imageUrl} alt={title} className="card-img-top" />
        )}
        <h5 className="card-title">{title}</h5>
        <div className="card-text">{content}</div>
        <div className="card-overlay">
          <div className="card-overlay-title">
            {overlayTitle}
            <div className="card-overlay-body">{overlayContent}</div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Card
