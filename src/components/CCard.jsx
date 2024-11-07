import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import tasse from "../assets/fotografia-de-alimentos-79af0iLTnk4-unsplash.jpg";
import btnStyles from '../styles/Button.module.css';
import colors from '../styles/Colors.module.css';

const CCard = () => {
    return(
    <Card className="w-auto mx-5 py-3">
    <Card.Img variant="top" src={tasse} />
    <div className={colors.customText}>
      <h2>Card Title</h2>
      <p>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
    </div>
    <div>
      <Button variant="outline-success" className={btnStyles.customBtn}>Link1
      </Button>
      <Button variant="outline-success" className={btnStyles.customBtn}>
        Link2
      </Button>
    </div>
  </Card>)
}

export default CCard;