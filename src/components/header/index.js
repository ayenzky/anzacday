import React from 'react'
import { Link } from 'gatsby'
import {Container, Row, Col} from 'react-bootstrap'
import Menu from '../menu'

const Header = () => (
  <div className='menu'>
      <Container>
        <Row className='align-items-center'>
          <Col sm={6} xs={3}>
            <Link to='/'>
              <img className='d-none d-md-block' src='https://anzacday.sites.webriqs.com/img/logo.png' alt='anzac day commemoration committee'/>
              <img className='d-block d-md-none' src='https://anzacday.sites.webriqs.com/img/logo-small.png' alt='anzac day commemoration committee'/>
            </Link>
          </Col>
          <Col sm={6} xs={9}>
            <Menu/>
          </Col>
        </Row>
      </Container>
    </div>
)

export default Header