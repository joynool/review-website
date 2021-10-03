import React from 'react';
import { Carousel } from 'react-bootstrap';
import sliderOne from '../../images/slider-one.jpg';
import sliderTwo from '../../images/slider-two.jpg';
import sliderThree from '../../images/slider-three.jpg';

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
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CourseSlider;