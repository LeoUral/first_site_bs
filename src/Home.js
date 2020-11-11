import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import Slider from './Components/Slider';
import lighthouse from './lighthouse.jpg';
import lake from './lake.jpg';
import tarhancut from './Tarhancut.jpg';

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
    </>
)