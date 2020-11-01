import React from "react";

const Option = ({ count, optionText, handleDeleteOption }) => {
  return (
    <div className="option">
      <p className="option__text">
        {count}. {optionText}
      </p>
      <button
        className="button button--link"
        onClick={(e) => {
          handleDeleteOption(optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
