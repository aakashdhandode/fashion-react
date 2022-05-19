
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
                <Nav.Link eventKey="produts" as={Link} to="/products">
               Women
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="product" as={Link} to="/products">
                Kids
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="" as={Link} to="/">
                Bridal
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="" as={Link} to="/">
               Accessories
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="" as={Link} to="/">
              Collection
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="" as={Link} to="/">
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