const Log = ({ account, chatId, tutor, to, from, date, text }: ILogProps) => {
  const ownerStyles = from.username.includes(account)
    ? "bg-[#d7ffa2] dark:bg-[#42d3ff]"
    : "bg-[#b0fdef] dark:bg-[#ecff42]";

  return (
    <li className='p-2 lg:w-auto text-sm md:text-base font-noto-sans bg-[#d9c3f2] transition-colors dark:bg-[#12111b] rounded-lg'>
      <div className='flex flex-wrap gap-1 items-center font-bold mb-1'>
        <div className={`p-1 px-2 dark:text-black rounded-lg ${ownerStyles}`}>
          {from.name} ({from.username})
        </div>
        {"  "}
        ---&gt;{"  "}
        <div className={`p-1 px-2 dark:text-black rounded-lg ${ownerStyles}`}>
          {to.name} ({to.username})
        </div>
      </div>
      <div className='flex flex-col'>
        <h2 className=''>
          <span className='font-bold'>Account:</span> {account}
        </h2>
        <p>
          <span className='font-bold'>Tutor: </span>
          {tutor}
        </p>
        <p className=''>
          <span className='font-bold'>Date:</span> {date}
        </p>
      </div>
      <p>
        {" "}
        <span className='font-bold'>Message:</span> {text}
      </p>
    </li>
  );
};

export interface ILogProps {
  chatId: string;
  account: string;
  from: IUserInfo;
  to: IUserInfo;
  text: string;
  date: string;
  tutor: string;
}

interface IUserInfo {
  name: string;
  username: string;
}

export default Log;
