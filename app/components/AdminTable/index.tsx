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
import { setSearchValue } from "@store/api/features/searchFieldSlice";
import { useAppDispatch } from "@hooks/reduxHooks";
import { useMemo } from "react";
import { convertToTimeString, getCurrentDate } from "@/lib/utils/timeFormatter";
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
  const dispatch = useAppDispatch();
  const searchFieldLogin = useAppSelector(selectSearchFieldValue);
  // const [sortMode, setSortMode] = useState(null);
  const resetSearchInput = () => {
    dispatch(setSearchValue(""));
  };

  const visibleUsers = useMemo(() => {
    if (!users) return [];

    return users
      .filter(({ name }) =>
        name.toLowerCase().includes(searchFieldLogin.toLowerCase())
      )
      .map(
        ({ login, name, price, status, subject, lessons, balance }, index) => (
          <tr
            key={login}
            className={`h-14 text-center font-medium hover:bg-[#9f82f1] dark:hover:bg-[#070606] transition-colors  ${
              lessons && getCurrentDate() === lessons[lessons.length - 1].date
                ? "bg-[#f3d6f7] dark:bg-[#23258a]"
                : index % 2 !== 0
                ? "bg-[#fff] dark:bg-[#1D1E42]"
                : "bg-[#F7F6FE] dark:bg-[#26264F]"
            }  `}
          >
            <td className='px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base'>
              <div className='relative inline-flex items-center gap-2'>
                <CopyIcon
                  className='cursor-pointer w-4 h-4'
                  onClick={() => {
                    navigator.clipboard.writeText(login);
                    showSuccessToast(`Логін ${login} успішно скопійовано!`);
                  }}
                />
                <Link
                  href={`/platform/students/${login}`}
                  className='trasition-colors duration-200 hover:underline p-1 px-2 rounded-md '
                  onClick={resetSearchInput}
                >
                  {login}
                </Link>
              </div>
            </td>
            <td className='px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base'>
              {name}
            </td>
            <td className='px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base'>
              {subject}
            </td>
            <td className='px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base'>
              {lessons?.length > 0 ? lessons[lessons.length - 1].date : "—"}
            </td>
            <td className='px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base'>
              {price}
            </td>
            <td
              className={`px-1 lg:px-3 max-w-16 md:max-w-fit text-sm font-semibold lg:text-base ${
                balance > 0
                  ? "text-green-500"
                  : balance < 0
                  ? "text-red-600"
                  : ""
              }`}
            >
              {convertToTimeString(balance)}
            </td>
            <td className='px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base'>
              <StatusView status={status} />
            </td>
            <td className='px-1'>
              <div className='flex gap-4 justify-center '>
                <button type='button'>
                  <EditIcon onClick={() => onEditClick(login)} />
                </button>
                <button type='button' onClick={() => onDeleteClick(login)}>
                  <DeleteIcon />
                </button>
              </div>
            </td>
          </tr>
        )
      );
  }, [searchFieldLogin, users, onDeleteClick, onEditClick, resetSearchInput]);

  return (
    <div
      className={`${s.scrollbarVisible} transition-colors dark:bg-[#1D1E42]`}
    >
      {!users ? (
        <div className='m-4 font-bold montserrat dark:text-white'>
          Завантаження...
        </div>
      ) : (
        <table className='w-full min-w-[1000px] transition-colors dark:bg-[#1D1E42] dark:text-white font-montserrat px-1'>
          <thead>
            <tr className='h-14'>
              <th className='px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base'>
                Логін
              </th>
              <th className='px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base'>
                <div className='flex items-center justify-center '>
                  Студент
                  {/* <UpDownArrow className="cursor-pointer" /> */}
                </div>
              </th>
              <th className='px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base'>
                <div className='flex items-center justify-center '>
                  Предмет
                  {/* <UpDownArrow className="cursor-pointer" /> */}
                </div>
              </th>
              <th className='px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base'>
                <div className='flex items-center justify-center '>
                  Останнє заняття
                  {/* <UpDownArrow className="cursor-pointer" /> */}
                </div>
              </th>
              <th className='px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base'>
                <div className='flex items-center justify-center '>
                  Ціна/год
                  {/* <UpDownArrow className="cursor-pointer" /> */}
                </div>
              </th>
              <th className='px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base'>
                <div className='flex items-center justify-center '>
                  Баланс годин
                  {/* <UpDownArrow className="cursor-pointer" /> */}
                </div>
              </th>
              <th className='px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base'>
                <div className='flex items-center justify-center '>
                  Статус студента
                  {/* <UpDownArrow className="cursor-pointer" /> */}
                </div>
              </th>
              <th className='px-1 lg:px-3 max-w-16 md:max-w-fit text-sm lg:text-base'>
                <div className='flex items-center justify-center '>Дія</div>
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
