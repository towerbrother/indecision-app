import React, { useContext } from "react";
import Option from "./Option";
import OptionsContext from "./../context/optionsContext";

const Options = ({ handleDeleteOptions }) => {
  const { options } = useContext(OptionsContext);
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button--link" onClick={handleDeleteOptions}>
          Remove All
        </button>
      </div>
      {options.length === 0 && (
        <p className="widget__message">Please add an option to get started!</p>
      )}
      {options.map((option, index) => (
        <Option key={option} optionText={option} count={index + 1} />
      ))}
    </div>
  );
};

export default Options;
