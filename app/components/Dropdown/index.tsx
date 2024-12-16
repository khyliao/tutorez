import { useState } from "react";
import ArrowDownIcon from "@assets/arrow-bottom.svg";

type Props = {
  options: string[];
};

const Dropdown = ({ options }: Props) => {
  const [selectedOption, setSelectedOption] = useState("10");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative transition-colors dark:text-white`}>
      <div
        className="flex p-2 gap-1 bg-[#E0E0E0] dark:bg-[#090917] items-center transition-colors rounded-lg cursor-pointer"
        onClick={handleOpen}
      >
        <span className="font-montserrat font-medium text-sm">
          {selectedOption}
        </span>
        <ArrowDownIcon />
      </div>
      {isOpen && (
        <ul className="absolute top-full mt-1 left-0 bg-[#E0E0E0] rounded-lg overflow-hidden animate-dropdown">
          {options.map((option, index) => (
            <li
              key={option}
              className="py-2 px-5 cursor-pointer font-montserrat dark:bg-[#161634] dark:hover:bg-[#5b4ea1] font-medium transition-colors hover:bg-[#7968eb] hover:text-white fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
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
