import { Navbar, Nav, Container, Button, Collapse } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    console.log("Sesión cerrada");
  };

  return (
    <Navbar bg={darkMode ? "dark" : "light"} expand="lg" className="shadow-sm mb-4">
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-primary fs-4">
          Vive Zarzal
        </Navbar.Brand>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbar-options"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          style={{ border: "none", background: "transparent" }}
        >
          <FaBars color={darkMode ? "#fff" : "#000"} size={24} />
        </button>
        <Collapse in={open}>
          <div className="navbar-collapse" id="navbar-options">
            <Nav className="me-auto">
              <Nav.Link href="#" className={`fw-semibold ${darkMode ? "text-white" : "text-dark"}`}>
                Servicios
              </Nav.Link>
              <Nav.Link href="#" className={`${darkMode ? "text-white" : "text-dark"}`}>
                Experiencias
              </Nav.Link>
              <Nav.Link href="#" className={`${darkMode ? "text-white" : "text-dark"}`}>
                Anunciantes
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center gap-3">
              <button
                className={`btn ${darkMode ? "btn-light" : "btn-dark"} btn-sm`}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
              </button>
              <BsPersonCircle size={24} />
              <span className="fw-medium">Juan Pérez</span>
              <Button variant="outline-danger" size="sm" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </div>
          </div>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
