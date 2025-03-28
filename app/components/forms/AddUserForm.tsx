import { useForm } from "react-hook-form";
import { ICreateUserForm } from "@/types/form";
import { useRegisterUserMutation } from "@/lib/store/api/userApi";
import Dropdown from "@components/Dropdown";

const AddUserForm = () => {
  const [registerUser] = useRegisterUserMutation();

  const onSubmit = (data: ICreateUserForm) => {
    registerUser(data);
    reset();
  };

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ICreateUserForm>({
    defaultValues: {
      name: "",
      subject: "",
      contact: "",
      role: "tutor",
      comment: "",
      password: "",
      login: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 font-montserrat "
      id="addUser"
      autoComplete="off"
    >
      <div className="flex justify-between gap-3">
        <div className="flex flex-col grow">
          <label
            htmlFor="name"
            className="mb-2 text-sm font-bold leading-4 text-[#2E3438] dark:text-white"
          >
            Імʼя *
          </label>
          <div>
            <div className="relative">
              <span
                className="hidden dark:text-white md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
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
              <span className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col grow">
          <label
            htmlFor="subject"
            className="mb-2 text-sm font-bold leading-4 text-[#2E3438] dark:text-white"
          >
            Предмет *
          </label>
          <div>
            <div className="relative">
              <span
                className="hidden dark:text-white md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
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
              <span className="text-red-500 text-xs mt-1">
                {errors.subject.message}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="contact"
          className="mb-2 text-sm font-bold leading-4 text-[#2E3438] dark:text-white"
        >
          Контакт (tg або телефон) *
        </label>
        <div>
          <div className="relative">
            <span
              className="hidden dark:text-white md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
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
            <span className="text-red-500 text-xs mt-1">
              {errors.contact.message}
            </span>
          )}
        </div>
      </div>
      <hr />
      <div className="flex flex-col">
        <label
          htmlFor="role"
          className="mb-2 text-sm font-bold leading-4 text-[#2E3438] dark:text-white"
        >
          Тип користувача
        </label>
        <div>
          <div className="relative">
            <Dropdown
              options={["tutor", "admin", "superadmin"]}
              field="role"
              setValue={setValue}
            />
          </div>
          {errors.role && (
            <span className="text-red-500 text-xs mt-1">
              {errors.role.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="login"
          className="mb-2 text-sm font-bold leading-4 text-[#2E3438] dark:text-white"
        >
          Логін (tutor) *
        </label>
        <div>
          <div className="relative">
            <span
              className="hidden dark:text-white md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
              onClick={() => {
                setValue("login", "");
              }}
            >
              x
            </span>
            <input
              id="login"
              className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus w-full font-medium rounded p-2"
              placeholder=""
              {...register("login", {
                required: "Обовʼязкове поле для заповнення!",
                minLength: {
                  value: 6,
                  message: "Логін повинен складатися з понад 6 символів!",
                },
              })}
            />
          </div>
          {errors.login && (
            <span className="text-red-500 text-xs mt-1">
              {errors.login.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="mb-2 text-sm font-bold leading-4 text-[#2E3438] dark:text-white"
        >
          Пароль *
        </label>
        <div>
          <div className="relative">
            <span
              className="hidden dark:text-white md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
              onClick={() => {
                setValue("password", "");
              }}
            >
              x
            </span>
            <input
              id="password"
              type="password"
              className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus w-full font-medium rounded p-2"
              placeholder=""
              {...register("password", {
                required: "Обовʼязкове поле для заповнення!",
                minLength: {
                  value: 8,
                  message: "Пароль повинен складатися з понад 8 символів!",
                },
              })}
            />
          </div>
          {errors.password && (
            <span className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="comment"
          className="mb-2 text-sm font-bold leading-4 text-[#2E3438] dark:text-white"
        >
          Замітка
        </label>
        <div>
          <div className="relative">
            <span
              className="hidden dark:text-white md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
              onClick={() => {
                setValue("comment", "");
              }}
            >
              x
            </span>
            <input
              id="comment"
              className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus w-full font-medium rounded p-2"
              placeholder="Готова взяти додатково 2 студентів"
            />
          </div>
          {errors.comment && (
            <span className="text-red-500 text-xs mt-1">
              {errors.comment.message}
            </span>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddUserForm;
