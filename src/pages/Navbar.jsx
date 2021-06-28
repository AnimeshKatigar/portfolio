import React, { useState } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [selected, setSelected] = useState(0);
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div className="navbarMainContainer">
      <nav>
        <a href="/" className="logo">
          Animesh
        </a>
        <div className="Hamburger" onclick={()=>setToggle(!toggle)}>
          <div className="Line"></div>
          <div className="Line"></div>
          <div className="Line"></div>
        </div>
        <ul className={!toggle ? "nav-active" : "nav-links"}>
          <li onClick={() => setSelected(0)}>
            <a
              href="/"
              className={
                selected == 0 && window.location.pathname == "/" && "active"
              }
            >
              Home
            </a>
          </li>
          <li onClick={() => setSelected(1)}>
            <a
              href="/"
              className={
                selected == 1 && window.location.pathname == "/" && "active"
              }
            >
              About
            </a>
          </li>
          <li onClick={() => setSelected(2)}>
            <a
              href="/project"
              className={
                selected == 2 ||
                (window.location.pathname == "/project" && "active")
              }
            >
              Work
            </a>
          </li>
          <li onClick={() => setSelected(3)}>
            <a
              href="/"
              className={
                selected == 3 && window.location.pathname == "/" && "active"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;


// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import "../styles/navbar.css";


// function NavBar() {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Container>
//         <Navbar.Brand href="/">
//           ANIMESH
//           {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             updateExpanded(expand ? false : "expanded");
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ml-auto" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
//                  Home
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 onClick={() => updateExpanded(false)}
//               >
//                 About
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/project"
//                 onClick={() => updateExpanded(false)}
//               >
               
//                 Projects
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/resume"
//                 onClick={() => updateExpanded(false)}
//               >
//                  Resume
//               </Nav.Link>
//             </Nav.Item>

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;
