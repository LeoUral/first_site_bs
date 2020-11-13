import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import Slider from './Components/Slider';
import lighthouse from './lighthouse.jpg';
import lake from './lake.jpg';
import tarhancut from './Tarhancut.jpg';
import Jumbotron from './Components/Jumbotron';

export const Home = () => (
    <>
        <Slider />
        <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={lighthouse} />
                        <Card.Body>
                            <Card.Title>Leonid Kudryashov</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tarhancut} />
                        <Card.Body>
                            <Card.Title>Leonid Kudryashov</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={lake} />
                        <Card.Body>
                            <Card.Title>Leonid Kudryashov</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron />
        <Container style={{ marginBottom: '30px' }} >
            <Row>
                <Col md={7}>
                    <img src={lighthouse} height={400} alt="img" />
                </Col>
                <Col md={5}>
                    <h2>Leonid Kudryashov</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam temporibus, enim maiores voluptas exercitationem reiciendis beatae sapiente officiis nemo. Nobis recusandae dolor eligendi blanditiis doloremque voluptate nulla quod sunt similique impedit sed consectetur illo, aliquid atque quis dignissimos? Dignissimos incidunt aut porro fugit sit dolorem quisquam modi at quia necessitatibus in sapiente voluptates quasi sequi tempora commodi, laboriosam aspernatur! Magnam culpa fuga explicabo rerum maxime quod vel aliquam et expedita. Porro, dolore nobis adipisci at molestiae sint corrupti omnis eaque totam, recusandae, pariatur maxime consectetur excepturi nihil cum rem est.
                    </p>
                </Col>
            </Row>
        </Container>
    </>
)