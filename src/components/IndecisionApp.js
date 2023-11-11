import React, { useState, useEffect } from 'react';
import AddOption from './AddOption';
import Header from './Header';
import CreatedBy from './CreatedBy';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';

const IndecisionApp = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(undefined);

  // constants
  const subtitle = 'Blame fate when faced with a hard decisions!?';
  const url = 'https://giorgio-portfolio-towerbrother.vercel.app/';
  const author = 'Giorgio Torre';

  // when mounted
  useEffect(() => {
    try {
      const json = localStorage.getItem('options');
      const storedOptions = JSON.parse(json);
      if (storedOptions) setOptions(storedOptions);
    } catch (e) {
      // Do nothing
    }
  }, []);

  // when options array is updated
  useEffect(() => {
    const json = JSON.stringify(options);
    localStorage.setItem('options', json);
  }, [options]);

  const handleDeleteOptions = () => {
    setOptions([]);
  };

  const handleDeleteOption = (optionToRemove) => {
    setOptions(options.filter((option) => optionToRemove !== option));
  };

  const handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (options.indexOf(option) > -1) {
      return 'This option already exist';
    } else {
      setOptions([...options, option]);
      return undefined;
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

  return (
    <div className='wrapper'>
      <Header subtitle={subtitle} />
      <div className='container'>
        <Action options={options} handlePick={handlePick} />
        <div className='widget'>
          <Options
            options={options}
            handleDeleteOptions={handleDeleteOptions}
            handleDeleteOption={handleDeleteOption}
          />
          <AddOption handleAddOption={handleAddOption} />
        </div>
      </div>
      <OptionModal
        selectedOption={selectedOption}
        handleClearSelectedOption={handleClearSelectedOption}
      />
      <CreatedBy url={url} author={author} />
    </div>
  );
};

export default IndecisionApp;
