import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import omas from "../assets/lawrence-chismorie-imSDbNzn6GU-unsplash.jpg";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import CCard from './CCard';
import btnStyles from '../styles/Button.module.css';
import colors from './Colors.module.css'

const Grid = () => {
  return (
    <Container>
      <Row className="mt-5 px-5">
        <Col sm={7}>
          <Image src={omas} fluid rounded />
        </Col>
        <Col sm={5}>
          <h1>Tolle Website</h1>
          <p>Jaja was ein Spaß</p>
          <Button variant="outline-success" className={btnStyles.customBtn}>Read more</Button>
        </Col>
      </Row>

      <Row className="mt-5">
        <Card className={colors.customBg}>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </Row>
      <Row className="mt-5 p-3 card-group justify-content-around">
        <CCard />
        <CCard />
        <CCard />

      </Row>
    </Container>
  );
}

export default Grid;
