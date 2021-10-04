import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import sliderOne from '../../images/slider-one.jpg';
import sliderTwo from '../../images/slider-two.jpg';
import sliderThree from '../../images/slider-three.jpg';
import { Link } from 'react-router-dom';

/*------------------------------------------------
    Bootstrap carousel for courses image slider
--------------------------------------------------*/
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
                        <h2>Delicious Cake Recipes for your Kitchen - Cake Baking Course</h2>
                        <p className="fs-6 fw-normal">Delicious Cake Recipes for Your Kitchen- Caking Baking Course is a type of Course where you get small Videos of approximately 4-6 MIns on Cooking Baking Cake Recipes. The Main Purpose Of this Course is to  Get How to make Cakes and their Process in Small Chunks.</p>
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
                        <h2>Make Delicious Heart Healthy Desserts | Low Sodium Desserts</h2>
                        <p className="fs-6 fw-normal">I created this course for people just like you. Why? Because when my husband was diagnosed with congestive heart disease I was DESPERATE for an answer to "How can I cook for him?". After months of research, tweaking recipes with low-sodium ingredients, and testing the results on my family.</p>
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
                        <h2>The Art of Pizza Making - Soft bubbly pizza crust at home</h2>
                        <p className="fs-6 fw-normal">You will learn how to make an authentic Neapolitan pizza by a Neapolitan pizza chef. I will show you how to make the dough, the secrets for a perfect raising and fermentation with yeast or sourdough, how to stretch a pizza base by hand, how to select best toppings and how to cook pizza in 100 seconds in a regular home oven!</p>
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