import React from 'react';
import '../card.css';

export default function Card({ id, title, subtitle, image, onLearnMore }) {
  return (
    <div className={`card card-${id}`} data-id={id}>
      <h3 className={`card-title title-${id}`} data-id={id}>{title}</h3>
      <h4 className={`card-subtitle subtitle-${id}`} data-id={id}>{subtitle}</h4>
      <img src={image} alt={title} className="card-image" />

      <div className={`arrow-learn`}>
      <div className={`card-arrow arrow-${id}`} data-id={id}></div>
        <a className={`learn-more  learn-${id}`} data-id={id} onClick={onLearnMore}>Learn more</a>
      </div>

    </div>
  );
}