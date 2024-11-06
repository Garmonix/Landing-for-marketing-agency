import React, { useState, useEffect } from 'react';
import '../subheading.css';
import '../team.css';
import TeamItem from './Teamitem';
import card1 from '../images/card1.svg'
import card2 from '../images/card2.svg'
import card3 from '../images/card3.svg'
import card4 from '../images/card4.svg'
import card5 from '../images/card5.svg'
import card6 from '../images/card6.svg'
import logotype from '../images/in.svg'

const initialItems = [
    { id: 1, image: card1, title: 'John Smith', subtitle: 'CEO and Founder', logotype: logotype, description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'  },
    { id: 2, image: card2, title: 'Jane Doe', subtitle: 'Director of Operations', logotype: logotype, description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills'  },
    { id: 3, image: card3, title: 'Michael Brown', subtitle: 'Senior SEO Specialist', logotype: logotype, description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'  },
    { id: 4, image: card4, title: 'Emily Johnson', subtitle: 'PPC Manager', logotype: logotype, description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'  },
    { id: 5, image: card5, title: 'Brian Williams', subtitle: 'Social Media Specialist', logotype: logotype, description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'  },
    { id: 6, image: card6, title: 'Sarah Kim', subtitle: 'Content Creator', logotype: logotype, description: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries'  },
  ];


const additionalItems = [
    { id: 7, image: card1, title: 'Alice Green', subtitle: 'Digital Strategist', logotype: logotype, description: '5+ years in digital strategy and analytics. Experienced in growth hacking and campaign development.' },
    { id: 8, image: card2, title: 'David Lee', subtitle: 'Lead Designer', logotype: logotype, description: '8+ years in UX/UI design. Strong background in interactive and user-centered design.' },
    { id: 9, image: card3, title: 'Sophia White', subtitle: 'Marketing Analyst', logotype: logotype, description: '3+ years in data analysis and market research. Skilled in predictive analytics and reporting.' },
];

export default function Teamlist() {
    const [items, setItems] = useState(initialItems);
    const [expanded, setExpanded] = useState(false);


    useEffect(() => {
        const timeout = setTimeout(() => {
            document.querySelectorAll('.team-item').forEach((item) => item.classList.add('show'));
        }, 100);
        return () => clearTimeout(timeout);
    }, [items]);

    const toggleItems = () => {
        if (expanded) {
            setItems(initialItems);
        } else {
            setItems([...initialItems, ...additionalItems.slice(0, 6)]);
        }
        setExpanded(!expanded);
    };

    return (
        <section className='team-section'>
            <div className='subheading subheading-working'>
                <h2 className='team'>Team</h2>
                <p className='team-subheading'>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
            </div>
            <div className='team-cards'>
            {items.map((item, index) => (
                <TeamItem 
                    key={index}
                    image={item.image} 
                    title={item.title} 
                    subtitle={item.subtitle}
                    logotype={item.logotype} 
                    description={item.description} 
              />
      ))}
            </div>
            <button className='team-button' onClick={toggleItems}>{expanded ? 'Hide some team' : 'See all team'}</button>
        </section>
    )
}