import Image, { StaticImageData } from "next/image";
import Button from "../Button";

interface IAdvertBannerProps {
  title: string;
  description: string;
  descriptionBg?: string;
  img: React.ReactNode;
  className?: string;
  btn?: React.ReactNode;
  subtitle?: string;
}

const AdvertBanner = ({
  title,
  description,
  img,
  className,
  descriptionBg,
  btn,
  subtitle,
}: IAdvertBannerProps) => {
  return (
    <div
      className={`grid xl:max-h-[420px] dark:text-black grid-cols-1 grid-rows-[auto auto auto auto] gap-4 p-4 md:p-8 relative bg-center rounded-[32px] md:grid-cols-2 md:grid-rows-[auto auto] lg:p-10 xl:items-start xl:justify-center lg:gap-3 xl:gap-4 ${className} ${descriptionBg}
  `}
    >
      <div>
        <h3 className='font-manrope text-3xl md:text-4xl lg:text-5xl font-extrabold'>
          {title}
        </h3>
        {subtitle && (
          <span className='text-sm block mt-2 text-[#252525] italic font-manrope'>
            {subtitle}
          </span>
        )}
      </div>
      <div className='w-full flex row-start-1 justify-items-center md:row-start-1 md:row-end-4  md:col-start-2 md:self-center md:grid md:justify-items-end'>
        {img}
      </div>
      <p className='font-manrope text-base lg:text-lg font-medium'>
        {description}
      </p>
      {btn}
    </div>
  );
};

export default AdvertBanner;
