import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import sliderOne from '../../images/slider-one.jpg';
import sliderTwo from '../../images/slider-two.jpg';
import sliderThree from '../../images/slider-three.jpg';
import { Link } from 'react-router-dom';

const CourseSlider = () =>
{
    return (
        <div className="border border-2 rounded p-3 w-75 mx-auto">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-thumbnail"
                        src={sliderOne}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem harum dignissimos itaque nostrum odio sunt, velit alias sit, inventore ipsam laboriosam obcaecati cupiditate earum temporibus tempora quam sequi. Ratione dolores deleniti excepturi soluta, incidunt vero perferendis laudantium corporis dolor ipsa architecto eius atque exercitationem blanditiis nulla aperiam labore corrupti!</p>
                        <Link to="/">
                            <Button variant="light" className="mb-2">Enroll Now</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-thumbnail"
                        src={sliderTwo}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p className="pb-3 text-dark">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum voluptate nostrum, dolor excepturi porro. Illo magni, porro eaque reiciendis minus cupiditate? Saepe, aperiam! Magni unde iure, sunt autem quas voluptate reiciendis sint cumque dolores natus itaque doloremque quod quibusdam vitae deserunt explicabo sequi perferendis? Alias beatae non quisquam debitis.</p>
                        <Link to="/">
                            <Button variant="light" className="mb-2">Enroll Now</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-thumbnail"
                        src={sliderThree}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p className="pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis temporibus vero labore earum consequuntur rerum nesciunt quod cum eligendi, molestias rem nostrum itaque blanditiis perferendis vitae veritatis odit quibusdam. Omnis quasi distinctio nisi facere sequi eveniet non cupiditate fugit assumenda ab laborum quae ducimus pariatur, dolorum, voluptas magni commodi!</p>
                        <Link to="/">
                            <Button variant="light" className="mb-2">Enroll Now</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CourseSlider;