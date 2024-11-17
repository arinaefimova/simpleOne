import { FC } from 'react';
import './Button.scss';
import { ButtonProps } from '../../../types';

const Button: FC<ButtonProps> = ({ title, type, onButtonClick }) => {
    
    
  return (
    <div className={`button ${type ? `button_${type}` : ''}`} onClick={onButtonClick!}>
      {title}
    </div>
  );
};

export default Button;
