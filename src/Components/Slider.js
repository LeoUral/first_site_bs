import React from 'react';
import { Carousel } from 'react-bootstrap';
import tarhancut from '../Tarhancut.jpg';
import lake from '../lake.jpg';
import lighthouse from '../lighthouse.jpg';
import rock1 from '../rock1.jpg';
import rock2 from '../rock2.jpg';
import rock3 from '../rock3.jpg';
import rock4 from '../rock4.jpg';


const heightImage = '900px';
const positionImage = 'center';

export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item style={{ 'height': `${heightImage}` }}>
                <div style={{
                    height: '900px',
                    backgroundImage: `url(${tarhancut})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `${positionImage}`
                }} ></div>
                {/* <img
                    className="d-block w-100"
                    src={tarhancut}
                    alt="First slide"
                /> */}
                <Carousel.Caption style={{ color: 'white' }}>
                    <h3>Leonid Kudryashov</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, beatae optio hic at accusamus, voluptates ipsa dolorum distinctio reiciendis est maxime adipisci ullam sed officiis?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': `${heightImage}` }}>
                <div style={{
                    height: '900px',
                    backgroundImage: `url(${lighthouse})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `${positionImage}`
                }} ></div>
                {/* <img
                    className="d-block w-100"
                    src={lighthouse}
                    alt="First slide"
                /> */}
                <Carousel.Caption style={{ color: 'white' }}>
                    <h3>Leonid</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, beatae optio hic at accusamus, voluptates ipsa dolorum distinctio reiciendis est maxime adipisci ullam sed officiis?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': `${heightImage}` }}>
                <div style={{
                    height: '900px',
                    backgroundImage: `url(${lake})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `${positionImage}`
                }} ></div>
                {/* <img
                    className="d-block w-100"
                    src={lake}
                    alt="First slide"
                /> */}
                <Carousel.Caption style={{ color: 'white' }}>
                    <h3>Kudryashov</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, beatae optio hic at accusamus, voluptates ipsa dolorum distinctio reiciendis est maxime adipisci ullam sed officiis?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': `${heightImage}` }}>
                <div style={{
                    height: '900px',
                    backgroundImage: `url(${rock1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `${positionImage}`
                }} ></div>
                {/* <img
                    className="d-block w-100"
                    src={lake}
                    alt="First slide"
                /> */}
                <Carousel.Caption style={{ color: 'white' }}>
                    <h3>Kudryashov</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, beatae optio hic at accusamus, voluptates ipsa dolorum distinctio reiciendis est maxime adipisci ullam sed officiis?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': `${heightImage}` }}>
                <div style={{
                    height: '900px',
                    backgroundImage: `url(${rock2})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `${positionImage}`
                }} ></div>
                {/* <img
                    className="d-block w-100"
                    src={lake}
                    alt="First slide"
                /> */}
                <Carousel.Caption style={{ color: 'white' }}>
                    <h3>Kudryashov</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, beatae optio hic at accusamus, voluptates ipsa dolorum distinctio reiciendis est maxime adipisci ullam sed officiis?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': `${heightImage}` }}>
                <div style={{
                    height: '900px',
                    backgroundImage: `url(${rock3})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `${positionImage}`
                }} ></div>
                {/* <img
                    className="d-block w-100"
                    src={lake}
                    alt="First slide"
                /> */}
                <Carousel.Caption style={{ color: 'white' }}>
                    <h3>Kudryashov</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, beatae optio hic at accusamus, voluptates ipsa dolorum distinctio reiciendis est maxime adipisci ullam sed officiis?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': `${heightImage}` }}>
                <div style={{
                    height: '900px',
                    backgroundImage: `url(${rock4})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `${positionImage}`
                }} ></div>
                {/* <img
                    className="d-block w-100"
                    src={lake}
                    alt="First slide"
                /> */}
                <Carousel.Caption style={{ color: 'white' }}>
                    <h3>Kudryashov</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, beatae optio hic at accusamus, voluptates ipsa dolorum distinctio reiciendis est maxime adipisci ullam sed officiis?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}