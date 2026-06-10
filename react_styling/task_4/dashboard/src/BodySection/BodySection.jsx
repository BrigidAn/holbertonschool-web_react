import React from "react";
import PropTypes from "prop-types";

function BodySection({ title = "", children }) {
  return (
    <div className="bodySection py-4">
      <h2 className="text-xl font-semibold text-black mb-1">
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