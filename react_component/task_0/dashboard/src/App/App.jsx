import React, { Component, Fragment } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

class App extends Component {
  render() {
    const isLoggedIn = false;

    return (
      <Fragment>
        <Notifications />
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </Fragment>
    );
  }
}

export default App;