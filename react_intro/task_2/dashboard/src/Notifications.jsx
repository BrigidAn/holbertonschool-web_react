import "./Notifications.css";
import closeIcon from "./assets/close-button.png";
import { getLatestNotification } from "./utils";

function Notifications() {
  const handleClose = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications">
      {/* Close button */}
      <button
        aria-label="Close"
        onClick={handleClose}
        className="close-btn"
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <img src={closeIcon} alt="close icon" />
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">
          New course available
        </li>

        <li data-priority="urgent">
          New resume available
        </li>

        <li data-priority="urgent">
          <span
            dangerouslySetInnerHTML={{
              __html: getLatestNotification(),
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Notifications;