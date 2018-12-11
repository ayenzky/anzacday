import React, {Component} from 'react'
import Recaptcha from 'react-google-recaptcha'
import { Link } from 'gatsby'
import Layout from '../components/layout'
// import {Col, Row} from 'react-bootstrap'
import './pages.css'

const RECAPTCHA_KEY = "6Lf8CoAUAAAAAI3mIxwo_kEL4X06djUMGpjhfHP1";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

      handleRecaptcha = value => {
        this.setState({ "g-recaptcha-response": value });
      };
    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": form.getAttribute("name"),
            ...this.state
          })
        })
          .then(() => Link(form.getAttribute("action")))
          .catch(error => alert(error));
      };
    render () {
        return (
        <Layout pageTitle='Contact Us'>
            <h2>test</h2>
            <form 
                name="contact" 
                method="post" 
                action="/thank-you" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
                onSubmit={this.handleSubmit}
                >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="form-group mb-3">
              <label for="validationCustom01">Name</label>
              <input type="text" className="form-control" id="validationCustom01" name="Name" required />
            </div>
            <div className="form-group mb-3">
              <label for="validationCustom02">Address</label>
              <input type="text" className="form-control" id="validationCustom02" name="Address" />
            </div>
            <div className="form-group mb-3">
              <label for="validationCustom03">Contact No.</label>
              <input type="text" className="form-control" id="validationCustom03" name="Contact No." />
            </div>
            <div className="form-group mb-3">
              <label for="validationCustom04">Email</label>
              <input type="email" className="form-control" id="validationCustom04" name="Email" />
            </div>
            <div className="form-group mb-3">
              <label for="validationCustom05">Message</label>
              <textarea className="form-control" id="validationCustom05" name="Message" rows="3"></textarea>
            </div>
            <div className="form-group mb-3">
                <Recaptcha
                    ref="recaptcha"
                    sitekey={RECAPTCHA_KEY}
                    onChange={this.handleRecaptcha}
                />
            </div>
            <button className="_submit" type="submit">Submit form</button>
            </form>
        </Layout>
    )

    }
    
}

// export default () => (


//     <Layout pageTitle='Contact Us'>
//     <ul className='d-flex list-unstyled breadcrumbs mb-5'>
//       <li className='bread-link'><Link to='/'>Home</Link></li>
//       <li className='bread-link'><Link to='/contact-us'>Contact Us</Link></li>
//     </ul>
//     <Row>
//     <Col xs={12}>
//         <p><strong>Postal Address:</strong> ADCC PO Box 3246 STAFFORD DC QLD 4053<br/>21 Wolverhampton Street STAFFORD QLD 4053</p>
//         <p><strong>Office Hours:</strong> (Monday – Friday 9.00am – 4.00pm)</p>
//         <p><strong>Telephone:</strong> 07 3263 7118</p>
//         <p><strong>Fax:</strong> 07 3175 0608</p>
//         <p><strong>Email:</strong> <a href="mailto:office.adcc@anzacday.org.au">office.adcc@anzacday.org.au</a></p>
//         <h3>We love getting emails but ...Why some emails do not receive a reply.</h3>
//         <p>The ANZAC Day Commemoration Committee members are mostly volunteers who are stretched to the limit during the weeks leading up to ANZAC Day. We receive lots of emails and we make every effort to respond appropriately to those which contain what we believe are fair requests for help.</p>
//         <p><strong>We will not respond to requests that:</strong></p>
//         <ul>
//             <li>are discourteous</li>
//             <li>request information that is easily found on our site by using the site search engine</li>
//             <li>request information we may not have included on the site but which is readily found in other sources.</li>
//         </ul>
//         <h4>Please note</h4>
//         <p><strong>We do not have a database that will provide the following information:</strong></p>
//         <ul>
//             <li>service records or photos of veterans<br/>for this information for WW1 veterans we suggest you try:<br/><a href="http://www.pitt.edu/~pugachev/greatwar/information.htm">http://www.pitt.edu/~pugachev/greatwar/information.htm</a></li>
//             <li>details of ex-service associations</li>
//             <li>information on dawn services and ANZAC marches (please contact your local RSL or organising committee).</li>
//         </ul>
//         <p>We welcome comments on our site. Please advise us if you find any mistakes.</p>
//         <p><strong>Note:</strong> Please address all correspondence to the Honorary Secretary.</p>
//         <p>You can also reach us by fill out the form below.</p>
//         <form name="contact" method="post" action="/thank-you" data-netlify="true" data-netlify-honeypot="bot-field">
//         <input type="hidden" name="form-name" value="contact" />
//         <input type="hidden" name="bot-field" />
//         <div className="form-group mb-3">
//           <label for="validationCustom01">Name</label>
//           <input type="text" className="form-control" id="validationCustom01" name="Name" required />
//         </div>
//         <div className="form-group mb-3">
//           <label for="validationCustom02">Address</label>
//           <input type="text" className="form-control" id="validationCustom02" name="Address" />
//         </div>
//         <div className="form-group mb-3">
//           <label for="validationCustom03">Contact No.</label>
//           <input type="text" className="form-control" id="validationCustom03" name="Contact No." />
//         </div>
//         <div className="form-group mb-3">
//           <label for="validationCustom04">Email</label>
//           <input type="email" className="form-control" id="validationCustom04" name="Email" />
//         </div>
//         <div className="form-group mb-3">
//           <label for="validationCustom05">Message</label>
//           <textarea className="form-control" id="validationCustom05" name="Message" rows="3"></textarea>
//         </div>
//         <button className="_submit" type="submit">Submit form</button>
//         </form>
//     </Col>
//     </Row>
//   </Layout>

    
//     )
  
  
