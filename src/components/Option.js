import React, { useContext } from "react";
import OptionsContext from "./../context/optionsContext";

const Option = ({ count, optionText }) => {
  const { handleDeleteOption } = useContext(OptionsContext);
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
