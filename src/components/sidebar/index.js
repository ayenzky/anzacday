import React from 'react'
import { Link } from 'gatsby'
import './index.css'


const Sidebar = () => (
  <ul className="list-unstyled m-0 d-flex flex-wrap align-items-start" id="box-side">
    <li className="bg-dark-brown">
      <Link to="#"><img src="https://anzacday.sites.webriqs.com/img/online-shop-icon.png" alt="" />Online Shop Including Catalogue</Link>
    </li>
    <li className="bg-light-brown">
      <Link to="#"><img src="https://anzacday.sites.webriqs.com/img/about-ADDC.png" alt="" />About the ADCC</Link>
    </li>
    <li className="bg-light-brown">
      <Link to="#"><img src="https://anzacday.sites.webriqs.com/img/school.png" alt="" />School Orders and Information</Link>
    </li>
    <li className="bg-dark-brown">
      <Link to="#"><img src="https://anzacday.sites.webriqs.com/img/commemoration.png" alt="" />Graves &amp; Memorials Grants Program</Link>
    </li>
    <li className="bg-dark-brown">
      <Link to="#"><img src="https://anzacday.sites.webriqs.com/img/services.png" alt="" />ANZAC Service Schedule and Guides</Link>
    </li>
    <li className="bg-light-brown">
      <Link to="#"><img src="https://anzacday.sites.webriqs.com/img/spirit.png" alt="" />ANZAC Traditions Facts &amp; Folklore</Link>
    </li>
  </ul>
)

export default Sidebar