import { ReactNode } from "react";

interface ITitleProps {
  className?: string;
  children: ReactNode;
}

const Title = ({ className, children }: ITitleProps) => {
  return (
    <h2
      className={`text-xl text-center md:text-left md:text-2xl font-montserrat font-bold ${className}`}
    >
      {children}
    </h2>
  );
};

export default Title;
