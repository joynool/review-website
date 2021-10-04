import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import './App.css';
import Courses from './components/Courses/Courses';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { createContext, useEffect, useState } from 'react';
export const CourseContext = createContext('allCourses');

function App ()
{
  const [courses, setCourses] = useState([]);
  useEffect(() =>
  {
    fetch('./baking_school.JSON')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);
  return (
    <CourseContext.Provider value={[courses, setCourses]}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </CourseContext.Provider>
  );
}

export default App;
