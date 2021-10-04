import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseHighlight = (props) =>
{
    const { title, img, duration, price } = props.course;
    return (
        <Col>
            <Card className="p-2">
                <Card.Img variant="top" src={img} className="img-thumbnail" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className="text-center">
                        <p>Duration: {duration} minute</p>
                        <p>Price: ${price}</p>
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