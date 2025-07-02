import { convertToTimeString } from "@/lib/utils/timeFormatter";

interface IBalanceBar {
  balance: number;
  children?: React.ReactNode;
}

const BalanceBar = ({ balance, children }: IBalanceBar) => {
  return (
    <div
      className={`inline-flex items-center flex-wrap text-base text-white md:text-base font-bold font-montserrat
  shadow-lessonCardInfoMobile dark:shadow-lessonCardInfoMobileDark 
  lg:shadow-lessonCardInfoTabletAndMore dark:lg:shadow-lessonCardInfoTabletAndMoreDark 
  rounded-lg bg-[#151515] p-3`}
    >
      <p>
        Поточний баланс <br className='hide-br-on-small' /> годин:{" "}
        <span
          className={`pl-2 
    ${
      balance > 0
        ? "text-green-400 dark:text-green-500"
        : "text-red-500 dark:text-red-600"
    }
  `}
        >
          {convertToTimeString(balance)}
        </span>
      </p>

      {children && <div className='ml-4'>{children}</div>}
    </div>
  );
};

export default BalanceBar;
