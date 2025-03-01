import CopyIcon from "@assets/copy.svg";
import EditIcon from "@assets/edit.svg";
import DeleteIcon from "@assets/delete.svg";
// import UpDownArrow from "@assets/arrow-y.svg";
import s from "./AdminTable.module.css";
import StatusView from "./components/StatusView";
import { IUser } from "@/types/users";
import { showSuccessToast } from "@utils/toastUtils";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectSearchFieldValue } from "@store/api/features/searchFieldSlice";
import { useMemo } from "react";
import { convertToTimeString } from "@/lib/utils/timeFormatter";
import Link from "next/link";

interface IAdminTableProps {
  users: IUser[];
  onEditClick: (login: string) => void;
  onDeleteClick: (login: string) => void;
}

const AdminTable = ({
  users,
  onEditClick,
  onDeleteClick,
}: IAdminTableProps) => {
  const searchFieldLogin = useAppSelector(selectSearchFieldValue);
  // const [sortMode, setSortMode] = useState(null);
  const visibleUsers = useMemo(() => {
    if (!users) return [];

    return users
      .filter(({ login }) =>
        login.toLowerCase().includes(searchFieldLogin.toLowerCase())
      )
      .map(
        ({ login, name, price, status, subject, lessons, balance }, index) => (
          <tr
            key={login}
            className={`h-14 text-center font-medium transition-colors ${
              index % 2 !== 0
                ? "bg-white dark:bg-[#1D1E42]"
                : "bg-[#F7F6FE] dark:bg-[#26264F]"
            }`}
          >
            <td className="px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base">
              <div className="relative inline-flex items-center gap-2">
                <CopyIcon
                  className="cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(login);
                    showSuccessToast(`Логін ${login} успішно скопійовано!`);
                  }}
                />
                <Link
                  href={`/platform/students/${login}`}
                  className="trasition-colors duration-200 hover:text-[#536aee]"
                >
                  {login}
                </Link>
              </div>
            </td>
            <td className="px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base">
              {name}
            </td>
            <td className="px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base">
              {subject}
            </td>
            <td className="px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base">
              {lessons?.length > 0 ? lessons[lessons.length - 1].date : "—"}
            </td>
            <td className="px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base">
              {price}
            </td>
            <td
              className={`px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base ${
                balance > 0
                  ? "text-green-400 dark:text-green-500"
                  : balance < 0
                  ? "text-red-500 dark:text-red-600"
                  : ""
              }`}
            >
              {convertToTimeString(balance)}
            </td>
            <td className="px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base">
              <StatusView status={status} />
            </td>
            <td className="px-1">
              <div className="flex gap-4 justify-center ">
                <button type="button">
                  <EditIcon onClick={() => onEditClick(login)} />
                </button>
                <button type="button" onClick={() => onDeleteClick(login)}>
                  <DeleteIcon />
                </button>
              </div>
            </td>
          </tr>
        )
      );
  }, [searchFieldLogin, users, onDeleteClick, onEditClick]);

  return (
    <div
      className={`${s.scrollbarVisible} transition-colors dark:bg-[#1D1E42]`}
    >
      {!users ? (
        <div className="m-4 font-bold montserrat dark:text-white">
          Завантаження...
        </div>
      ) : (
        <table className="w-full min-w-[1000px] transition-colors dark:bg-[#1D1E42] dark:text-white font-montserrat px-1">
          <thead>
            <tr className="h-14">
              <th className="px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base">
                Логін
              </th>
              <th className="px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base">
                <div className="flex items-center justify-center ">
                  Студент
                  {/* <UpDownArrow className="cursor-pointer" /> */}
                </div>
              </th>
              <th className="px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base">
                <div className="flex items-center justify-center ">
                  Предмет
                  {/* <UpDownArrow className="cursor-pointer" /> */}
                </div>
              </th>
              <th className="px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base">
                <div className="flex items-center justify-center ">
                  Останнє заняття
                  {/* <UpDownArrow className="cursor-pointer" /> */}
                </div>
              </th>
              <th className="px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base">
                <div className="flex items-center justify-center ">
                  Ціна/год
                  {/* <UpDownArrow className="cursor-pointer" /> */}
                </div>
              </th>
              <th className="px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base">
                <div className="flex items-center justify-center ">
                  Баланс годин
                  {/* <UpDownArrow className="cursor-pointer" /> */}
                </div>
              </th>
              <th className="px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base">
                <div className="flex items-center justify-center ">
                  Статус студента
                  {/* <UpDownArrow className="cursor-pointer" /> */}
                </div>
              </th>
              <th className="px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base">
                <div className="flex items-center justify-center ">Дія</div>
              </th>
            </tr>
          </thead>
          <tbody>{visibleUsers}</tbody>
        </table>
      )}
    </div>
  );
};

export default AdminTable;
