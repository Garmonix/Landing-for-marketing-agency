import React from 'react';
import '../contuctus.css';
import '../subheading.css';
import image from '../images/contactpicture.svg'

export default function Contuctus() {
  return (
    <section>
      <div className='subheading subhead-slider'>
        <h2 className='contuctus-head'>Contact Us</h2>
        <p className='contuctus-subtitle'>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>

      <div className='contuctus-form'>

        <div class="contact-options">
          <label class="checkbox-container">
            <input type="checkbox" name="sayHi" class="checkbox-input" />
            <span class="checkbox-custom"></span> Say Hi
          </label>
          <label class="checkbox-container">
            <input type="checkbox" name="getQuote" class="checkbox-input" />
            <span class="checkbox-custom"></span> Get a Quote
          </label>
        </div>

        <div class="form-group-name">
          <label for="name">Name</label>
          <br></br>
          <input type="text" id="name" name="Name" placeholder="Name" class="input" required />
        </div>

        <div class="form-group-email">
          <label for="email">Email</label>
          <br></br>
          <input type="email" id="email" name="email" placeholder="Email" class="input" required />
        </div>

        <div class="form-group-message">
          <label for="message">Message</label>
          <br></br>
          <textarea id="message" name="message" placeholder="Your message" rows="5" class="input text-input" required></textarea>
        </div>

        <button type="submit" class="send-message-btn">Send Message</button>


        <div class="contact-image">
          <img src={image} alt="Contact Us Image" />
        </div>
      </div>
    </section>
  )
}