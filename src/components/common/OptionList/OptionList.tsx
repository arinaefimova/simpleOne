import { FC } from "react";

const OptionList: FC<{
    options: string[];
    onOptionClick: (option: string) => void;
  }> = ({ options, onOptionClick }) => (
    <ul className="input-field__options">
      {options.map((option) => (
        <li
          key={option}
          onClick={() => onOptionClick(option)}
          className="input-field__option"
        >
          {option}
        </li>
      ))}
    </ul>
  );
  
export default OptionList