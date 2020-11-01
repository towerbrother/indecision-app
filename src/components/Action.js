import React from "react";

const Action = ({ options, handlePick }) => {
  return (
    <div>
      <button
        className="big-button"
        onClick={handlePick}
        disabled={!options.length}
      >
        What should I do?
      </button>
    </div>
  );
};

export default Action;
