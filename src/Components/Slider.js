import React from 'react';
import { Carousel } from 'react-bootstrap';
import tarhancut from '../Tarhancut.jpg';
import lake from '../lake.jpg';
import lighthouse from '../lighthouse.jpg';


export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item style={{ 'height': '900px' }}>
                <img
                    className="d-block w-100"
                    src={tarhancut}
                    alt="First slide"
                />
                <Carousel.Caption style={{ color: 'white' }}>
                    <h3>Leonid Kudryashov</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, beatae optio hic at accusamus, voluptates ipsa dolorum distinctio reiciendis est maxime adipisci ullam sed officiis?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '900px' }}>
                <img
                    className="d-block w-100"
                    src={lighthouse}
                    alt="First slide"
                />
                <Carousel.Caption style={{ color: 'white' }}>
                    <h3>Leonid</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, beatae optio hic at accusamus, voluptates ipsa dolorum distinctio reiciendis est maxime adipisci ullam sed officiis?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '900px' }}>
                <img
                    className="d-block w-100"
                    src={lake}
                    alt="First slide"
                />
                <Carousel.Caption style={{ color: 'white' }}>
                    <h3>Kudryashov</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, beatae optio hic at accusamus, voluptates ipsa dolorum distinctio reiciendis est maxime adipisci ullam sed officiis?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}