import React from "react";
import PropTypes from "prop-types";

function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  if (isHeader) {
    return (
      <tr
        style={{
         backgroundColor: "rgba(222, 181, 181, 0.66)",
        }}
        className="border border-gray-400"
      >
        {textSecondCell === null ? (
          <th colSpan="2" className="border border-gray-400">
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className="border border-gray-400 ">{textFirstCell}</th>
            <th className="border border-gray-400">{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  }

  return (
    <tr
      className="border border-gray-400 text-black"
      style={{
        backgroundColor: "rgba(205,205,205,0.45)",
      }}
    >
      <td className="border border-gray-400 pl-2 ">{textFirstCell}</td>
      <td className="border border-gray-400 pl-2 ">{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
