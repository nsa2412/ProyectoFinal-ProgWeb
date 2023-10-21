import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';

function QuienesSomos(){
    return(
        <>
            <Navbar />
            <Container>
                <Row>
                    <Card style={{ width: '18rem' }}>
                        <Row>
                            <Col>
                                <Card.Img variant="top" src="../img/Foto 1.pmg" />
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title>Somos Generic Bank</Card.Title>
                                    <Card.Text>
                                        Somos una pagina genrica para un proyecto.
                                    </Card.Text>
                                    <Button variant="primary">Descargar</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </Container>
            <Footer />
        </>
    )
}