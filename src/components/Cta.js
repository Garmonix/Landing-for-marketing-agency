import React from 'react';
import '../cta.css';
import imgCta from '../images/cta-img.svg';

export default function Header() {
  return (
    <section className='cta'>
        <div className='text-section'>
            <h3 className='let-header'>Let’s make things happen</h3>
            <p className='par-contact'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
            <button className="button-proposal">Get your free proposal</button>
        </div>
        <img src={imgCta} alt="img" className='imgCta'/>
    </section>

  );
}