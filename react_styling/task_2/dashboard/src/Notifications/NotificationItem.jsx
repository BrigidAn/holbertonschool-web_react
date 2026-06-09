import React from "react";
import PropTypes from "prop-types";

function NotificationItem({
  type = "default",
  value = "",
  html = null,
}) {
  const colorVar =
    type === "urgent"
      ? "var(--urgent-notification-item)"
      : "var(--default-notification-item)";

  return (
    <li
      data-notification-type={type}
      style={{ color: colorVar }}
      dangerouslySetInnerHTML={
        html ? html : undefined
      }
    >
      {!html ? value : null}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.object,
};

export default NotificationItem;