import React from "react";
import PropTypes from "prop-types";

function BodySection({ title = "", children }) {
  return (
    <div className="bodySection  text-black">
      <h2 className="text-xl font-semibold mb-2">
        {title}
      </h2>
      {children}
    </div>
  );
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySection;