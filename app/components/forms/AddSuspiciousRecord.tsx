import { useForm } from "react-hook-form";
import { IAddStudentForm } from "@/types/form";
import { useRegisterStudentMutation } from "@store/api/studentApi";
import Dropdown from "@components/Dropdown";
import { useEffect, useState } from "react";
import { selectCurrentUser } from "@store/api/features/currentUserSlice";
import { useSelector } from "react-redux";
import CopyIcon from "@assets/copy.svg";
import { showErrorToast, showSuccessToast } from "@utils/toastUtils";

interface UserDetails {
  login: string;
  password: string;
}

interface IAddStudentFormProps {
  isSettingsModalOpen: boolean;
  onAddStudent?: () => void;
}

const AddStudentForm = ({
  isSettingsModalOpen,
  onAddStudent,
}: IAddStudentFormProps) => {
  const [copied, setCopied] = useState(false);
  const [registerStudent, { isLoading }] = useRegisterStudentMutation();
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const user = useSelector(selectCurrentUser);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IAddStudentForm>({
    defaultValues: {
      name: "",
      subject: "",
      contact: "",
      price: "",
      login: "",
      category: "",
      status: "Активний",
      comment: "",
      role: "student",
      tutor: user.login,
      balance: 0,
      payments: [],
    },
  });

  const onSubmit = async (data: IAddStudentForm) => {
    if (Object.keys(errors).length) {
      return;
    }

    try {
      const res = await registerStudent(data).unwrap();
      onAddStudent && onAddStudent();

      showSuccessToast("Студент успішно доданий!");

      setUserDetails(res);
      reset();
    } catch (e: any) {
      showErrorToast(e.data);
    }
  };

  useEffect(() => {
    if (!isSettingsModalOpen) {
      setUserDetails(null);
    }
  }, [isSettingsModalOpen]);

  if (userDetails) {
    return (
      <div className="font-montserrat font-medium dark:text-white">
        <h2 className="font-bold mb-1">Користувач успішно створений!</h2>
        <p className="">
          Використайте наступне повідомлення як шаблон для відправки
          студенту/батькам.
        </p>
        <div className="relative p-3 my-2 bg-[#e9edff] dark:bg-[#1d295e] rounded">
          <p>
            Тут ви можете ознайомитися з поточною успішністю в навчанні,
            прогресом виконання домашніх завдань, моїми особистими відгуками на
            рахунок занять та деталями на рахунок оплат.
            <br />
            Перейдіть за посиланням{" "}
            <a
              className="text-blue-800 dark:text-blue-400 font-medium hover:underline"
              target="_blank"
              href="http://tutorez.com.ua"
            >
              http://tutorez.com.ua
            </a>{" "}
            та у верхньому правому куточку увійдіть в кабінет як студент за
            наступними деталями:
            <br />
            Логін - {userDetails.login} <br />
            Пароль - {userDetails.password}
          </p>
          <div className="relative">
            <CopyIcon
              className="absolute right-3 bottom-3 scale-150 cursor-pointer text-[#5e5e5e] dark:text-[#cabffa]"
              onClick={() => {
                copyToClipboard(
                  `Тут ви можете ознайомитися з поточною успішністю в навчанні, прогресом виконання домашніх завдань, моїми особистими відгуками на рахунок занять та деталями на рахунок оплат.
Перейдіть за посиланням http://tutorez.com.ua та у верхньому правому куточку увійдіть в кабінет як студент за наступними деталями:
Логін - ${userDetails.login} 
Пароль - ${userDetails.password}`
                );
              }}
            />
            {copied && (
              <div className="absolute right-0 bottom-0 p-2 bg-[#000] text-white text-xs rounded">
                Скопійовано!
              </div>
            )}
          </div>
        </div>
        <span className="text-red-600 dark:text-red-500 font-bold text-base">
          Варто відразу відправити це повідомлення студенту, в разі закриття
          вікна ці дані втрачаються назавжди!
        </span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 font-montserrat"
      id="addStudent"
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
                className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus  w-full font-medium rounded p-2 md:pr-7"
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
            htmlFor="contact"
            className="mb-2 text-sm font-bold leading-4 text-[#2E3438] transition-colors dark:text-white"
          >
            Контакт *
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
                className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus w-full font-medium rounded p-2 md:pr-7"
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
                type="number"
                className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus w-full font-medium rounded p-2 md:pr-7"
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

      <div className="flex justify-between gap-3">
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
                className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus w-full font-medium rounded p-2 md:pr-7"
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
        <div className="flex flex-col grow">
          <label
            htmlFor="category"
            className="mb-2 text-sm font-bold leading-4 text-[#2E3438] transition-colors dark:text-white"
          >
            Категорія учня *
          </label>
          <div>
            <div className="relative">
              <span
                className="hidden transition-colors dark:text-white md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
                onClick={() => {
                  setValue("category", "");
                }}
              >
                x
              </span>
              <input
                id="category"
                className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus w-full font-medium rounded p-2 md:pr-7"
                placeholder="6 клас / 2 курс / дорослий"
                {...register("category", {
                  required: "Обовʼязкове поле для заповнення!",
                })}
              />
            </div>
            {errors.category && (
              <span className="text-red-500 font-medium text-xs mt-1">
                {errors.category.message}
              </span>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col">
        <label
          htmlFor="login"
          className="mb-2 text-sm font-bold leading-4 text-[#2E3438] transition-colors dark:text-white"
        >
          Логін *
        </label>
        <div>
          <div className="relative">
            <span
              className="hidden transition-colors dark:text-white md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
              onClick={() => {
                setValue("login", "");
              }}
            >
              x
            </span>
            <input
              id="login"
              className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus w-full font-medium rounded p-2 md:pr-7"
              placeholder="matviy304"
              {...register("login", {
                required: "Обовʼязкове поле для заповнення!",
                minLength: {
                  value: 6,
                  message: "Логін повинен складатися з понад 6 символів!",
                },
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message:
                    "Логін повинен складатися лише з англійських літер та чисел",
                },
              })}
            />
          </div>
          {errors.login && (
            <span className="text-red-500 font-medium text-xs mt-1">
              {errors.login.message}
            </span>
          )}
        </div>
      </div>
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
              className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus w-full font-medium rounded p-2 md:pr-7"
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
  );
};

export default AddStudentForm;
