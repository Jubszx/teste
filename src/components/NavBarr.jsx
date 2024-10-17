import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBarr = () => {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/login">Julias</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cadastroProduto"> Cadastro Produto</Nav.Link>
            <Nav.Link href="/produto">Produto</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  )
}

export default NavBarr