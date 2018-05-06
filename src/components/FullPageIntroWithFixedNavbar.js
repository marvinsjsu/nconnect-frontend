import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, Container, Mask, View, Row, Col } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

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
        isWideEnough: false
      };
  this.onClick = this.onClick.bind(this);
}

onClick(){
  this.setState({
    collapse: !this.state.collapse
});
}

render() {
  const mainView = {background: `url(${mainBannerImage}) no-repeat center center`, backgroundSize: 'cover', height: '80vh'};
  const mainBackground = {background: `url(${mainBackgroundImage}) no-repeat center center`, backgroundSize: 'cover', height: '100vh'};
  const mainBackground2 = {background: `url(${cableMask}) no-repeat bottom right`, height: '94vh'};
  const logo = {padding: 0, margin: 0, width: 100, borderWidth: 2, borderColor: '#d6d7da'};
  const navbar = {width: 105, textAlign: 'center', borderRadius: 20};
  const cardStack = {display: 'flex'}
  const cards = {width: 300, margin: 20};
  const cardTitle = {color: 'blue'};
  const bannerLogo = {width: 100};
  const leftLogo = {width: 200, marginLeft: 10};
  const navLink = {color: '#11284c', fontWeight: '400', fontSize: 18};
  const mainStatement = {margin: 100, padding: 180, fontSize: 28};
  const mainStatement2 = {color: '#11284c', margin: 100, padding: 180, fontSize: 28};

    return (
          <div>
            <header>
              <Router>
                <Navbar color="white" dark expand="md" scrolling fixed="top">
                  <a href="#">
                    <img style={leftLogo} src={bigLogo} />
                  </a>
                      { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                  <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav right>
                      <NavItem style={navbar}>
                          <a style={navLink} href="#home">Home</a>
                      </NavItem>
                      <NavItem style={navbar}>
                          <a style={navLink} href="#team">Our Team</a>
                      </NavItem>
                      <NavItem style={navbar}>
                          <a style={navLink} href="#services">Services</a>
                      </NavItem>
                      <NavItem style={navbar}>
                          <a  style={navLink} href="#contact">Contact</a>
                      </NavItem>
                    </NavbarNav>
                  </Collapse>
                </Navbar>
              </Router>

          <View style={mainView}>
            <div id="home">
            <Mask overlay="black-strong" style={{flexDirection: 'column'}} className="flex-center  text-white text-center">
              <h1>Consistent Quality</h1>

            </Mask>
            </div>
          </View>
        </header>

        <main>
          <View style={mainBackground2}>
            <div id="team">
            <Mask overlay="transparent" style={{flexDirection: 'column'}} className="flex-center  text-white text-center">
              <p className="text-left" style={mainStatement2}>
                Nconnect is a specialist in the design, installation
                and maintenance of voice, security and data cabling.
                Whether you are looking for just one additional outlet
                or a large scale project, we can help.
                We’re a team of perfectionists with years of experience
                and we’ll make sure your data cabling installation
                completely meets your specification and is carried out professionally.
                <br/><br/>
                Choose from a wide range of data cabling solutions, from one-off
                cabling projects to ongoing network infrastructure support.
              </p>
            </Mask>
            </div>
          </View>
          <View style={mainBackground}>
            <div id="services"></div>
            <Mask overlay="black-strong" className="flex-center  text-white text-center">
              <View style={cardStack}>
              <div className="d-flex flex-wrap justify-content-center">
                <div className="p-2">
                <Card style={cards} cascade>
                    <CardImage className="img-fluid" src={cardImage1} />
                    <CardBody>
                        <CardTitle style={cardTitle}>Network Cabling</CardTitle>
                        <CardText>
                          Wire Additons, Fiber Optic Installation, Fiber Optic Fusion spicing, Fiber Optic OTDR Testing,
                          Upgrading Existing Systems, Wire & Cable Relocation, Patch Panel Terminations, Cat 6 Wiring,
                          Wire Identification and Labeling, Post Work Documentation, Line Testing
                        </CardText>
                        <Button href="#">More</Button>
                    </CardBody>
                </Card>
                </div>

                <div className="p-2">
                <Card style={cards} cascade>
                    <CardImage className="img-fluid" src={cardImage2} />
                    <CardBody>
                        <CardTitle style={cardTitle}>Design and Build</CardTitle>
                        <CardText>
                          Telecommunications & Equipment Rooms, Ladder Rack & Cable Tray Installation, Cable Management, Voice and
                          Data Projects, Colocation build out and Data Center deployment<br/>
                          If your business, organization or company requires a customized
                          structured cabling installation or fiber optic design please
                          feel free to contact us for your Free Site Survey!
                        </CardText>
                        <Button href="#">More</Button>
                    </CardBody>
                </Card>
                </div>

                <div className="p-2">
                <Card style={cards} cascade>
                    <CardImage className="img-fluid" src={cardImage3} />
                    <CardBody>
                        <CardTitle style={cardTitle}>Voice and data</CardTitle>
                        <CardText>
                          Converged networks and VoIP services – integrating voice, data and video communications (wired or wireless).
                          Wireless installation and network design: access point, WiFi, RFID, WLAN, Broadband
                          Wireless / WiFi, WiMax, Point to Point / Point to Multi-Point Wireless, WiFi Hotspots and more.
                        </CardText>
                        <Button href="#">More</Button>
                    </CardBody>
                </Card>
                </div>

                <div className="p-2">
                <Card style={cards} cascade>
                    <CardImage className="img-fluid" src={cardImage4} />
                    <CardBody>
                        <CardTitle style={cardTitle}>Existing Cabling Systems</CardTitle>
                        <CardText>
                          Point of sales (POS) systems installation.
                          Cabling for paging systems and security networks: security camera video surveillance CCTV systems.
                        </CardText>
                        <Button href="#">More</Button>
                    </CardBody>
                </Card>
                </div>
              </div>
              </View>
            </Mask>
        </View>
        </main>
      </div>
    );
  }
}

export default FullPageIntroWithFixedNavbar;