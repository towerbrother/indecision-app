import React, { useState } from "react";

const AddOption = ({ handleAddOption }) => {
  const [error, setError] = useState(undefined);

  const handleOptionOrError = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    setError(handleAddOption(option));
    e.target.elements.option.value = "";
  };

  return (
    <div>
      {error && <p className="add-option-error">{error}</p>}
      <form className="add-option" onSubmit={handleOptionOrError}>
        <input className="add-option__input" type="text" name="option" />
        <button className="button">Add Option</button>
      </form>
    </div>
  );
};

export default AddOption;
