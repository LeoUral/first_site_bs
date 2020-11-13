import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import lake from '../lake.jpg';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbo {
        background: url(${lake}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Leonid Kudryashov</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis, non quisquam illum dolorum optio sapiente velit assumenda animi minus, voluptas odit inventore suscipit. Officiis atque provident corrupti cumque aut! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium repellendus amet illum, alias doloribus placeat quas harum, explicabo laboriosam dignissimos ducimus expedita error, corporis quod rerum nihil. Alias, sed dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, excepturi. Voluptatum, iure atque repellat harum aliquam dolores facere quo ratione maxime eum quod provident aspernatur et! Minus labore expedita atque!</p>
            </Container>
        </Jumbo>
    </Styles>
)

export default Jumbotron;