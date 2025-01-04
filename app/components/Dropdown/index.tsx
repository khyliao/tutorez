import { useState } from "react";
import ArrowDownIcon from "@assets/arrow-bottom.svg";
import { UseFormSetValue, FieldValues, Path, PathValue } from "react-hook-form";
import { IAddStudentForm, ICreateUserForm } from "@/types/form";

type Props<T extends FieldValues> = {
  options: string[];
  setValue: UseFormSetValue<T>;
  field: Path<T>;
};

const Dropdown = <T extends Record<string, any>>({
  options,
  field,
  setValue,
}: Props<T>) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setValue(field, option as PathValue<T, typeof field>);
    setIsOpen(false);
  };

  return (
    <div className={`relative transition-colors dark:text-white z-20`}>
      <div
        className="flex justify-between p-2 gap-1 bg-inputBgStatic dark:bg-[#2F3966] items-center transition-colors rounded-lg cursor-pointer"
        onClick={handleOpen}
      >
        <span className="font-montserrat font-medium text-sm">
          {selectedOption}
        </span>
        <ArrowDownIcon />
      </div>
      {isOpen && (
        <ul className="absolute top-full mt-1 left-0 rounded-lg  overflow-hidden animate-dropdown">
          {options.map((option, index) => (
            <li
              key={option}
              className="py-2 px-5 cursor-pointer font-montserrat dark:bg-[#161634]  dark:hover:bg-[#5b4ea1] font-medium transition-colors hover:bg-[#7968eb] hover:text-white fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
