import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";

import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      notifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "default", value: "New data available" },
      ],
    };
  }

  coursesList = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { isLoggedIn, notifications } = this.state;

    return (
      <div className="min-h-screen flex flex-col">

        <Header />

        <Notifications
          displayDrawer={true}
          notifications={notifications}
        />

        {!isLoggedIn ? (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList courses={this.coursesList} />
          </BodySectionWithMarginBottom>
        )}

        <BodySection title="News from the School">
          <p>Holberton School News goes here</p>
        </BodySection>

        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: true,
};

export default App;
