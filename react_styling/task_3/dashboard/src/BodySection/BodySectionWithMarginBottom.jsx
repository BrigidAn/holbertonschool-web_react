import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";

function BodySectionWithMarginBottom({
  title,
  children,
}) {
  return (
    <div className="mb-10">
      <BodySection title={title}>
        {children}
      </BodySection>
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
  title: "",
  children: null,
};

export default BodySectionWithMarginBottom;