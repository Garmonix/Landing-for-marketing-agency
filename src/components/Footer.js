import React from 'react'
import '../footer.css'
import Logo from '../images/logowhite.svg'
import insoc from '../images/inocial.svg'
import facebook from '../images/faceboock.svg'
import twitter from '../images/twitter.svg'


export default function Footer() {

  return (
    <footer>
      <nav class="nav-section">
        <img src={Logo} className='logo' alt='logo' class="logo-footer" />
        <ul className="nav-footer">
          <li><a href="#">About us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Use Cases</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Web 2.0</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <div className="social">
          <img src={insoc}></img>
          <img src={facebook}></img>
          <img src={twitter}></img>
        </div>
      </nav>
      <div class="footer-conatctus">
        <div class="footer-text">
          <h4 class="footer-contact">Contact us:</h4>
          <p class="footer-paragraph">Email: info@positivus.com</p>
          <p class="footer-paragraph">Phone: 555-567-8901</p>
          <p class="footer-paragraph">Address: 1234 Main St <br></br>Moonstone City, Stardust State 12345</p>
        </div>
        <div class="footer-send">
          <div class="footer-center">
            <label for="email"></label>
            <br></br>
            <input type="email" id="email" name="email" placeholder="Email" class="footer-email" required />
            <button class="footer-subscribe">Subscribe to news</button>
          </div>
        </div>
      </div>
      <div class="footer-policy">
            <p class="footer-reserved">© 2023 Positivus. All Rights Reserved.</p>
            <a class="footer-privacy">Privacy Policy</a>
        </div>
    </footer>
  )
} 
