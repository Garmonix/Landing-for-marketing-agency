import React from 'react'
import Logo from '../images/Logo.svg'
import Illustration from '../images/Illustration.svg'

import amazon from '../images/amazon.svg'
import dribbble from '../images/dribbble.svg'
import hubspot from '../images/hubspot.svg'
import notion from '../images/notion.svg'
import netflix from '../images/netflix.svg'
import zoom from '../images/zoom.svg'

export default function Header() {
  return (
    <header>
        <nav class="clearfix"> 
            <img src={Logo} className='logo' alt='logo'/> 
            <ul className="nav">  
                <li><a href="#">About us</a></li>  
                <li><a href="#">Services</a></li>  
                <li><a href="#">Use Cases</a></li>  
                <li><a href="#">Pricing</a></li>  
                <li><a href="#">Web 2.0</a></li>  
                <li><a href="#">Blog</a></li>
                <button href="#" id="pull" className="button-request">Request a quote</button> 
            </ul>  
        </nav>
        <div className='main-section'>
        <div className='text-section'>
            <h1>Navigating the digital landscape for success</h1>  
            <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <button href="#" id="pull" className="button-consultation">Book a consultation</button> 
        </div>
        <img src={Illustration} className='Illustration'/>
        </div>
        <div className='logotypes'>
            <img src={amazon}  alt='amazon'/> 
            <img src={dribbble} alt='dribbble'/> 
            <img src={hubspot} alt='hubspot'/> 
            <img src={notion} alt='notion'/> 
            <img src={netflix} alt='netflix'/> 
            <img src={zoom} alt='zoom'/>
        </div>
        <div className='subheading'>
            <h2>Services</h2>
            <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </div>
    </header>
  )
}
