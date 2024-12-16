import PlusIcon from "@assets/plus.svg";

type Props = {
  type: string;
  className: string;
  children: React.ReactNode;
};

const Button = ({ type, className, children }: Props) => {
  switch (type) {
    case "purpleIcon":
      return (
        <button
          type="button"
          className={`flex items-center gap-2 text-sm font-montserrat font-bold px-3 py-2 rounded-lg text-[#1D1E42] bg-text ${className}`}
        >
          <PlusIcon className="text-[#1D1E42]" /> {children}
        </button>
      );
    case "purpleDarkIcon":
      return (
        <button
          type="button"
          className="flex items-center gap-2 text-sm font-montserrat font-bold px-3 py-2 rounded-lg text-white bg-purplePrimary"
        >
          <PlusIcon className="text-white" />
          {children}
        </button>
      );
    case "light":
      return <button type="button">{children}</button>;
  }
};

export default Button;
