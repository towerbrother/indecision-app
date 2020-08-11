import React, { useContext } from "react";
import OptionsContext from "../context/optionsContext";

const Action = ({ handlePick }) => {
  const { options } = useContext(OptionsContext);
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
