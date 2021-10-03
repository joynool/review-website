import React from 'react';
import CourseSlider from '../CourseSlider/CourseSlider';
import CourseHighlight from '../CourseHighlight/CourseHighlight';

const Home = () =>
{
    return (
        <div className="container-fluid">
            <CourseSlider />
            <CourseHighlight />
        </div>
    );
};

export default Home;