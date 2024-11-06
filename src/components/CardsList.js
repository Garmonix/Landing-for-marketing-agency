import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import React from 'react';
import Card from './Card';

const cardsData = [
    { id: 1, title: 'Search engine', subtitle: 'optimization', image: img1 },
    { id: 2, title: 'Pay-per-click',subtitle: 'advertising', image: img2 },
    { id: 3, title: 'Social Media',subtitle: 'Marketing', image: img3 },
    { id: 4, title: 'Email',subtitle: 'Marketing', image: img4 },
    { id: 5, title: 'Content',subtitle: 'Creation', image: img5 },
    { id: 6, title: 'Analytics',subtitle: 'Tracking', image: img6 },
  ];
export default function CardsList() {
  const handleLearnMore = (title) => {
    alert(`Learn more about ${title}`);
  };

  return (
    <div className="cards-list">
      {cardsData.map((card) => (
        <Card 
          key={card.id}
          id={card.id} 
          title={card.title}
          subtitle={card.subtitle} 
          image={card.image} 
          onLearnMore={() => handleLearnMore(card.title)} 
        />
      ))}
    </div>
  );
}