import React, { Fragment } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    const isLoggedIn = false;

    const notificationsList = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      {
        id: 3,
        type: "urgent",
        html: {
          __html: "<strong>Urgent requirement</strong> - complete by EOD",
        },
      },
    ];

    const coursesList = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    return (
      <Fragment>
        <Notifications displayDrawer={true} notifications={notificationsList} />
        <Header />
        {isLoggedIn ? <CourseList courses={coursesList} /> : <Login />}
        <Login />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
