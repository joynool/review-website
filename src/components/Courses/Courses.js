import React, { useContext } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { CourseContext } from '../../App';

const Courses = () =>
{
    const [courses] = useContext(CourseContext);

    return (
        <div className="container">
            <div className="border-top border-bottom text-center text-success fw-light m-4">
                <h3><u>Our All Courses</u></h3>
                <p className="fs-4">Find what fascinates you as you explore these baking classes</p>
            </div>
            <Row xs={1} md={2} className="g-4">
                {
                    courses.map(course => (
                        <Col key={course.key}>
                            <Card className="p-2">
                                <Card.Img variant="top" src={course.img} className="img-thumbnail" />
                                <Card.Body>
                                    <Card.Title className="text-center fs-5">{course.title}</Card.Title>
                                    <div>
                                        <div className="d-flex justify-content-around fs-6 fw-normal">
                                            <p>Duration: {course.duration} minute</p>
                                            <p>Rating: {course.rating.star} (Enrolled {course.rating.enrolled} students)</p>
                                        </div>
                                        <div className="border rounded p-2">
                                            <p className="fw-bold">You will learn:</p>
                                            <ul>
                                                <li>{course.learn[0]}</li>
                                                <li>{course.learn[1]}</li>
                                                <li>{course.learn[2]}</li>
                                            </ul>
                                            <p className="fw-light">Requirements: {course.requirements}</p>
                                        </div>
                                        <div className="d-flex justify-content-between mt-4">
                                            <h4>Price: ${course.price}</h4>
                                            <Button variant="outline-success">Enroll Now</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default Courses;