import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

/*--------------------------------------------------------
    Top rated courses bootstrap card display using props
----------------------------------------------------------*/
const CourseHighlight = (props) =>
{
    const { title, img, duration, rating: { star }, price } = props.course;
    return (
        <Col>
            <Card className="p-2">
                <Card.Img variant="top" src={img} className="img-thumbnail" />
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                    <div className="text-center">
                        <h5 className="fw-light">Duration: {duration} minute</h5>
                        <Rating style={{ color: "goldenrod" }}
                            initialRating={star}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly
                        />
                        <h4>Price: ${price}</h4>
                        <Link to="/">
                            <Button variant="outline-success">Enroll Now</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseHighlight;