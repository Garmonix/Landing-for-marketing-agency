import React, { useState } from 'react';
import openIcon from '../images/openIcon.svg'; // Иконка для закрытого состояния
import closeIcon from '../images/closeIcon.svg'; // Иконка для открытого состояния
import '../working.css';

export default function SectionItem({ number, title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`section-item ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <span className='big-numbers'>{number}</span> <h3 className='process-title'>{title}</h3>
      <button onClick={() => setIsOpen(!isOpen)} className='activation-button'>
        <img 
          src={isOpen ? closeIcon : openIcon} 
          alt={isOpen ? 'Close' : 'Open'} 
          className="icon" 
        />
      </button>
      {isOpen && <p>{description}</p>}
    </div>
  );
}