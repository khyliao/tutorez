"use client";
import StudentDashboard from "@/app/components/dashboards/Student";
import TutorDashboard from "@components/dashboards/Tutor";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectCurrentUser } from "@store/api/features/currentUserSlice";

const Dashboard = () => {
  const { role } = useAppSelector(selectCurrentUser);

  if (role !== "student") {
    return (
      <>
        <TutorDashboard />
      </>
    );
  }

  return <StudentDashboard />;
};

export default Dashboard;
