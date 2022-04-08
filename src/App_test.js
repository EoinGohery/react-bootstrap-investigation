
import './App.css';
import { Button, Alert, Accordion, Modal, Carousel, Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    
    return (
      setShowModal(false)
    )
  }

  const [users, setUssers] = useState([
    { id: 1, name: "Alice", email: "alice@gmail.com", active: true },
    { id: 2, name: "Tom", email: "tom@gmail.com", active: true },
    { id: 3, name: "Bob", email: "bob@gmail.com", active: true },
  ])

  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <br></br>

      <Button variant='danger'
        onClick={() => setShow(true)}>Press Me
      </Button>

      <br />
      {show &&
        <Alert
          variant='warning'
          dismissible={true}
          onClose={() => { setShow(false) }}>
          This is an Alert
        </Alert>
      }

      <Button variant='danger'
        onClick={() => setShowModal(true)}>Press Me
      </Button>

      { showModal &&
        <Modal show={showModal} onHide = { () => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      }

      <br></br>

      <Accordion>
        {
          users.map(user => {
            return (
              <Accordion.Item eventKey={user.id}>
                <Accordion.Header>{user.name}</Accordion.Header>
                <Accordion.Body>
                  <h2>{user.name}</h2>
                  <p>
                    <a href={`mailto:${user.email}`}>
                      {user.email}
                    </a>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            )
          })
        }

      </Accordion>

      <hr />

      <Carousel fade>
        {
          users.map(user => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/id/123/800/400"
                  alt={user.name}
                />
                <Carousel.Caption>
                  <h2>{user.name}</h2>
                  <p>
                    <a href={`mailto:${user.email}`}>
                      {user.email}
                    </a>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

            )
          })
        }
      </Carousel>

      <hr />

    </div>

  );
}

export default App;
