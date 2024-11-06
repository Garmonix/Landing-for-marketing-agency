import React from 'react'
import '../subheading.css';
import garrow from '../images/greenarrow.svg'


export default function Subheading() {
    return (
      <section>
        <div className='subheading'>
        <h2 className='Case'>Case Studies</h2>
        <p>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
        </div>
        <div className='studies studies-left'>
          <div className='studie'>
            <p className='studie-text'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
            <div className='learn-link'>
                <a className='learn'>Learn more</a>
                <img src={garrow}></img>
            </div>
          </div>
          <div className='studie'>
            <div className='studie-center'>
            <p className='studie-text' >For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
            <div className='learn-link'>
                <a className='learn'>Learn more</a>
                <img src={garrow}></img>
            </div>
            </div>
          </div>
          <div className='studie studies-right'>
            <p className='studie-text'>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
            <div className='learn-link'>
                <a className='learn'>Learn more</a>
                <img src={garrow}></img>
            </div>
          </div>  
        </div>
      </section>


  )
}