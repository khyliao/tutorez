import DashboardMenuLayout from "@components/DashboardMenuLayout";

const NotFound = () => {
  return (
    <DashboardMenuLayout>
      <h1 className="p-4 h-full my-auto flex-grow text-2xl md:text-[40px] text-center font-semibold">
        Сторінка не знайдена :(
      </h1>
    </DashboardMenuLayout>
  );
};

export default NotFound;
