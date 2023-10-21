import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';

function Home(){
    return(
        <>
            <Navbar />
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Row>
                                <Col>
                                    <Card.Img variant="top" src="../img/telefono generico.png" />
                                </Col>
                                <Col>
                                    <Card.Body>
                                        <Card.Title>Descarga la App</Card.Title>
                                        <Card.Text>
                                            Puedes realizar tus operaciones desde nuestra app.
                                        </Card.Text>
                                        <Button variant="primary">Descargar</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Row>
                                <Col>
                                    <Card.Img variant="top" src="../img/tarjeta generica.png" />
                                </Col>
                                <Col>
                                    <Card.Body>
                                        <Card.Title>Solicita tu tarjeta</Card.Title>
                                        <Card.Text>
                                            Realiza comras con tarjeta y obten beneficios.
                                        </Card.Text>
                                        <Button variant="primary">Solicitar</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Row>
                                <Col>
                                    <Card.Img variant="top" src="../img/carrito.png" />
                                    <Card.Body>
                                        <Card.Title>Descuentos en supermercados</Card.Title>
                                        <Card.Text>
                                            5% de descuento en productos de la canasta basica.
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col>
                                    <Card.Img variant="top" src="../img/candado.png" />
                                    <Card.Body>
                                        <Card.Title>Seguridad</Card.Title>
                                        <Card.Text>
                                            Tu informacion esta protegida con nosotros.
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </>
    );
}
export default Home;