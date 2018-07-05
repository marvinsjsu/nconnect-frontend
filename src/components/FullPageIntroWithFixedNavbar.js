import React, { Component } from 'react';
import
  {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink,
    Fa,
    Container,
    Mask,
    View,
    Row,
    Col
  } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, ListGroup, ListGroupItem } from 'mdbreact';

import NConnectLogo from '../images/Nconnect-Logo-B1.png';
import mainBannerImage from '../images/datacenter1.jpg';
import mainBackgroundImage from '../images/network-cables-494648_1920.jpg';
import bigLogo from '../images/logo.svg';
import cableMask from '../images/ethernet_cables.jpeg';
import cardImage1 from '../images/cabling_banner.png';
import cardImage2 from '../images/infra_design.png';
import cardImage3 from '../images/ethernet_fiber_light.jpg';
import cardImage4 from '../images/pos_design.png';

class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        collapse: false,
        isWideEnough: false,
        page: 'home',
      };

    this.onClick = this.onClick.bind(this);
    this.navClick = this.navClick.bind(this);
  }

  onClick(){
    this.setState({
      collapse: !this.state.collapse
    });
  }

  navClick(currentPage){
    console.log(currentPage);
    this.setState({
      page: currentPage,
    });
  }

  render() {

    const mainView = {
      background: `url(${mainBannerImage}) no-repeat center center`,
      backgroundSize: 'cover',
      height: '80vh'
    };

    // const mainBackground = {
    //   background: `url(${mainBackgroundImage}) no-repeat bottom center`,
    //   backgroundSize: 'cover',
    //   height: '100vh'
    // };

    const mainBackground2 = {
      height: '100vh',
    };

    const logo = {padding: 0, margin: 0, width: 100, borderWidth: 2, borderColor: '#d6d7da'};
    const navbar = {width: 105, textAlign: 'center', borderRadius: 20};
    const cardStack = {display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}
    const cards = {width: 300, height: 550, margin: 20};
    const cardsAlt = {width: 300, height: 500, margin: 20, marginTop: 100};
    const singleCard = {width: '90%', margin: 20};
    const cardImage = {minHeight: 225};
    const cardTitle = {color: '#2386C3', textAlign: 'center'};
    const cardText = {textAlign: 'left', fontSize: 16};
    const list = {listStyle: 'none', padding: 0, textAlign: 'left'};
    const bannerLogo = {width: 100};
    const leftLogo = {width: 200, marginLeft: 10};
    const navLink = {color: '#11284c', fontWeight: '400', fontSize: 18};
    const navLinkActive = {color: '#2386C3', fontWeight: '700', fontSize: 20};
    const mainStatement = {color: '#11284c', margin: 100, padding: 20, fontSize: 28};
    const aboutUs = {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    };

    const aboutUsText = {
      background: `url(${cardImage4}) no-repeat left center`,
      backgroundSize: '300px',
      height: '100vh',
      fontSize: 25,
      fontFamily: 'Helvetica',
      color: '#2386C3',
      textAlign: 'left',
    };

    const bannerImage = {
      width: '50%',
    };

    const mainContainer = {
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
      margin: 0,
    };

    const homeBanner = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignItems: 'center',
      alignContent: 'space-between',
      minHeight: '100vh',
      margin: 0,
      backgroundColor: '#e3f2fd',
      paddingTop: '70px',
    };

    const servicesBanner = {
      minHeight: '100vh',
      paddingTop: '7%',
      marginTop: '50px',
    };

    const contactSection = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignItems: 'center',
      alignContent: 'space-between',
      minHeight: '100vh',
      margin: 0,
      backgroundColor: '#e3f2fd',
    };

    const homeBannerImage = {
      width: '50%',
      minWidth: 350,
      paddingBottom: '5%',
      paddingLeft: '5%',
      margin: 0,

    };

    const homeBannerText = {
      width: '50%',
      minWidth: 350,
      paddingBottom: '5%',
      paddingRight: '5%',
      margin: 0,
      fontSize: 26,
      fontFamily: 'Helvetica',
      textAlign: 'left',
      color: '#2386C3',

    };

    const contactCard = {
      padding: '10px',
    };

    const contactForm = {
      width: 500,
      minHeight: 500,
    };

    const contactText = {
      display: 'flex',
      alignItems: 'flex-start',
      width: '50%',
      minWidth: 350,
      paddingBottom: '5%',
      paddingRight: '5%',
      margin: 0,
      fontSize: 26,
      fontFamily: 'Helvetica',
      textAlign: 'left',
      color: '#2386C3',
    };

    return (
      <div className="container-fluid" style={mainContainer}>
        <header>
          <Router>
            <Navbar color="white" dark expand="md" scrolling fixed="top">
              <a
                href="#"
                onClick={() => (this.navClick('home'))}
              >
                <img style={leftLogo} src={bigLogo} />
              </a>
                  { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
              <Collapse isOpen = { this.state.collapse } navbar>
                <NavbarNav right>
                  <NavItem style={navbar}>
                      <a
                        style={this.state.page == 'home' ? navLinkActive : navLink }
                        href="#home"
                        onClick={() => (this.navClick('home'))}
                      >
                        Home
                      </a>
                  </NavItem>
                  <NavItem style={navbar}>
                      <a
                        style={this.state.page == 'services' ? navLinkActive : navLink }
                        href="#services"
                        onClick={() => (this.navClick('services'))}
                      >
                        Services
                      </a>
                  </NavItem>
                  <NavItem style={navbar}>
                      <a
                        style={this.state.page == 'contact' ? navLinkActive : navLink }
                        href="#contact"
                        onClick={() => (this.navClick('contact'))}
                      >
                        Contact Us
                      </a>
                  </NavItem>
                </NavbarNav>
              </Collapse>
            </Navbar>
          </Router>
        </header>

        <div id='home' style={homeBanner}>
            <img src={cardImage4} style={homeBannerImage}/>
            <p className="text-lg-left font-weight-normal" style={homeBannerText}>
              We are specialists in the design, installation
              and maintenance of voice, security and data cabling.
              Whether you are looking for just one additional outlet
              or a large scale project, we can help. <br/><br/>
              We’re a team of perfectionists with years of experience
              and we’ll make sure your data cabling installation
              completely meets your specification and is carried out professionally.

            </p>
        </div>

        <div id='services' style={servicesBanner}>
            <View style={cardStack}>
              <Card style={cards} cascade>
                  <CardImage style={cardImage} className="img-fluid" src={cardImage1} />
                  <CardBody>
                      <CardTitle style={cardTitle}>Network Cabling</CardTitle>
                      <CardText style={cardText}>
                        <dl style={list}>
                          <dd>Fiber Optic Installation, Fiber Optic Fusion splicing, Fiber Optic OTDR Testing</dd>
                          <dd>Wire Additions, Wire & Cable Relocation, Patch Panel Terminations, Cat 6 Wiring</dd>
                          <dd>
                            Cabling for paging systems and security networks: security camera
                            video surveillance CCTV systems
                          </dd>
                        </dl>
                      </CardText>
                  </CardBody>
              </Card>

              <Card style={cardsAlt} cascade>
                  <CardImage style={cardImage} className="img-fluid" src={cardImage2} />
                  <CardBody>
                      <CardTitle style={cardTitle}>Design and Build</CardTitle>
                      <CardText style={cardText}>
                        <dl style={list}>
                          <dd>Telecommunications & Equipment Rooms, Ladder Rack & Cable Tray Installation, Cable Management</dd>
                          <dd>Voice and Data Projects, Colocation build out and Data Center deployment</dd>
                        </dl>
                      </CardText>
                  </CardBody>
              </Card>

              <Card style={cards} cascade>
                  <CardImage  style={cardImage}style={cardImage} className="img-fluid" src={cardImage3}  />
                  <CardBody>
                      <CardTitle style={cardTitle}>Voice and data</CardTitle>
                      <CardText style={cardText}>
                        <dl style={list}>
                          <dd>
                            Converged networks and VoIP services – integrating voice,
                            data and video communications (wired or wireless)
                          </dd>
                          <dd>
                            Wireless installation and network design: access point, WiFi, RFID, WLAN, Broadband
                          </dd>
                          <dd>
                            Wireless / WiFi, WiMax, Point to Point / Point to Multi-Point Wireless,
                            WiFi Hotspots and more
                          </dd>
                        </dl>
                      </CardText>
                  </CardBody>
              </Card>

              <Card style={cardsAlt} cascade>
                  <CardImage style={cardImage} className="img-fluid" src={cardImage4}  />
                  <CardBody>
                      <CardTitle style={cardTitle}>Existing Cabling Systems</CardTitle>
                      <CardText style={cardText}>
                        <dl style={list}>
                          <dd>
                            Upgrading Existing Systems, Wire Identification and Labeling
                          </dd>
                          <dd>
                            Post Work Documentation, Line Testing
                          </dd>
                          <dd>Point of sales (POS) systems installation</dd>
                        </dl>
                      </CardText>
                  </CardBody>
              </Card>
            </View>
        </div>

        <div id='contact' style={contactSection}>
          <p className="text-lg-left font-weight-normal" style={contactText}>
            Choose from a wide range of data cabling solutions, from one-off
            cabling projects to on-going network infrastructure support.<br/><br/>
            Contact us for a free quote.
          </p>
          <Card style={contactCard}>
            <form style={contactForm}>
              <label htmlFor="defaultFormContactNameEx" className="grey-text">Your name</label>
              <input type="text" id="defaultFormContactNameEx" className="form-control"/>
              <br/>
              <label htmlFor="defaultFormContactEmailEx" className="grey-text">Your email</label>
              <input type="email" id="defaultFormContactEmailEx" className="form-control"/>
              <br/>
              <label htmlFor="defaultFormContactMessageEx" className="grey-text">Your message</label>
              <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="8"></textarea>
              <div className="text-center mt-4">
                <button className="btn btn-outline-warning" type="submit">Send<i className="fa fa-paper-plane-o ml-2"></i></button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    );
  }
}

export default FullPageIntroWithFixedNavbar;