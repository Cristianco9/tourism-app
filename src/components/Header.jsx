import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";

const Header = () => {
    const handleLogout = () => {
        console.log("Sesión cerrada");
        // Aquí se limpiara el token y redirigir al login
    };

    return (
        <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
            <Container>
                <Navbar.Brand href="/" className="fw-bold text-primary fs-4">
                    Vive Zarzal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-options" />
                <Navbar.Collapse id="navbar-options">
                    <Nav className="me-auto">
                        <Nav.Link href="#" className="fw-semibold">Inicio</Nav.Link>
                        <Nav.Link href="#">Experiencias</Nav.Link>
                        <Nav.Link href="#">Anunciantes</Nav.Link>
                    </Nav>
                    <div className="d-flex align-items-center gap-3">
                        <BsPersonCircle size={24} />
                        <span className="fw-medium">Juan Pérez</span>
                        <Button variant="outline-danger" size="sm" onClick={handleLogout}>
                            Cerrar sesión
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
