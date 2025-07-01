import PlusIcon from "@assets/plus.svg";

type Props = {
  form?: string;
  btnType?: "button" | "submit";
  type?: string;
  className?: string;
  children: React.ReactNode;
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
          type={btnType}
          onClick={onClick}
          className={`flex transition-colors duration-200 items-center gap-2 text-xs lg:text-sm font-montserrat font-bold p-3 px-3 md:p-3 md:px-4 rounded-lg text-white bg-purplePrimary hover:bg-[#5c3ec8] dark:bg-[#523ae6] ${className}`}
        >
          <PlusIcon className='text-white' /> {children}
        </button>
      );
    case "primaryBtnMode":
      return (
        <button
          form={form}
          className={`leading-5 h-12 text-sm px-3 py-2 md:px-4 md:py-3 md:text-base text-white font-montserrat font-medium rounded-md transition-colors duration-300 bg-purplePrimary hover:bg-[#473dd6] dark:bg-[#523ae6] dark:hover:bg-[#3f34d3] ${className}`}
          type={btnType}
          onClick={onClick}
        >
          {children}
        </button>
      );
    case "advert":
      return (
        <button
          form={form}
          className={`text-left inline w-fit leading-5 h-12 text-sm px-3 py-2 md:px-6 md:py-3 md:text-sm text-white border border-black font-montserrat font-medium rounded-md transition-colors duration-300 bg-[#000] hover:bg-[#ffffffce] hover:text-black dark:bg-[#000000] dark:hover:bg-[#ffffff] ${className}`}
          type={btnType}
          onClick={onClick}
        >
          {children}
        </button>
      );
    case "secondaryBtnMode":
      return (
        <button
          className='leading-5 h-12 text-sm font-montserrat font-medium dark:text-white rounded-md px-0 p-2 md:px-3 md:text-base transition-colors duration-300 md:hover:bg-[#b0a5fa] dark:hover:bg-[#1d1dd1]'
          type='button'
          onClick={onClick}
        >
          {children}
        </button>
      );
    case "variantBtn":
      return (
        <button
          type={btnType}
          className='flex gap-2 w-full items-center leading-5 dark:text-white hover:bg-[#b0a5fa] dark:hover:bg-[#3f34d3] text-sm p-3 md:text-base font-montserrat font-medium rounded-md transition-colors duration-300 '
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};

export default Button;
