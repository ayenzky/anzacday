import React from 'react'
import { Link } from 'gatsby'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styl from './index.module.css'


const Sidebar = () => (
  <ul className="m-0 d-flex flex-wrap align-items-start" id={styl.boxSide}>
    <li className="bg-dark-brown">
      <Link to="/current-catalogue" title="online shop"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753799/online-shop-icon.png" height="53" alt="online shop"/>Online Shop Including Catalogue</Link>
    </li>
    <li className="bg-light-brown">
      <Link to="/about-us" title="about us"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753764/about-ADDC.png" height="53" alt="about ADCC"/>About the ADCC</Link>
    </li>
    <li className="bg-light-brown">
      <Link to="/adcc-merchandise-for-schools" title="adcc merchandise"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753721/school.png" height="53" alt="school orders"/>School Orders and Information</Link>
    </li>
    <li className="bg-dark-brown">
      <Link to="/commemoration-activities" title="commemoration activities"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753681/commemoration.png" height="53" alt="graves"/>Graves &amp; Memorials Grants Program</Link>
    </li>
    <li className="bg-dark-brown">
      <Link to="/service-activities" title="services activities"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753532/services.png" height="53" alt="ANZAC Services"/>ANZAC Service Schedule and Guides</Link>
    </li>
    <li className="bg-light-brown">
      <Link to="/the-spirit-of-anzac" title="spirit of ANZAC"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753248/spirit.png" height="53" alt="ANZAC traditions"/>ANZAC Traditions Facts &amp; Folklore</Link>
    </li>
  </ul>
)

export default Sidebar