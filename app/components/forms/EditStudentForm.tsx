import { useForm } from "react-hook-form";
import { IEditStudentForm } from "@/types/form";
import {
  useGetStudentByLoginQuery,
  useUpdateStudentMutation,
} from "@store/api/studentApi";
import Dropdown from "@components/Dropdown";
import { useEffect } from "react";
import { selectCurrentUser } from "@/lib/store/api/features/currentUserSlice";
import { useSelector } from "react-redux";
import Button from "@components/Button";
import CalendarIcon from "@assets/calendar.svg";
import EditPenIcon from "@assets/edit-pen.svg";
import { showErrorToast, showSuccessToast } from "@utils/toastUtils";

interface IEditStudentProps {
  isSettingsModalOpen: boolean;
  onClose: () => void;
  onAddPayment: () => void;
  onAddLesson: () => void;
  oldLogin: string | null;
}

const EditStudent = ({
  isSettingsModalOpen,
  onAddPayment,
  onAddLesson,
  oldLogin,
  onClose,
}: IEditStudentProps) => {
  const [updateStudent] = useUpdateStudentMutation();
  const user = useSelector(selectCurrentUser);

  const { data: studentInfo } = useGetStudentByLoginQuery(oldLogin, {
    skip: !oldLogin,
  });

  const onSubmit = async (data: IEditStudentForm) => {
    const res = await updateStudent({ body: data, oldLogin });

    if ("error" in res) {
      showErrorToast("Виникла помилка, спробуйте пізніше!");
    } else {
      showSuccessToast("Інформація про користувача була успішно оновлена!");
      reset();
      onClose();
    }
  };

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IEditStudentForm>({
    defaultValues: {
      name: "",
      subject: "",
      contact: "",
      price: "",
      status: "Активний",
      comment: "",
      role: "student",
      tutor: user.login,
      balance: 0,
    },
  });

  useEffect(() => {
    if (studentInfo) {
      reset({
        name: studentInfo.name,
        subject: studentInfo.subject,
        contact: studentInfo.contact,
        price: studentInfo.price,
        status: studentInfo.status,
        comment: studentInfo.comment,
        role: "student",
        tutor: user?.login || "",
        balance: studentInfo.balance,
      });
    }
  }, [studentInfo, reset, user?.login]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 font-montserrat"
        id="editStudent"
        autoComplete="off"
      >
        <div className="flex justify-between gap-3">
          <div className="flex flex-col grow">
            <label
              htmlFor="name"
              className="mb-2 text-sm font-bold leading-4 text-[#2E3438] transition-colors dark:text-white"
            >
              Імʼя *
            </label>
            <div>
              <div className="relative">
                <span
                  className="hidden transition-colors dark:text-white md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
                  onClick={() => {
                    setValue("name", "");
                  }}
                >
                  x
                </span>
                <input
                  id="name"
                  className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus w-full font-medium rounded p-2"
                  placeholder="Володимир"
                  {...register("name", {
                    minLength: {
                      value: 3,
                      message: "Імʼя повинно складатися з понад 3 символів!",
                    },

                    required: "Обовʼязкове поле для заповнення!",
                  })}
                />
              </div>
              {errors.name && (
                <span className="text-red-500 font-medium text-xs mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col grow">
            <label
              htmlFor="subject"
              className="mb-2 text-sm font-bold leading-4 text-[#2E3438] transition-colors dark:text-white"
            >
              Предмет *
            </label>
            <div>
              <div className="relative">
                <span
                  className="hidden transition-colors dark:text-white md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
                  onClick={() => {
                    setValue("subject", "");
                  }}
                >
                  x
                </span>
                <input
                  id="subject"
                  className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus w-full font-medium rounded p-2"
                  placeholder="Англійська мова"
                  {...register("subject", {
                    required: "Обовʼязкове поле для заповнення!",
                  })}
                />
              </div>
              {errors.subject && (
                <span className="text-red-500 font-medium text-xs mt-1">
                  {errors.subject.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <div className="flex flex-col grow">
            <label
              htmlFor="contact"
              className="mb-2 text-sm font-bold leading-4 text-[#2E3438] transition-colors dark:text-white"
            >
              Контакт (tg або телефон) *
            </label>
            <div>
              <div className="relative">
                <span
                  className="hidden transition-colors dark:text-white md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
                  onClick={() => {
                    setValue("contact", "");
                  }}
                >
                  x
                </span>
                <input
                  id="contact"
                  className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus w-full font-medium rounded p-2"
                  placeholder="@example293"
                  {...register("contact", {
                    minLength: {
                      value: 3,
                      message: "Контакт повинен складатися з понад 3 символів!",
                    },
                    pattern: {
                      value: /^@?[a-zA-Z0-9_]+$/,
                      message:
                        "Контакт повинен складатися лише з англійських літер, чисел, або підчеркування",
                    },
                    required: "Обовʼязкове поле для заповнення!",
                  })}
                />
              </div>
              {errors.contact && (
                <span className="text-red-500 font-medium text-xs mt-1">
                  {errors.contact.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col grow">
            <label
              htmlFor="price"
              className="mb-2 text-sm font-bold leading-4 text-[#2E3438] transition-colors dark:text-white"
            >
              Ціна/год *
            </label>
            <div>
              <div className="relative">
                <span
                  className="hidden transition-colors dark:text-white md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
                  onClick={() => {
                    setValue("price", "");
                  }}
                >
                  x
                </span>
                <input
                  id="price"
                  className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus w-full font-medium rounded p-2"
                  placeholder="200"
                  {...register("price", {
                    required: "Обовʼязкове поле для заповнення!",
                  })}
                />
              </div>
              {errors.price && (
                <span className="text-red-500 font-medium text-xs mt-1">
                  {errors.price.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <hr />

        <div className="flex flex-col">
          <label
            htmlFor="status"
            className="mb-2 text-sm font-bold leading-4 text-[#2E3438] transition-colors dark:text-white"
          >
            Статус користувача
          </label>
          <div>
            <div className="relative">
              <Dropdown
                oldStatus={studentInfo?.status || "Активний"}
                options={["Активний", "Призупинений", "Втрачений"]}
                setValue={setValue}
                field="status"
              />
            </div>
            {errors.status && (
              <span className="text-red-500 font-medium text-xs mt-1">
                {errors.status.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="comment"
            className="mb-2 text-sm font-bold leading-4 text-[#2E3438] transition-colors dark:text-white"
          >
            Замітка
          </label>
          <div>
            <div className="relative">
              <span
                className="hidden transition-colors dark:text-white md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
                onClick={() => {
                  setValue("comment", "");
                }}
              >
                x
              </span>
              <input
                id="comment"
                className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus w-full font-medium rounded p-2"
                placeholder="Потрібно скинути додаткові матеріали на завтра"
                {...register("comment")}
              />
            </div>
            {errors.comment && (
              <span className="text-red-500 font-medium text-xs mt-1">
                {errors.comment.message}
              </span>
            )}
          </div>
        </div>
      </form>
      <div>
        <Button onClick={onAddLesson} type="variantBtn">
          <CalendarIcon className="dark:fill-white" />
          Додати заняття
        </Button>
        <Button onClick={onAddPayment} type="variantBtn">
          <EditPenIcon className="dark:fill-white" />
          Додати платіж
        </Button>
      </div>
    </>
  );
};

export default EditStudent;
