import React from 'react'
import { Link } from 'gatsby'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {Container, Row, Col} from 'react-bootstrap'
import styl from './index.module.css'

export default () =>
  <footer>
    <div id={styl.footer}>
    <Container>
      <Row>
        <Col md={12} lg={6} className='mb-5'>
          <div className="intro mb-4">
            <h4 className="mt-0">ANZAC Day</h4>
          </div>
          <ul className={styl.bottomMenu + " list-unstyled d-flex align-items-start flex-wrap flex-column flex-sm-row m-0"}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="https://shop.anzacday.org.au/" target="_blank" rel="noopener noreferrer">Shop</Link></li>
              <li><Link to="/anzac-news">Latest News</Link></li>
              <li><Link to="/adcc-merchandise-for-schools">Schools Orders &amp; Information</Link></li>
              <li><Link to="/commemoration-activities">Graves &amp; Memorials Grants Program</Link></li>
              <li><Link to="/service-activities">ANZAC Day Services</Link></li>
              <li><Link to="/annual-anzac-day-ceremonies">Annual ANZAC Day Ceremonies</Link></li>
              <li><Link to="/just-soldiers">Just Soldiers</Link></li>
              <li><Link to="/speeches">Speeches</Link></li>
              <li><Link to="/the-spirit-of-anzac">The Spirit of Anzac</Link></li>
              <li><Link to="/current-catalogue">Current Catalogue</Link></li>
              <li><Link to="/digging">Book Support Page for Digging for Diggers</Link></li>
              <li><Link to="/useful-local-contacts-and-resources">Useful Local Contacts &amp; Resources</Link></li>
              <li><Link to="/gateway-to-hell">Gateway to Hell</Link></li>
              <li><Link to="/the-rising-sun-badge">The Rising Sun Badge</Link></li>
              <li><Link to="/photo-gallery">Photo Gallery</Link></li>
              <li><Link to="/download-tips">Download Tips</Link></li>
              <li><Link to="/awm-images">Copy of Images</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
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
            <a href="https://www.treloarroses.com.au/index.php?route=product/product&product_id=11151&search=Gallipoli" target="_blank" rel="noopener noreferrer" title="Gallipoli Roses"><LazyLoadImage className="img-fluid" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1538377200/treloar_zqjhof.jpg" alt="Gallipoli Roses"/></a>
            <p className="mt-4">
              <a href="https://www.facebook.com/anzacdaycommemorationcommitteeqld" target="_blank" rel="noopener noreferrer" title="facebook">
                <LazyLoadImage src="https://res.cloudinary.com/db6xmqefe/image/upload/v1538378894/facebook_e2subm.svg" alt="facebook"/>
              </a>
            </p>
        </Col>
      </Row>
    </Container>
    </div>
    <div id={styl.copyright} className="py-4">
      <Container>
        <p className="text-white mb-0">Copyright © {(new Date().getFullYear())} <a href="mailto:Office.adcc@anzacday.org.au">ANZAC Day Commemoration Committee (Queensland)</a> Incorporated. - All Rights Reserved - Designed by&nbsp;<a href="https://www.webriq.services/" title="WebriQ Goes Mad" rel="noopener noreferrer" target="_blank">WebriQ Goes Mad</a> - Powered by&nbsp;<a href="https://www.webriq.com/" title="webriq" rel="noopener noreferrer" target="_blank">WebriQ</a></p>
      </Container>
    </div>
  </footer>