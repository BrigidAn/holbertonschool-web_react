import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-button.png";

class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
  }
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { displayDrawer, notifications } = this.props;

    return (
      <div className="ml-auto w-fit">
        <div className="notification-title text-right mb-2">
          Your notifications
        </div>

        {displayDrawer && (
          <div
            className="notification-items
                   relative
                   w-80
                   border-2
                   border-dashed
                   p-[6px]"
            style={{
              borderColor: "var(--main-color)",
            }}
          >
            <p>Here is the list of notifications</p>

            <button
              aria-label="Close"
              className="absolute top-2 right-2"
              onClick={() => console.log("Close button has been clicked")}
            >
              <img src={closeIcon} alt="close icon" className="w-3 h-3" />
            </button>

            {notifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <ul>
                {notifications.map((item) => (
                  <NotificationItem
                    key={item.id}
                    id={item.id}
                    type={item.type}
                    value={item.value}
                    html={item.html}
                    markAsRead={this.markAsRead}
                  />
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  notifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.array,
};

export default Notifications;
