import { PropTypes } from "prop-types";
import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState([]);

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // onAddCategory(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
        
    };

  return (
      <form onSubmit={ (event) => onSubmit(event) } aria-label="form">
          <input
              type="text"
              placeholder="Bucar Gifs"
              value={inputValue}
              onChange={(event) => onInputChange(event)}
          />
      </form>
 
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
