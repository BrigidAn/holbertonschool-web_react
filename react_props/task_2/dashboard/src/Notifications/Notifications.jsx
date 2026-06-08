import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-icon.png";
import "./Notifications.css";

function Notifications({ notifications = [] }) {
  return (
    <div className="Notifications">
      <button
        aria-label="Close"
        className="close-btn"
        onClick={() => console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="close icon" />
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        {notifications.map((item) => (
          <NotificationItem
            key={item.id}
            type={item.type}
            value={item.value}
            html={item.html}
          />
        ))}
      </ul>
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.array,
};

Notifications.defaultProps = {
  notifications: [],
};

export default Notifications;