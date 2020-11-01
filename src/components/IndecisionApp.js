import React, { useState, useEffect } from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import CreatedBy from "./CreatedBy";
import Options from "./Options";
import Action from "./Action";
import OptionModal from "./OptionModal";
import OptionsContext from "../context/optionsContext";

const IndecisionApp = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(undefined);

  useEffect(() => {
    // componentDidMount
    try {
      const json = localStorage.getItem("options");
      const storedOptions = JSON.parse(json);
      if (storedOptions) setOptions(storedOptions);
    } catch (e) {
      // Do nothing
    }
  }, []);

  useEffect(() => {
    //componentDidUpdate
    const json = JSON.stringify(options);
    localStorage.setItem("options", json);
  }, [options]);

  const handleDeleteOptions = () => {
    setOptions([]);
  };

  const handleDeleteOption = (optionToRemove) => {
    setOptions(options.filter((option) => optionToRemove !== option));
  };

  const handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (options.indexOf(option) > -1) {
      return "This option already exist";
    } else {
      setOptions([...options, option]);
    }
  };

  const handlePick = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const option = options[randomIndex];
    setSelectedOption(option);
  };

  const handleClearSelectedOption = () => {
    setSelectedOption(undefined);
  };

  const subtitle = "Blame fate when faced with a hard decision!?";

  const url = "https://towerbrother.github.io/portfolio-app";
  const author = "Giorgio Torre";

  return (
    <div className="wrapper">
      <Header subtitle={subtitle} />
      <OptionsContext.Provider value={{ options, handleDeleteOption }}>
        <div className="container">
          <Action handlePick={handlePick} />
          <div className="widget">
            <Options handleDeleteOptions={handleDeleteOptions} />
            <AddOption handleAddOption={handleAddOption} />
          </div>
        </div>
      </OptionsContext.Provider>
      <OptionModal
        selectedOption={selectedOption}
        handleClearSelectedOption={handleClearSelectedOption}
      />
      <CreatedBy url={url} author={author} />
    </div>
  );
};

export default IndecisionApp;
