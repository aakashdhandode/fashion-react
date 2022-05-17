
// import React, { useState } from "react";
//  import { Container, Navbar, Nav } from "react-bootstrap";
//  import { Link } from "react-router-dom";

// function MegaMenu() {
//   const [active, setActive] = useState("home");
//   return (
//     <div>
//       <Navbar  expand="lg">
//         <Container>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//             <Nav
//               className="ms-auto sub-nav"
//               activeKey={active}
//               onSelect={(selectedKey) => setActive(selectedKey)}
//             >
//                     <Nav.Item>
//                     <Nav.Link eventKey="/home"  as={Link}>Home</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                      <Nav.Link eventKey="/"  to="/">Men</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                      <Nav.Link eventKey="/"  to="/">Kids</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                      <Nav.Link eventKey="/"  to="/">Bridal</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                      <Nav.Link eventKey="/"  to="/">Accessories</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                      <Nav.Link eventKey="/"  to="/">Collection</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                      <Nav.Link eventKey="/"  to="/">Celebrity</Nav.Link>
//                   </Nav.Item>
//                 </Nav>
//             </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   )
// }

// export default MegaMenu
import React, { useState } from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
import './header.css'
import { Link } from "react-router-dom";

const MegaMenu = () => {
  const [active, setActive] = useState("home");
  return (
    <div>

<Navbar collapseOnSelect expand="lg">
        <Container>
      
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="m-auto sub-nav"
              activeKey={active}
              onSelect={(selectedKey) => setActive(selectedKey)}
            >
              <Nav.Item>
                <Nav.Link eventKey="home" as={Link} to="/">
                  Men
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="aboutus" as={Link} to="/about">
               Women
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="aboutus" as={Link} to="/about">
                Kids
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="aboutus" as={Link} to="/about">
                Bridal
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="aboutus" as={Link} to="/about">
               Accessories
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="aboutus" as={Link} to="/about">
              Collection
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="aboutus" as={Link} to="/about">
               Celebrity
                </Nav.Link>
              </Nav.Item>
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MegaMenu