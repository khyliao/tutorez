import CopyIcon from "@assets/copy.svg";
import EditIcon from "@assets/edit.svg";
import DeleteIcon from "@assets/delete.svg";
import UpDownArrow from "@assets/arrow-y.svg";
import s from "./AdminTable.module.css";
import StatusView from "./components/StatusView";
import { IUser } from "@/types/users";

interface IAdminTableProps {
  users: IUser[];
}

const AdminTable = ({ users }: IAdminTableProps) => {
  if (!users) return <span>Завантаження...</span>;

  return (
    <div
      className={`${s.scrollbarVisible} transition-colors dark:bg-[#1D1E42]`}
    >
      <table className="w-full min-w-[1040px] transition-colors dark:bg-[#1D1E42] dark:text-white font-montserrat px-4">
        <thead>
          <tr className="h-16 ">
            <th className="px-4">Логін</th>
            <th className="">
              <div className="flex px-4 items-center justify-center ">
                Студент <UpDownArrow className="cursor-pointer" />
              </div>
            </th>
            <th className="">
              <div className="flex px-4 items-center justify-center ">
                Предмет <UpDownArrow className="cursor-pointer" />
              </div>
            </th>
            <th className="">
              <div className="flex px-4 items-center justify-center ">
                Останнє заняття <UpDownArrow className="cursor-pointer" />
              </div>
            </th>
            <th className="">
              <div className="flex px-4 items-center justify-center ">
                Ціна/год <UpDownArrow className="cursor-pointer" />
              </div>
            </th>
            <th className="">
              <div className="flex px-4 items-center justify-center ">
                Баланс годин <UpDownArrow className="cursor-pointer" />
              </div>
            </th>
            <th className="">
              <div className="flex px-4 items-center justify-center ">
                Статус студента <UpDownArrow className="cursor-pointer" />
              </div>
            </th>
            <th className="">
              <div className="flex px-4 items-center justify-center ">Дія</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(
            (
              { login, name, price, status, subject, comment, balance },
              index
            ) => (
              <tr
                key={login}
                className={`h-16 text-center font-medium transition-colors bg-[#F7F6FE] dark:bg-[#26264F] ${
                  index % 2 !== 0 && "bg-white dark:bg-[#1d1e42]"
                }`}
              >
                <td className="px-4">
                  <div className="inline-flex items-center gap-2">
                    <CopyIcon
                      className="cursor-pointer"
                      // onClick={() => {
                      //   copyToClipboard(login);
                      // }}
                    />
                    {login}
                  </div>
                </td>
                <td className="px-4">{name}</td>
                <td className="px-4">{subject}</td>
                <td className="px-4">13.05.2022</td>
                <td className="px-4">{price}</td>
                <td className="px-4">{balance}</td>
                <td className="px-4">
                  <StatusView status={status} />
                </td>
                <td className="px-4">
                  <div className="flex gap-4 justify-center ">
                    <button type="button">
                      <EditIcon />
                    </button>
                    <button type="button">
                      <DeleteIcon />
                    </button>
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
