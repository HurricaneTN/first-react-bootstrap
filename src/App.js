import "./App.css";
import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Card,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={7}>
              <Image src="https://picsum.photos/900/400" fluid rounded></Image>
            </Col>
            <Col sm={5}>
              <h1 class="font-weight-lite">Tagline</h1>
              <p class="mt-4">
                Decorum be nodded this stock beguiling. Of fearing beast chamber
                unhappy one, at and wide stern but bird lost, his.By back
                startled more enchanted bird maiden, this whom or is forgotten
                fowl door long this. Is and the quoth chamber had fowl utters
                more and, desert door there and my, explore chamber above till a
                my upon i. Stood what lies horror hath floor gloating ancient
                on, discourse the chamber than still, name with morrow into
                caught this said forget, demons crest i no the still flown
                ungainly oh, i liftednevermore from so wide more his head sad.
              </p>
              <Button variant="outline-primary">My Button</Button>
            </Col>
          </Row>
          <Row>
            <Card className="text-center bg-secondary text-white ny-5 py-4">
              <Card.Body>
                This is some text within a card body.Or deadly waste upon or
                that heavenly heal visit fabled break, mirth hour basked not
                will vulgar was change flash..
              </Card.Body>
            </Card>
          </Row>
          <Row className="py-5">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/220/320/200"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/210/320/200"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/250/320/200"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer class="py-5 my-5 bg-dark">
        <Container className="px-4 text-white">
          Copyright &copy; Go my Code 2022
        </Container>
      </footer>
    </div>
  );
}

export default App;
