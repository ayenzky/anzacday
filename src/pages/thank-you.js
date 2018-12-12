import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import {Col, Row} from 'react-bootstrap'
import './pages.css'

export default () => (  
  <Layout pageTitle='Thank You'>
    <ul className='d-flex list-unstyled breadcrumbs mb-5'>
      <li className='bread-link'><Link to='/'>Home</Link></li>
      <li className='bread-link'><Link to='/thank-you'>Thank You</Link></li>
    </ul>
    <Row>
    <Col xs={12}>
      <h2>Thanks for filling out our form!</h2>
      <p>We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members. Otherwise, we will reply by email as soon as possible.</p>
      <p><a href="/">Return Home</a></p>
    </Col>
    </Row>

  </Layout>
)