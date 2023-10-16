import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function ContainerExample() {
  return (
    <Container>
        
        <Row>
            <Col>
                <ListGroup>
                    <ListGroup.Item><h4>Navegacion:</h4></ListGroup.Item>
                    <ListGroup.Item>Home</ListGroup.Item>
                    <ListGroup.Item>Quienes somos</ListGroup.Item>
                    <ListGroup.Item>Log in</ListGroup.Item>
                    <ListGroup.Item>Sign in</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col>
                <ListGroup>
                    <ListGroup.Item><h4>Nuestras redes::</h4></ListGroup.Item>
                    <ListGroup.Item>Facebook</ListGroup.Item>
                    <ListGroup.Item>X</ListGroup.Item>
                    <ListGroup.Item>Instagram</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        <Row>
            <p>COPYRIGHT ©2023 Generic bank</p>
        </Row>
    </Container>
  );
}

export default ContainerExample;