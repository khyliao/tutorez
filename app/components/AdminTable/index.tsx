import CopyIcon from "@assets/copy.svg";
import EditIcon from "@assets/edit.svg";
import DeleteIcon from "@assets/delete.svg";
import UpDownArrow from "@assets/arrow-y.svg";
import { copyToClipboard } from "@lib/clipboard";
import s from "./AdminTable.module.css";
import { useTheme } from "@hooks/useTheme";

const AdminTable = () => {
  return (
    <div
      className={`${s.scrollbarVisible} transition-colors dark:bg-[#1D1E42]`}
    >
      <table className="w-full min-w-[1040px] transition-colors dark:bg-[#1D1E42] dark:text-white font-montserrat px-4">
        <thead>
          <tr className="h-16 ">
            <th className="px-4">ID</th>
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
          <tr className="h-16 text-center font-medium transition-colors bg-[#F7F6FE] dark:bg-[#26264F]">
            <td className="px-4">
              <div className="inline-flex items-center gap-2">
                <CopyIcon
                  className="cursor-pointer"
                  onClick={() => {
                    copyToClipboard("text");
                  }} //! change in the future
                />
                #20462
              </div>
            </td>
            <td className="px-4">Матвій</td>
            <td className="px-4">Англійська мова</td>
            <td className="px-4">13/05/2022</td>
            <td className="px-4">300</td>
            <td className="px-4">1 год 30 хв</td>
            <td className="px-4">
              <span className="inline-block px-3 py-2 text-[#1F9254] bg-[#D7FFE9] rounded-3xl">
                Активний
              </span>
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
          <tr className="h-16 text-center transition-colors font-medium">
            <td className="px-4">
              <div className="inline-flex items-center gap-2">
                <CopyIcon
                  className="cursor-pointer"
                  onClick={() => {
                    console.log("first");
                  }}
                />
                #20462
              </div>
            </td>
            <td className="px-4">Матвій</td>
            <td className="px-4">Англійська мова</td>
            <td className="px-4">13/05/2022</td>
            <td className="px-4">300</td>
            <td className="px-4">1 год 30 хв</td>
            <td className="px-4">
              <span className="inline-block px-3 py-2 text-[#1F9254] bg-[#D7FFE9] rounded-3xl">
                Активний
              </span>
            </td>
            <td className="px-4 ">
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
          <tr className="h-16 text-center transition-colors font-medium bg-[#F7F6FE] dark:bg-[#26264F]">
            <td className="px-4">
              <div className="inline-flex items-center gap-2">
                <CopyIcon
                  className="cursor-pointer"
                  onClick={() => {
                    console.log("first");
                  }}
                />
                #20462
              </div>
            </td>
            <td className="px-4">Матвій</td>
            <td className="px-4">Англійська мова</td>
            <td className="px-4">13/05/2022</td>
            <td className="px-4">300</td>
            <td className="px-4">1 год 30 хв</td>
            <td className="px-4">
              <span className="inline-block px-3 py-2 text-[#1F9254] bg-[#D7FFE9] rounded-3xl">
                Активний
              </span>
            </td>
            <td className="px-4 ">
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
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
