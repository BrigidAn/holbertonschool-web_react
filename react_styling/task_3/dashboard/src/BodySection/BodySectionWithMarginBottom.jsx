import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";

function BodySectionWithMarginBottom({
  title = "",
  children,
}) {
  return (
    <div className="bodySectionWithMargin text-black">
      <BodySection title={title} >
        {children}
      </BodySection>
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;