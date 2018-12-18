import React, { Component } from 'react'
// import Recaptcha from 'react-google-recaptcha'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import {Col, Row} from 'react-bootstrap'
import './pages.css'
// const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY ? process.env.SITE_RECAPTCHA_KEY : '6Lf8CoAUAAAAAI3mIxwo_kEL4X06djUMGpjhfHP1';

// function encode(data) {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }
export default class Contact extends Component {
  componentDidMount() {
    if (window) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://forms.webriq.com/js/initForms`
      const headScript = document.getElementsByTagName('script')[0]
      headScript.parentNode.insertBefore(script, headScript)
    }
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value });
  // };
  // handleRecaptcha = value => {
  //   this.setState({ "g-recaptcha-response": value });
  // };
  // handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.target;
  //   console.log(form);
  //   fetch("/contact-us?no-cache=1", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       "form-name": form.getAttribute("name"),
  //       ...this.state
  //     })
  //   }).then(() => navigateTo(form.getAttribute("action"))).catch(error => alert(error));
  // };
  render() {
    return (
      <Layout pageTitle='Contact Us' layoutClass='main-page'>
        <ul className='d-flex list-unstyled breadcrumbs mb-5'>
          <li className='bread-link'><Link to='/'>Home</Link></li>
          <li className='bread-link'><Link to='/contact-us'>Contact Us</Link></li>
        </ul>
        <Row>
        <Col xs={12}>
            <p><strong>Postal Address:</strong> ADCC PO Box 3246 STAFFORD DC QLD 4053<br/>21 Wolverhampton Street STAFFORD QLD 4053</p>
            <p><strong>Office Hours:</strong> (Monday – Friday 9.00am – 4.00pm)</p>
            <p><strong>Telephone:</strong> <a href="tel:0732637118" title="0732637118">07 3263 7118</a></p>
            <p><strong>Fax:</strong> <a href="tel:0731750608" title="0731750608">07 3175 0608</a></p>
            <p><strong>Email:</strong> <a href="mailto:office.adcc@anzacday.org.au">office.adcc@anzacday.org.au</a></p>
            <h3>We love getting emails but ...Why some emails do not receive a reply.</h3>
            <p>The ANZAC Day Commemoration Committee members are mostly volunteers who are stretched to the limit during the weeks leading up to ANZAC Day. We receive lots of emails and we make every effort to respond appropriately to those which contain what we believe are fair requests for help.</p>
            <p><strong>We will not respond to requests that:</strong></p>
            <ul>
                <li>are discourteous</li>
                <li>request information that is easily found on our site by using the site search engine</li>
                <li>request information we may not have included on the site but which is readily found in other sources.</li>
            </ul>
            <h4>Please note</h4>
            <p><strong>We do not have a database that will provide the following information:</strong></p>
            <ul>
                <li>service records or photos of veterans<br/>for this information for WW1 veterans we suggest you try:<br/><a href="http://www.pitt.edu/~pugachev/greatwar/information.htm">http://www.pitt.edu/~pugachev/greatwar/information.htm</a></li>
                <li>details of ex-service associations</li>
                <li>information on dawn services and ANZAC marches (please contact your local RSL or organising committee).</li>
            </ul>
            <p>We welcome comments on our site. Please advise us if you find any mistakes.</p>
            <p><strong>Note:</strong> Please address all correspondence to the Honorary Secretary.</p>
            <p>You can also reach us by fill out the form below.</p>
            <form name='Contact Form' method='POST' data-form-id="5c1747fa2713650ad743aaaa" webriq="true">
            <div className="form-group mb-3">
              <label>Name</label>
              <input className="form-control" type="text" name="Name"/>
            </div>
            <div className="form-group mb-3">
              <label>Address</label>
              <input className="form-control" type="text" name="Address"/>
            </div>
            <div className="form-group mb-3">
              <label>Contact No.</label>
              <input className="form-control" type="text" name="Contact No"/>
            </div>
            <div className="form-group mb-3">
              <label>Email</label>
              <input className="form-control" type="email" name="Email"/>
            </div>
            <div className="form-group mb-3">
              <label>Message</label>
              <textarea className="form-control" name="Message"/>
            </div>
            <div className="form-group mb-3">
              <div className="webriq-recaptcha"></div>
            </div>
            <div>
            <button className="_submit" type="submit">Submit form</button>
            </div>
            </form>
        </Col>
        </Row>
    </Layout>
    )
  }
}