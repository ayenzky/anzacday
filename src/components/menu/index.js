import React, { Component } from 'react'
import { Link } from 'gatsby'
import {Nav, NavDropdown} from 'react-bootstrap'
import Sidebar from 'react-sidebar'
import './index.css'


export default class Menu extends Component {
  constructor(props) {
      super(props);
      this.state = {
        sidebarOpen: false

      };
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open});
    }

    render() {
      return (
        <Sidebar
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          pullRight={true}
          sidebarClassName="sidebarmenu"
          contentClassName="content"
          rootClassName="navigation float-right"
          styles={{ 
            sidebar: { 
              background: "#1c1d22",
              position: "fixed",
              width:"340px"
            }, 
            root: {position: "relative", overflow: 'visible'}, 
            content: {
              position: 'relative', 
              overflow: 'visible',
              cursor: 'pointer'
            } 
          }}
          sidebar={
            <div id="nav-brand-side" className="pb-4">
              <ul className="list-unstyled classification pl-0">
                <li>
                  <h5 className="mt-0 font-weight-light">Legend:</h5>
                </li>
                <li className="d-flex align-items-center">
                  <img src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539752757/ec.jpg" alt="early childhood"/>
                  <span>Early Childhood</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539752829/primary.jpg" alt="primary"/>
                  <span>Primary</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539752742/secondary.jpg" alt="secondary"/>
                  <span>Secondary</span>
                </li>
              </ul>
              <Nav className="d-flex flex-column main-nav w-100 mb-0 mt-4">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about-us">About Us</Link>
                <NavDropdown title="Wars" id="basic-nav-dropdown">
                  <div className="dropdown-item ecps legends">
                    <Link to="/1899-1902-boer-war" className="nav-link ecps legends">1899-1902 BOER WAR</Link>
                  </div>
                  <NavDropdown.Divider className="mt-0" />
                  <NavDropdown alignRight title="1914-1918 WORLD WAR 1" id="basic-nav-dropdown">
                    <ul className="list-unstyled pl-5" aria-labelledby="navbarDropdown-1">
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/ww1-general">WW1-General</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/ww1-gallipoli">WW1-Gallipoli</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/ww1-western-front">WW1-Western Front</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/ww1-middle-east">WW1-Middle East</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/ww1-home-front">WW1-Home Front</Link>
                      </li>
                    </ul>
                  </NavDropdown>
                  <NavDropdown alignRight title="1939-1945 WORD WAR 2" id="basic-nav-dropdown">
                    <ul className="list-unstyled pl-5" aria-labelledby="navbarDropdown-1-2">
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/ww2-general">WW2-General</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/ww2-europe-middle-east">WW2-Europe/Middle East</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/ww2-asia-pacific">WW2-Asia/Pacific</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/ww2-prisoner-of-war">WW2-Prisoner of War</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/ww2-home-front">WW2-Home Front</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/1945-49-bcof-british-commonwealth-occupation-force-japan">1945-49 BCOF (British Commonwealth Occupation Force - Japan)</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/1950-1953-korea">1950-1953 Korea</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/1950-1960-malayan-emergency">1950-1960 Malayan Emergency</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/1964-1966-indonesia">1964-1966 Indonesia</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/1962-1972-vietnam">1962-1972 Vietnam</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/1990-1991-gulf">1990-1991 Gulf</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/2003-2006-iraq-2003">2003-2006 Iraq 2003</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/1947-2006-peacekeeping-general">1947-2006 Peacekeeping - General</Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Link className="nav-link" to="/1999-2000-peacekeeping-east-timor">1999-2000 Peacekeeping - East Timor</Link>
                      </li>
                    </ul>
                  </NavDropdown>
                </NavDropdown>
                <NavDropdown alignRight title="Themes" id="basic-nav-dropdown">
                  <ul className="list-unstyled pl-5" aria-labelledby="navbarDropdown2">
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Link className="nav-link" to="/commemoration">Commemoration</Link>
                    </li>
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Link className="nav-link" to="/heroes">Heroes</Link>
                    </li>
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Link className="nav-link" to="/anzac-day">Anzac Day</Link>
                    </li>
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Link className="nav-link" to="/women">Women</Link>
                    </li>
                    <li className="dropdown-item ps legends" role="menuitem">
                      <Link className="nav-link" to="/community">Community</Link>
                    </li>
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Link className="nav-link" to="/victoria-cross">Victoria Cross</Link>
                    </li>
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Link className="nav-link" to="/family">Family</Link>
                    </li>
                    <li className="dropdown-item ps legends" role="menuitem">
                      <Link className="nav-link" to="/memorials">Memorials</Link>
                    </li>
                  </ul>
                </NavDropdown>
                <NavDropdown alignRight title="Interactives" id="basic-nav-dropdown">
                  <ul className="list-unstyled pl-5" aria-labelledby="navbarDropdown3">
                    <li className="dropdown-item ps legends" role="menuitem">
                      <Link className="nav-link" to="/last-voyage-of-ae2">Last Voyage of AE2</Link>
                    </li>
                    <li className="dropdown-item ps legends" role="menuitem">
                      <Link className="nav-link" to="/charge-at-beersheba">Charge at Beersheba</Link>
                    </li>
                    <li className="dropdown-item ps legends" role="menuitem">
                      <Link className="nav-link" to="/smithy-interactive">Smithy Interactive</Link>
                    </li>
                    <li className="dropdown-item p legends" role="menuitem">
                      <Link className="nav-link" to="/who-am-i">Who Am I?</Link>
                    </li>
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Link className="nav-link" to="/battle-casualties">Battle Casualties</Link>
                    </li>
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Link className="nav-link" to="/infantryman">Infantryman</Link>
                    </li>
                    <li className="dropdown-item ecp legends" role="menuitem">
                      <Link className="nav-link" to="/where-in-the-world">Where in the World?</Link>
                    </li>
                    <li className="dropdown-item ecp legends" role="menuitem">
                      <Link className="nav-link" to="/checking-your-gear">Checking Your Gear</Link>
                    </li>
                    <li className="dropdown-item ecp legends" role="menuitem">
                      <Link className="nav-link" to="/suitcase-treasure">Suitcase Treasure</Link>
                    </li>
                    <li className="dropdown-item ecp legends" role="menuitem">
                      <Link className="nav-link" to="/anzac-puzzles">ANZAC Puzzles</Link>
                    </li>
                    <li className="dropdown-item ecp legends" role="menuitem">
                      <Link className="nav-link" to="/uniforms-over-time">Uniforms Over Time</Link>
                    </li>
                    <li className="dropdown-item ecp legends" role="menuitem">
                      <Link className="nav-link" to="/flying-the-flag">Flying the Flag</Link>
                    </li>
                    <li className="dropdown-item ecp legends" role="menuitem">
                      <Link className="nav-link" to="/women-in-war">Women in War</Link>
                    </li>
                  </ul>
                </NavDropdown>
                
                  <Link className="nav-link" to="/history">History</Link>
                
                  <Link className="nav-link" to="/education">Education</Link>
                
                  <Link className="nav-link" to="/adcc-merchandise-for-schools">Schools Orders &amp; Information</Link>
                
                  <Link className="nav-link" to="/service-activities">ANZAC Day Services</Link>
                
                  <Link className="nav-link" to="/poetry">Poetry</Link>
                
                  <Link className="nav-link" to="/just-soldiers">Just Soldiers</Link>
                
                  <Link className="nav-link" to="/speeches">Speeches</Link>
                
                  <Link className="nav-link" to="/annual-anzac-day-ceremonies">Annual ANZAC Day Ceremonies</Link>
                
                  <Link className="nav-link" to="/the-spirit-of-anzac">The Spirit of ANZAC</Link>
                
                  <Link className="nav-link" to="/current-catalogue">Current Catalogue</Link>
                
                  <Link className="nav-link" to="/photo-gallery">Photo Gallery</Link>
                
                  <Link className="nav-link" to="/download-tips">Download Tips</Link>
                
                  <Link className="nav-link" to="/awm-images">Copying of Images</Link>
                
                  <Link className="nav-link" to="/anzac-news">Latest News</Link>
                
                  <a className="nav-link" href="https://shop.anzacday.org.au/" target="_blank" rel="noopener noreferrer">Shop</a>
                
                  <Link className="nav-link" to="/contact-us">Contact Us</Link>
                
              </Nav>
            </div>
          }
        >
          <h2 className="nav_handle hvr-ripple-out mb-0" onClick={() => this.onSetSidebarOpen(true)}>
            <img src='https://res.cloudinary.com/db6xmqefe/image/upload/v1539748353/menu-button.svg' alt='menu'/>
          </h2>
        </Sidebar>
      );
    }
}

