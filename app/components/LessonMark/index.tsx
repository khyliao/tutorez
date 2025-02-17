import { useEffect, useState } from "react";

interface ILessonMarkProps {
  onClick: (value: number) => void;
}

const LessonMark = ({ onClick }: ILessonMarkProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(5);

  // useEffect(() => {
  //   return () => {
  //     setSelectedIndex(null);
  //   };
  // }, [isSettingsModalOpen]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    onClick(index + 1);
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="p-[6px] cursor-pointer transition-all rounded-full hover:bg-[#7b61ff33] hover:scale-105 active:scale-90"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          <svg width="31" height="30" viewBox="0 0 33 32" fill="none">
            <path
              d="M16.5 2.14298L20.5059 9.73562L20.7354 10.1705L21.2199 10.2543L29.6788 11.7179L23.6957 17.8741L23.353 18.2267L23.423 18.7134L24.645 27.2106L16.9412 23.4226L16.5 23.2057L16.0588 23.4226L8.35505 27.2106L9.57703 18.7134L9.64702 18.2267L9.30432 17.8741L3.32119 11.7179L11.7801 10.2543L12.2646 10.1705L12.4941 9.73562L16.5 2.14298Z"
              stroke={
                hoveredIndex !== null
                  ? index <= hoveredIndex
                    ? "#7B61FF"
                    : "#7B61FF"
                  : selectedIndex !== null && index <= selectedIndex
                  ? "#7B61FF"
                  : "#7B61FF"
              }
              strokeWidth="2"
              fill={
                hoveredIndex !== null
                  ? index <= hoveredIndex
                    ? "#7B61FF"
                    : "none"
                  : selectedIndex !== null && index <= selectedIndex
                  ? "#7B61FF"
                  : "none"
              }
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default LessonMark;
