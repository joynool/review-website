import React, { useContext } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { CourseContext } from '../../App';

/*------------------------------------------------
    All courses display using bootstrap grid card
--------------------------------------------------*/
const Courses = () =>
{
    // data receive using useContext()
    const [courses] = useContext(CourseContext);

    // display courses using grid card
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
                                            <div className="d-flex">
                                                <Rating style={{ color: "goldenrod" }}
                                                    initialRating={course.rating.star}
                                                    emptySymbol="far fa-star"
                                                    fullSymbol="fas fa-star"
                                                    readonly
                                                />
                                                <p>({course.rating.enrolled} students enrolled so far)</p>
                                            </div>
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