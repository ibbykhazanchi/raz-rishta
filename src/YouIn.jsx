import you_in from "./assets/you_in.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button"
import RazForm from "./Form";

const YouIn = () => {
    return (
        <Container fluid>
        <Row>
          <Col className="d-flex align-items-center justify-content-center p-5 pt-0">
            <RazForm/>
          </Col>
          <Col className=" d-flex align-items-center justify-content-center">         
            <img src={you_in} className="img-fluid" />
        </Col>
        </Row>
      </Container>
    )
}

export default YouIn