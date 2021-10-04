import React, { useContext, useEffect, useState } from 'react';
import CourseSlider from '../CourseSlider/CourseSlider';
import CourseHighlight from '../CourseHighlight/CourseHighlight';
import { Row } from 'react-bootstrap';
import { CourseContext } from '../../App';

const Home = () =>
{
    const [courses] = useContext(CourseContext);
    const [topCourses, setTopCourses] = useState([]);

    useEffect(() =>
    {
        const topCourse = courses.filter(course => course.rating.star === 5);
        setTopCourses(topCourse);
    }, [courses]);

    return (
        <div className="container">
            <CourseSlider />
            <div>
                <div className="border-top border-bottom text-center text-success fw-light m-4">
                    <h3><u>Our Top Rated Courses</u></h3>
                    <p className="fs-4">Find what fascinates you as you explore these baking classes</p>
                </div>
                <Row xs={1} md={4} className="g-3">
                    {
                        topCourses.map(course => <CourseHighlight
                            key={course.key}
                            course={course}
                        />)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;