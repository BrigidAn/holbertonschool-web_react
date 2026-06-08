import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-button.png";
import "./Notifications.css";

function Notifications({ displayDrawer = false, notifications = [] }) {
  return (
    <div className="Notifications">
      {/* ALWAYS visible */}
      <div className="notification-title">
        Your notifications
      </div>

      {displayDrawer && (
        <div className="notification-items">
          <p>
            Here is the list of notifications
          </p>

          <button
            aria-label="Close"
            className="close-btn"
            onClick={() =>
              console.log("Close button has been clicked")
            }
          >
            <img src={closeIcon} alt="close icon" />
          </button>

          {notifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
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
          )}
        </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.array,
};

Notifications.defaultProps = {
  displayDrawer: false,
  notifications: [],
};

export default Notifications;