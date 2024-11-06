import React from 'react'
import '../subheading.css';
import '../working.css';
import Procesitem from './Procesitem';

const items = [
  { number: '01', title: 'Consultation', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
  { number: '02', title: 'Research and Strategy Development', description: 'Description 2' },
  { number: '03', title: 'Implementation', description: 'Description 2' },
  { number: '04', title: 'Monitoring and Optimization', description: 'Description 2' },
  { number: '05', title: 'Reporting and Communication', description: 'Description 2' },
  { number: '06', title: 'Continual Improvement', description: 'Description 2' },
  
];



export default function Working() {
    return (
        <section>
            <div className='subheading subheading-working'>
                <h2 className='working'>Our Working Process </h2>
                <p className='working-subheading' >Step-by-Step Guide to Achieving Your Business Goals</p>
            </div>
            <div className='process-cards'>
            {items.map((item, index) => (
                <Procesitem 
                    key={index} 
                    number={item.number} 
                    title={item.title} 
                    description={item.description} 
                />
      ))}
            </div>
        </section>
    )
}