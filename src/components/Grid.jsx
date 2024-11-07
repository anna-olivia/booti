import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import omas from "../assets/lawrence-chismorie-imSDbNzn6GU-unsplash.jpg";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import tasse from "../assets/fotografia-de-alimentos-79af0iLTnk4-unsplash.jpg";

function ResponsiveAutoExample() {
  return (
    <Container>
      <Row className="mt-5 px-5">
        <Col sm={7}>
          <Image src={omas} fluid rounded />
        </Col>
        <Col sm={5}>
          <h1>Tolle Website</h1>
          <p>Jaja was ein Spaß</p>
          <Button variant="outline-success">Read more</Button>
        </Col>
      </Row>

      <Row className="mt-5">
        <Card className="bg-dark text-light">
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </Row>
      <Row className="mt-5 px-5 card-group justify-content-around">
        <Card className="w-auto mx-5 py-3">
          <Card.Img variant="top" src={tasse} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>{" "}
        <Card className="w-auto mx-5 py-3">
          <Card.Img variant="top" src={tasse} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card className="w-auto mx-5 py-3">
          <Card.Img variant="top" src={tasse} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default ResponsiveAutoExample;
