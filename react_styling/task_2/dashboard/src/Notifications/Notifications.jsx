import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";

function Notifications({
  displayDrawer = false,
  notifications = [],
}) {
  return (
    <div
      className="w-1/4 ml-auto border border-dashed p-[6px]"
      style={{
        borderColor: "var(--main-color)",
      }}
    >
      <div className="flex justify-end font-bold">
        Your Notifications
      </div>

      {displayDrawer && (
        <div className="mt-2">
          <p>Here is the list of notifications</p>

          {notifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <ul className="space-y-1">
              {notifications.map((item) => (
                <NotificationItem
                  key={item.id}
                  id={item.id}
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

export default Notifications;