import PlusIcon from "@assets/plus.svg";

type Props = {
  form?: string;
  btnType?: "button" | "submit";
  type?: string;
  className?: string;
  children: string;
  onClick?: () => void;
};

const Button = ({
  onClick,
  form,
  btnType = "button",
  type,
  className,
  children,
}: Props) => {
  switch (type) {
    case "purpleIcon":
      return (
        <button
          type="button"
          onClick={onClick}
          className={`flex transition-colors duration-200 items-center gap-2 text-sm font-montserrat font-bold p-3 px-4 rounded-lg text-white bg-purplePrimary hover:bg-[#5c3ec8] dark:text-[#1D1E42] bg-text ${className}`}
        >
          <PlusIcon className="dark:text-[#1D1E42] text-white" /> {children}
        </button>
      );
    case "primaryBtnMode":
      return (
        <button
          form={form}
          className="leading-5 text-sm px-3 py-2 md:px-4 md:py-3 md:text-base text-white font-montserrat font-medium rounded-md transition-colors duration-300 bg-purplePrimary hover:bg-[#473dd6]"
          type={btnType}
          onClick={onClick}
        >
          {children}
        </button>
      );
    case "secondaryBtnMode":
      return (
        <button
          className="leading-5 text-sm font-montserrat font-medium rounded-md px-0 p-2 md:px-3 md:text-base transition-colors duration-300 md:hover:bg-[#d6d4f7]"
          type="button"
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};

export default Button;
