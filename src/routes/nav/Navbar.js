import React from 'react';
import { Button, ButtonGroup, Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { SearchForm, NavBarBrand, NavBarBrandDiv } from '../../assets/css/navjs'
import '../../assets/css/nav.css'
import bot from '../../assets/images/bot.svg'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="container-fluid" >
        <div className="wrapperLogoMenu">
          <div className="navbarLogo">
            <img src={bot} className="App-logo" alt="logo" />
          </div>
          <div className="navbarMenu">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Dropdown as={Nav}>
                {/* <Dropdown.ItemText menuVariant="dark" id="primary-dropdown" >Manage</Dropdown.ItemText> */}
                <Dropdown id="dropdown-home">
                  <Dropdown.Item as={NavDropdown.Item} id="dropdown-item-home" href="/">Home</Dropdown.Item>
                </Dropdown>
                <Dropdown.Toggle split variant="dark" id="dropdown-split-basic">
                  {/* <p id="dropdown-toggle-title" > */}
                    <Nav.Link id="nav-link-home" href="/"></Nav.Link>
                  {/* </p> */}
                </Dropdown.Toggle>
                <Dropdown.Menu as={Navbar.Menu} menuVariant="dark">
                  <Dropdown.ItemText as={NavDropdown.ItemText} id="dropdown-item-text" menuVariant="dark">Manage</Dropdown.ItemText>
                    <Dropdown.Divider className="dropdown-divider" />
                    <Dropdown as={NavDropdown} title="Projects" id="secondary-dropdown" className="basic-nav-dropdown" menuVariant="dark">
                      <Dropdown.Item as={NavDropdown.Item} href="/project">Project Editor</Dropdown.Item>
                      <Dropdown.Item as={NavDropdown.Item} href="/">Close Project</Dropdown.Item>
                      <Dropdown.Item as={NavDropdown.Item} href="/">View Project Details</Dropdown.Item>
                    </Dropdown>
                    <Dropdown as={NavDropdown} title="Modules" id="secondary-dropdown" className="basic-nav-dropdown" menuVariant="dark">
                      <Dropdown.Item as={NavDropdown.Item} href="/module">Module Editor</Dropdown.Item>
                      <Dropdown.Item as={NavDropdown.Item} href="/">Close Module</Dropdown.Item>
                      <Dropdown.Item as={NavDropdown.Item} href="/">View Module Details</Dropdown.Item>
                    </Dropdown>
                    <Dropdown as={NavDropdown} title="Campaigns" id="secondary-dropdown" className="basic-nav-dropdown" menuVariant="dark">
                      <Dropdown.Item as={NavDropdown.Item} href="/campaign">Campaign Editor</Dropdown.Item>
                      <Dropdown.Item as={NavDropdown.Item} href="/">Close Campaign</Dropdown.Item>
                      <Dropdown.Item as={NavDropdown.Item} href="/">View Campaign Details</Dropdown.Item>
                    </Dropdown>
                </Dropdown.Menu>
                <Dropdown id="dropdown-component-editor">
                  <Dropdown.Item as={NavDropdown.Item} id="dropdown-item-component-editor" href="/componentEditor">Component Editor</Dropdown.Item>
                </Dropdown>
              </Dropdown>
            </Navbar.Collapse>
          </div>
        </div>
        <div id="navbarBrandDiv" className="navbarBrand">
          <Navbar.Brand href="/">Module Maker</Navbar.Brand>
          <Navbar.Text href="/">for Fantasy Grounds Unity</Navbar.Text>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavBar;
