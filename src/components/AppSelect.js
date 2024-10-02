import React from 'react';
import Select from 'react-select';

const AppSelect = ({options, onChange, defaultValue }) => {
    
  return (
      <Select
        className="select-single"
        classNamePrefix="select"
        defaultValue={defaultValue ?? options[0]}
        isClearable={false}
        isSearchable={true}
        name="color"
        options={options}
        onChange={onChange}
      />
  );
};

export default AppSelect;