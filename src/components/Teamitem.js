import React from 'react';
import '../team.css';

export default function TeamItem({ image, title, subtitle, logotype, description }) {

  return (
    <div className='team-item'>
      <div className='team-upper-section'>
        <img src={image} alt={title} />
        <div className='team-name'>
          <h4 className='team-title'>{title}</h4>
          <p className='team-subtitle'>{subtitle}</p>
        </div>
        <img src={logotype} alt={subtitle} className='team-logotype'></img>
      </div>
        <p className='team-description'>{description}</p>
    </div>
  );
}