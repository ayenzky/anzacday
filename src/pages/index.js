import React from 'react'
import { Link } from 'gatsby'
import {Container, Row, Col} from 'react-bootstrap'
import Layout from '../components/layout'
import './index.css'

const IndexPage = () => (
  <Layout>
      <section id="welcome">
        <Container>
          <Row>
            <Col md={8} sm={6}>
              <div data-aos="fade-right" data-aos-once="true" className="content py-7 aos-init aos-animate">
                <h1 className="heading-1 text-dark-brown">Welcome to the ANZAC Day Commemoration Committee</h1>
                <p>ABN 46 457 412 054</p>
                <p>“ANZAC” was the name given to a combined force of First Australian Imperial Force and New Zealand Army troops who landed on Turkey’s Gallipoli Peninsula at around dawn on Sunday, the 25th day of April, 1915, barely nine months after the outbreak of World War I.</p>
                <p>Galvanised by the example of courage and sacrifice demonstrated on that bloody battlefield, on the 10th day of January 1916 a public meeting of Brisbane citizens voted unanimously to establish the ANZAC Day Commemoration Committee to lay the groundwork for a nationwide, solemn day of public remembrance on the first anniversary of the landings.</p>
                <p>On every 25th day of April for the past 100 years, “ANZAC Day” has been observed in Australia and New Zealand, becoming an honoured and sacred institution along the way.</p>
                <p>This site includes a host of information about the origins of ANZAC Day, the Spirit of ANZAC and gives an overview of the conflicts in which Australian Defence Force personnel have served in times of war and peace.</p>
                <p>We hope you will find something of value in the following pages and that you will join with us in continuing the tradition of honouring ANZAC Day.</p>
                <p>Be sure to like us on&nbsp;<Link to="https://www.facebook.com/anzacdaycommemorationcommitteeqld">Facebook</Link></p>
                <p>2018 Brisbane Dawn Service Programme available&nbsp;<Link to="http://main.anzacday.org.au/uploads/site_anzacday/pages/pdf/2018_Dawn_Servcie.pdf">here</Link></p>
              </div>
            </Col>
          </Row>
        </Container>
        <ul className="list-unstyled mb-0 d-flex flex-wrap" id="box-menu">
          <li data-aos="zoom-in" data-aos-duration="50" data-aos-once="true" className="bg-dark-brown aos-init aos-animate">
            <Link to="#"><img src="https://anzacday.sites.webriqs.com/img/online-shop-icon.png" alt=""/>Online Shop Including Catalogue</Link>
          </li>
          <li data-aos="zoom-in" data-aos-duration="100" data-aos-once="true" className="bg-light-brown aos-init aos-animate">
            <Link to="#"><img src="https://anzacday.sites.webriqs.com/img/about-ADDC.png" alt=""/>About the ADCC</Link>
          </li>
          <li data-aos="zoom-in" data-aos-duration="200" data-aos-once="true" className="bg-light-brown aos-init">
            <Link to="#"><img src="https://anzacday.sites.webriqs.com/img/school.png" alt=""/>School Orders and Information</Link>
          </li>
          <li data-aos="zoom-in" data-aos-duration="300" data-aos-once="true" className="bg-dark-brown aos-init">
            <Link to="#"><img src="https://anzacday.sites.webriqs.com/img/commemoration.png" alt=""/>Graves &amp; Memorials Grants Program</Link>
          </li>
          <li data-aos="zoom-in" data-aos-duration="400" data-aos-once="true" className="bg-dark-brown aos-init">
            <Link to="#"><img src="https://anzacday.sites.webriqs.com/img/services.png" alt=""/>ANZAC Service Schedule and Guides</Link>
          </li>
          <li data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="bg-light-brown aos-init">
            <Link to="#"><img src="https://anzacday.sites.webriqs.com/img/spirit.png" alt=""/>ANZAC Traditions Facts &amp; Folklore</Link>
          </li>
        </ul>
    </section>
    <section id="war-identity-education">
        <div id="war-identity-img"></div>
        <Container>
          <Row>
            <Col md={7} className="ml-md-auto aos-init aos-animate" data-aos="fade-left" data-aos-once="true">
              <div className="content">
                <h2>War &amp; Identity Education</h2>
                <p>The ADCC education site has a wealth of resources about Australia’s military history and heritage for teachers and students.</p>
                <p>These are at Early Childhood, Primary and Secondary levels.</p>
                <p>You can find what you are looking for by Themes, or Individual Wars.</p>
                <p>The list of relevant resources under the theme or war you select is colour-coded:</p>
                <ul className="list-unstyled d-flex legend flex-wrap">
                  <li className="pr-3 pb-3"><img className="mr-2" src="https://anzacday.sites.webriqs.com/img/ec.jpg" width="25" alt=""/>Early Childhood</li>
                  <li className="pr-3 pb-3"><img className="mr-2" src="https://anzacday.sites.webriqs.com/img/primary.jpg" width="25" alt=""/>Primary</li>
                  <li className="pr-3 pb-0"><img className="mr-2" src="https://anzacday.sites.webriqs.com/img/secondary.jpg" width="25" alt=""/>Secondary</li>
                </ul>
                <p>There is also a brief description for each resource.</p>
                <p>The description will:</p>
                <ul className="list-unstyled checked">
                  <li>Indicate a summary of the contents</li>
                  <li>Indicate if it is a Queensland related resource</li>
                  <li>Advise whether it is a *classroom-ready unit, or an *interactive resource, or *supplementary information about the topic</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="latest-news" className="section">
        <Container>
          <div className="intro">
            <h2>Latest News</h2>
          </div>
          <div data-aos="fade-up" data-aos-once="true" className="content blog-list aos-init aos-animate">
            <Row>
              <Col md={4} sm={6} className="mb-4">
                <div className="blog-lead">
                  <div className="blog-lead-img">
                    <img className="img-fluid" src="https://anzacday.sites.webriqs.com/img/blogthumb.png" alt=""/>
                  </div>
                  <div className="blog-lead-content mt-3">
                    <h4 className="mt-0">7News - ANZAC Day Commemoration Committee</h4>
                    <ul className="list-unstyled blog-list-created d-flex align-items-center justify-content-start">
                      <li><img src="https://anzacday.sites.webriqs.com/img/001-male.svg" alt=""/>Admin</li>
                      <li><img src="https://anzacday.sites.webriqs.com/img/002-clock-with-white-face.svg" alt=""/>Jan 21, 2016</li>
                    </ul>
                    <p>A highlight from Channel 7 about the ANZAC Day Commemoration Committee of Queensland - this was aired on the 10th January 2016</p>
                    <p className="readmore">
                      <Link to="#">Read More<img src="https://anzacday.sites.webriqs.com/img/arrow-pointing-to-right.svg" alt=""/></Link>
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4} sm={6} className="mb-4">
                <div className="blog-lead">
                  <div className="blog-lead-img text-center">
                    <img className="img-fluid" src="https://anzacday.sites.webriqs.com/img/blogthumb2.jpg" alt=""/>
                  </div>
                  <div className="blog-lead-content mt-3">
                    <h4 className="mt-0">ADCC 100 Year Celebration</h4>
                    <ul className="list-unstyled blog-list-created d-flex align-items-center justify-content-start">
                      <li><img src="https://anzacday.sites.webriqs.com/img/001-male.svg" alt=""/>Admin</li>
                      <li><img src="https://anzacday.sites.webriqs.com/img/002-clock-with-white-face.svg" alt=""/>Jan 21, 2016</li>
                    </ul>
                    <p>“On Sunday January 10th&nbsp;2016 ADCC hosted a function at the Old Museum for 100 VIP guests to celebrate the fact that the origins of ANZAC Day happened right here in Brisbane on January 10 1916..</p>
                    <p className="readmore">
                      <Link to="#">Read More<img src="https://anzacday.sites.webriqs.com/img/arrow-pointing-to-right.svg" alt=""/></Link>
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4} sm={6} className="mb-4">
                
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section id="anzac-day-student" className="section" style={{
        backgroundImage:'url(//res.cloudinary.com/dazemr1k4/image/upload/v1445928759/anzac/img/bgimg.jpg)',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center'}}>
        <Container>
          <Row>
            <Col md={9} className="mx-auto">
              <div className="content text-white text-center">
                <h3>The ANZAC Day Student Service</h3>
                <p>This solemn ceremony is conducted every year in Brisbane’s ANZAC Square prior to ANZAC Day from 10am and noon approximately. The 2016 event took place on Thursday, the 21st day of April, and several thousand Queensland school students took part.</p>
                <h3>The ANZAC Day Dawn Service</h3>
                <p>Every year on the 25th day of April, the ANZAC Day Dawn Service starts at 04:28am sharp at Brisbane’s Shrine of Remembrance, ANZAC Square, located between Ann and Adelaide Streets. All are welcome to attend.</p>
                <p className="learnmore d-flex"><Link to="#">Learn More</Link></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  </Layout>
)

export default IndexPage
