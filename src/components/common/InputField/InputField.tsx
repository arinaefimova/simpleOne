import { FC } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { InputFieldProps } from "../../../types";
import "./InputField.scss";
import { useInputField } from "../../../hooks/useInputFields";
import {TagBox, InputIcons, OptionList} from "../../index";
const InputField: FC<InputFieldProps> = ({
	label,
	isImportant,
	search,
	plus,
	date,
	type = "text",
	id,
	options = [],
	multiple = false,
	className,
	last,
    onChange
}) => {
	const {
		inputValue,
		selectedValues,
		showOptions,
		handleInputChange,
		handleOptionClick,
		toggleOptions,
		handleAddClick,
		handleRemoveValue,
		handleClearAll,
		handleCalendarClick,
		inputFieldRef,
		dateInputRef,
	} = useInputField({ type, multiple });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleInputChange(e); 
        onChange?.(e.target.value);
      };
	return (
		<div
			ref={inputFieldRef}
			className={`input-field ${last && showOptions ? "input-field_btm" : ""}`}
		>
			<label htmlFor={id}>
				{isImportant && <sup>*</sup>}
				{label}
			</label>
			<div className="input-field__wrapper">
				<div className={`input-field__input ${className ? className : ""}`}>
					<TagBox tags={selectedValues} onRemove={handleRemoveValue} />
					<input
						type={type}
						id={id}
						required
						value={inputValue}
						max="{{ currentDate }}"
						onChange={handleChange}
						readOnly={search && !plus}
						ref={date && type === "date" ? dateInputRef : undefined}
					/>
					{plus && search && (
						<IoIosCloseCircleOutline
							size={16}
							stroke="#000"
							className="clear"
							onClick={handleClearAll}
						/>
					)}
				</div>
				<InputIcons
					plus={plus}
					search={search}
					date={date}
					onAddClick={handleAddClick}
					onSearchClick={toggleOptions}
					onDateClick={handleCalendarClick}
				/>
			</div>
			<div className="input-field__inner">
				{search && showOptions && (
					<OptionList options={options} onOptionClick={handleOptionClick} />
				)}
			</div>
		</div>
	);
};

export default InputField;
