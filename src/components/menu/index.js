import React, { Component } from 'react'
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
            <div id="nav-brand-side">
              <ul className="list-unstyled classification">
                <li>
                  <h5 className="mt-0 font-weight-light">Legend:</h5>
                </li>
                <li className="d-flex align-items-center">
                  <img src="https://anzacday.sites.webriqs.com/img/ec.jpg" alt=""/>
                  <span>Early Childhood</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="https://anzacday.sites.webriqs.com/img/primary.jpg" alt=""/>
                  <span>Primary</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="https://anzacday.sites.webriqs.com/img/secondary.jpg" alt=""/>
                  <span>Secondary</span>
                </li>
              </ul>
              <Nav className="d-flex flex-column main-nav mb-0 mt-4">
                <li className="menu-item"><Nav.Link href="/">Home</Nav.Link></li>
                <li className="menu-item"><Nav.Link href="/">About Us</Nav.Link></li>
                <NavDropdown title="Wars" id="basic-nav-dropdown">
                  <li className="dropdown-item ecps legends"><NavDropdown.Item className="ecps legends" href="#action/3.1">1899-1902 BOER WAR</NavDropdown.Item></li>
                  <NavDropdown.Divider className="mt-0" />
                  <NavDropdown alignRight title="1914-1918 WORLD WAR 1" id="basic-nav-dropdown">
                    <ul className="list-unstyled" aria-labelledby="navbarDropdown-1">
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/">WW1-General</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/">WW1-Gallipoli</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/">WW1-Western Front</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/">WW1-Middle East</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/">WW1-Home Front</Nav.Link>
                      </li>
                    </ul>
                  </NavDropdown>
                  <NavDropdown alignRight title="1939-1945 WORD WAR 2" id="basic-nav-dropdown">
                    <ul className="list-unstyled" aria-labelledby="navbarDropdown-1-2">
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/ww2-general">WW2-General</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/ww2-europe-middle-east">WW2-Europe/Middle East</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/ww2-asia-pacific">WW2-Asia/Pacific</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/ww2-prisoner-of-war">WW2-Prisoner of War</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/ww2-home-front">WW2-Home Front</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/1945-49-bcof-british-commonwealth-occupation-force-japan">1945-49 BCOF (British Commonwealth Occupation Force - Japan)</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/1950-1953-korea">1950-1953 Korea</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/1950-1960-malayan-emergency">1950-1960 Malayan Emergency</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/1964-1966-indonesia">1964-1966 Indonesia</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/1962-1972-vietnam">1962-1972 Vietnam</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/1990-1991-gulf">1990-1991 Gulf</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/2003-2006-iraq-2003">2003-2006 Iraq 2003</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/1947-2006-peacekeeping-general">1947-2006 Peacekeeping - General</Nav.Link>
                      </li>
                      <li className="dropdown-item ecps legends" role="menuitem">
                        <Nav.Link href="/1999-2000-peacekeeping-east-timor">1999-2000 Peacekeeping - East Timor</Nav.Link>
                      </li>
                    </ul>
                  </NavDropdown>
                </NavDropdown>
                <NavDropdown alignRight title="Themes" id="basic-nav-dropdown">
                  <ul className="list-unstyled" aria-labelledby="navbarDropdown2">
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Nav.Link href="/commemoration">Commemoration</Nav.Link>
                    </li>
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Nav.Link href="/heroes">Heroes</Nav.Link>
                    </li>
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Nav.Link href="/anzac-day">Anzac Day</Nav.Link>
                    </li>
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Nav.Link href="/women">Women</Nav.Link>
                    </li>
                    <li className="dropdown-item ps legends" role="menuitem">
                      <Nav.Link href="/community">Community</Nav.Link>
                    </li>
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Nav.Link href="/victoria-cross">Victoria Cross</Nav.Link>
                    </li>
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Nav.Link href="/family">Family</Nav.Link>
                    </li>
                    <li className="dropdown-item ps legends" role="menuitem">
                      <Nav.Link href="/memorials">Memorials</Nav.Link>
                    </li>
                  </ul>
                </NavDropdown>
                <NavDropdown alignRight title="Interactives" id="basic-nav-dropdown">
                  <ul className="list-unstyled" aria-labelledby="navbarDropdown3">
                    <li className="dropdown-item ps legends" role="menuitem">
                      <Nav.Link href="/last-voyage-of-ae2">Last Voyage of AE2</Nav.Link>
                    </li>
                    <li className="dropdown-item ps legends" role="menuitem">
                      <Nav.Link href="/charge-at-beersheba">Charge at Beersheba</Nav.Link>
                    </li>
                    <li className="dropdown-item ps legends" role="menuitem">
                      <Nav.Link href="/smithy-interactive">Smithy Interactive</Nav.Link>
                    </li>
                    <li className="dropdown-item p legends" role="menuitem">
                      <Nav.Link href="/who-am-i">Who Am I?</Nav.Link>
                    </li>
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Nav.Link href="/battle-casualties">Battle Casualties</Nav.Link>
                    </li>
                    <li className="dropdown-item ecps legends" role="menuitem">
                      <Nav.Link href="/infantryman">Infantryman</Nav.Link>
                    </li>
                    <li className="dropdown-item ecp legends" role="menuitem">
                      <Nav.Link href="/where-in-the-world">Where in the World?</Nav.Link>
                    </li>
                    <li className="dropdown-item ecp legends" role="menuitem">
                      <Nav.Link href="/checking-your-gear">Checking Your Gear</Nav.Link>
                    </li>
                    <li className="dropdown-item ecp legends" role="menuitem">
                      <Nav.Link href="/suitcase-treasure">Suitcase Treasure</Nav.Link>
                    </li>
                    <li className="dropdown-item ecp legends" role="menuitem">
                      <Nav.Link href="/anzac-puzzles">ANZAC Puzzles</Nav.Link>
                    </li>
                    <li className="dropdown-item ecp legends" role="menuitem">
                      <Nav.Link href="/uniforms-over-time">Uniforms Over Time</Nav.Link>
                    </li>
                    <li className="dropdown-item ecp legends" role="menuitem">
                      <Nav.Link href="/flying-the-flag">Flying the Flag</Nav.Link>
                    </li>
                    <li className="dropdown-item ecp legends" role="menuitem">
                      <Nav.Link href="/women-in-war">Women in War</Nav.Link>
                    </li>
                  </ul>
                </NavDropdown>
                <li className="menu-item" role="menuitem"><a className="menu-link" href="/">Education</a></li>
                <li className="menu-item" role="menuitem">
                  <Nav.Link href="/">Schools Orders &amp; Information</Nav.Link>
                </li>
                <li className="menu-item" role="menuitem">
                  <Nav.Link href="/">ANZAC Day Services</Nav.Link>
                </li>
                <li className="menu-item" role="menuitem">
                  <Nav.Link href="/">Poetry</Nav.Link>
                </li>
                <li className="menu-item" role="menuitem">
                  <Nav.Link href="/">Just Soldiers</Nav.Link>
                </li>
                <li className="menu-item" role="menuitem">
                  <Nav.Link href="/">Speeches</Nav.Link>
                </li>
                <li className="menu-item" role="menuitem">
                  <Nav.Link href="/">Annual ANZAC Day Ceremonies</Nav.Link>
                </li>
                <li className="menu-item" role="menuitem">
                  <Nav.Link href="/">The Spirit of ANZAC</Nav.Link>
                </li>
                <li className="menu-item" role="menuitem">
                  <Nav.Link href="/">Current Catalogue</Nav.Link>
                </li>
                <li className="menu-item" role="menuitem">
                  <Nav.Link href="/">Photo Gallery</Nav.Link>
                </li>
                <li className="menu-item" role="menuitem">
                  <Nav.Link href="/download-tips">Download Tips</Nav.Link>
                </li>
                <li className="menu-item" role="menuitem">
                  <Nav.Link href="/">Copying of Images</Nav.Link>
                </li>
                <li className="menu-item" role="menuitem">
                  <Nav.Link href="/news">Latest News</Nav.Link>
                </li>
                <li className="menu-item" role="menuitem">
                  <Nav.Link href="/">Shop</Nav.Link>
                </li>
                <li className="menu-item" role="menuitem">
                  <Nav.Link href="/">Contact Us</Nav.Link>
                </li>
              </Nav>
            </div>
          }
        >
          <h2 className="nav_handle hvr-ripple-out mb-0" onClick={() => this.onSetSidebarOpen(true)}>
            <img src='https://anzacday.sites.webriqs.com/img/menu-button.svg' alt='menu'/>
          </h2>
        </Sidebar>
      );
    }
}

