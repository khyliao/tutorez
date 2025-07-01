import DashboardMenuLayout from "@components/DashboardMenuLayout";
import Image from "next/image";
import technicalWork from "@assets/technical-work.gif";

const NotFound = () => {
  return (
    <DashboardMenuLayout>
      <div className='w-full flex flex-col items-center justify-center'>
        <h1 className='p-4 mb-6 text-2xl md:text-[40px] text-center font-semibold dark:text-white'>
          В розробці 🛠️
        </h1>
        <Image
          className='w-[400px] h-[200px] rounded-md'
          src={technicalWork}
          alt='Technical work'
        />
      </div>
    </DashboardMenuLayout>
  );
};

export default NotFound;
