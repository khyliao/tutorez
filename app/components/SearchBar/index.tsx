import LoupeIcon from "@assets/loupe.svg";
import { useAppDispatch } from "@hooks/reduxHooks";
import { setSearchValue } from "@store/api/features/searchFieldSlice";

const SearchBar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="relative">
        <LoupeIcon className="absolute top-1/2 text-[#575757] transition-colors -translate-y-1/2 left-2 dark:text-white" />
        <input
          className="p-2 pl-8 font-montserrat transition-colors text-sm lg:text-base font-medium text-[#575757] dark:text-white border border-[#9E9E9E] focus:outline-[#515151] rounded-lg dark:border-white dark:bg-transparent dark:placeholder:text-[#dbdada]"
          type="text"
          onChange={(e) => {
            dispatch(setSearchValue(e.target.value));
          }}
          placeholder="Анастасія"
        />
      </div>
    </div>
  );
};

export default SearchBar;
