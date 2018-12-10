import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import './index.css'

export default () =>
  <footer>
    <div id='footer'>
    <Container>
      <Row>
        <Col md={12} lg={6} className='mb-5'>
          <div className="intro mb-4">
            <h4 className="mt-0">ANZAC Day</h4>
          </div>
          <ul className="list-unstyled bottom-menu d-flex align-items-start flex-wrap flex-column flex-sm-row m-0">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/history">History</a></li>
              <li><a href="/education">Education</a></li>
              <li><a href="https://shop.anzacday.org.au/" target="_blank" rel="noopener noreferrer">Shop</a></li>
              <li><a href="/anzac-news">Latest News</a></li>
              <li><a href="/adcc-merchandise-for-schools">Schools Orders &amp; Information</a></li>
              <li><a href="/commemoration-activities">Graves &amp; Memorials Grants Program</a></li>
              <li><a href="/service-activities">ANZAC Day Services</a></li>
              <li><a href="/annual-anzac-day-ceremonies">Annual ANZAC Day Ceremonies</a></li>
              <li><a href="/just-soldiers">Just Soldiers</a></li>
              <li><a href="/speeches">Speeches</a></li>
              <li><a href="/the-spirit-of-anzac">The Spirit of Anzac</a></li>
              <li><a href="/current-catalogue">Current Catalogue</a></li>
              <li><a href="/digging">Book Support Page for Digging for Diggers</a></li>
              <li><a href="/useful-local-contacts-and-resources">Useful Local Contacts &amp; Resources</a></li>
              <li><a href="/gateway-to-hell">Gateway to Hell</a></li>
              <li><a href="/the-rising-sun-badge">The Rising Sun Badge</a></li>
              <li><a href="/photo-gallery">Photo Gallery</a></li>
              <li><a href="/download-tips">Download Tips</a></li>
              <li><a href="/awm-images">Copy of Images</a></li>
              <li><a href="contact-us">Contact Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms</a></li>
            </ul>
        </Col>
        <Col md={6} lg={4} className='mb-5'>
            <div className="intro mb-4">
              <h4 className="mt-0">Contact Details</h4>
            </div>
            <p>ADCC PO Box 3246 STAFFORD DC QLD 4053<br/>21 Wolverhampton Street STAFFORD QLD 4053</p>
            <ul className="list-unstyled mt-3 ml-0">
              <li>Tel.: 07 3263 7118</li>
              <li>Fax: 07 3175 0608</li>
              <li>Email:&nbsp;<a href="mailto:office.adcc@anzacday.org.au">office.adcc@anzacday.org.au</a></li>
            </ul>
            <h4>Openning Hours</h4>
            <p className='mb-0'>Monday - Friday</p>
            <p>9:00 am - 4:00 pm</p>
          </Col>
        <Col md={6} lg={2} className='mb-5'>
        <p>Gallipoli Roses Available to Purchase Here</p>
            <a href="https://www.treloarroses.com.au/index.php?route=product/product&product_id=11151&search=Gallipoli" target="_blank" rel="noopener noreferrer"><Image fluid src="https://res.cloudinary.com/db6xmqefe/image/upload/v1538377200/treloar_zqjhof.jpg"/></a>
            <p className="mt-4">
              <a href="https://www.facebook.com/anzacdaycommemorationcommitteeqld" target="_blank" rel="noopener noreferrer">
                <Image src="https://res.cloudinary.com/db6xmqefe/image/upload/v1538378894/facebook_e2subm.svg"/>
              </a>
            </p>
        </Col>
      </Row>
    </Container>
    </div>
    <div id='copyright' className="py-4">
      <Container>
        <p className="text-white mb-0">Copyright © {(new Date().getFullYear())} <a href="mailto:Office.adcc@anzacday.org.au">ANZAC Day Commemoration Committee (Queensland)</a>&nbsp;Incorporated.</p>
      </Container>
    </div>
  </footer>