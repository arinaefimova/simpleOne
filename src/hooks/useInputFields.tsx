import { useState, useRef, useEffect } from "react";
import { setMaxDate } from "../utils/setMaxDate";

export const useInputField = ({type, multiple}:{type:string, multiple:boolean}) => {
    const dateInputRef = useRef<HTMLInputElement>(null);
    const inputFieldRef = useRef<HTMLDivElement>(null); 
    const [inputValue, setInputValue] = useState<string>("");
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        const maxDate = setMaxDate();
        if (dateInputRef.current) {
            dateInputRef.current.setAttribute('max', maxDate);
        }
    }, []);

    const handleCalendarClick = () => {
        if (dateInputRef.current && type === 'date') {
            dateInputRef.current.showPicker();
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleOptionClick = (option: string) => {
        if (multiple) {
            setSelectedValues((prev) =>
                prev.includes(option) ? prev : [...prev, option]
            );
        } else {
            setSelectedValues([option]);
        }
        setInputValue("");
        setShowOptions(false);
    };

    const toggleOptions = () => {
        setShowOptions((prev) => !prev);
    };

    const handleAddClick = () => {
        if (!inputValue.trim()) return;
        if (multiple) {
            setSelectedValues((prev) => [...prev, inputValue]);
        } else {
            setSelectedValues([inputValue]);
        }
        setInputValue("");
    };

    const handleRemoveValue = (value: string) => {
        setSelectedValues((prev) => prev.filter((v) => v !== value));
    };

    const handleClearAll = () => {
        setInputValue(""); 
        setSelectedValues([]); 
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (inputFieldRef.current && !inputFieldRef.current.contains(e.target as Node)) {
                setShowOptions(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return {
        inputValue,
        setInputValue,
        selectedValues,
        setSelectedValues,
        showOptions,
        setShowOptions,
        handleInputChange,
        handleOptionClick,
        toggleOptions,
        handleAddClick,
        handleRemoveValue,
        handleClearAll,
        handleCalendarClick,
        inputFieldRef,
        dateInputRef
    };
};
