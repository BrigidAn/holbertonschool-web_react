import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NotificationItem extends PureComponent {
  render() {
    const {
      type,
      value,
      html,
      markAsRead,
      id,
    } = this.props;

    const style = {
      color: type === "urgent" ? "red" : "blue",
    };

    return (
      <li
        data-notification-type={type}
        style={style}
        onClick={() => markAsRead(id)}
        dangerouslySetInnerHTML={html}
      >
        {!html ? value : null}
      </li>
    );
  }
}

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: null,
  markAsRead: () => {},
};

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.object,
  markAsRead: PropTypes.func,
};

export default NotificationItem;