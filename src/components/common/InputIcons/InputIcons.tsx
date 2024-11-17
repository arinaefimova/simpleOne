import { FC } from "react";
import { CiSearch } from "react-icons/ci";
import { LuPlus, LuCalendar } from "react-icons/lu";
import { InputIconsProps } from "../../../types";

const InputIcons: FC<InputIconsProps> = ({ plus, search, date, onAddClick, onSearchClick, onDateClick }) => (
  <>
    {plus && (
      <span onClick={onAddClick}>
        <LuPlus size={16} />
      </span>
    )}
    {search && (
      <span className="search" onClick={onSearchClick}>
        <CiSearch size={16} strokeWidth={1} />
      </span>
    )}
    {date && (
      <span onClick={onDateClick}>
        <LuCalendar size={16} strokeWidth={2} />
      </span>
    )}
  </>
);
export default InputIcons
