import Medal from "@assets/student/medal.svg";
import VideoSquare from "@assets/student/video-square.svg";
import Ranking from "@assets/student/ranking.svg";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectCurrentUser } from "@/lib/store/api/features/currentUserSlice";

const StudentStats = () => {
  const user = useAppSelector(selectCurrentUser);
  const lessons = user.lessons ?? [];

  const averageMark = (
    lessons.length > 0
      ? lessons.reduce((sum, lesson) => sum + lesson.tutorReview, 0) /
        lessons.length
      : 0
  ).toFixed(2);

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4">
      <div className="p-4 px-5 w-full md:w-[220px] rounded-2xl bg-[#fce9e9] dark:bg-[#eeb4b4]">
        <div className="w-10 h-10 mb-2 flex items-center justify-center bg-white dark:bg-[#f9dede] rounded-full">
          <Medal />
        </div>
        <h3 className="mb-[6px] opacity-60 dark:opacity-80 font-montserrat font-medium text-base leading-6">
          Середня оцінка
        </h3>
        <span className="text-2xl font-semibold font-montserrat leading-5 tracking-wide">
          {averageMark} / 5.00
        </span>
      </div>
      <div className="p-4 px-5 w-full md:w-[220px] rounded-2xl bg-[#e7f9ea] dark:bg-[#d7f6da]">
        <div className="w-10 h-10 mb-2 flex items-center justify-center bg-white dark:bg-[#f5fcf2] rounded-full">
          <VideoSquare />
        </div>
        <h3 className="mb-1 opacity-60 dark:opacity-80 font-montserrat font-medium text-base leading-6">
          Пройдено тем
        </h3>
        <span className="text-2xl font-semibold font-montserrat leading-5 tracking-wide">
          15
        </span>
      </div>
      <div className="p-4 px-5 w-full md:w-[220px] rounded-2xl bg-[#ecf4fc] dark:bg-[#c4e2fe]">
        <div className="w-10 h-10 mb-2 flex items-center justify-center bg-white dark:bg-[#e2ebf8] rounded-full">
          <Ranking />
        </div>
        <h3 className="mb-1 opacity-60 dark:opacity-80 font-montserrat font-medium text-base leading-6">
          Місце в рейтингу
        </h3>
        <span className="text-2xl font-semibold font-montserrat leading-5 tracking-wide">
          43 / 231
        </span>
      </div>
    </div>
  );
};

export default StudentStats;
