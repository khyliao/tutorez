import { useForm } from "react-hook-form";
import { ICreateUserForm } from "@/types/form";
import { useRegisterUserMutation } from "@/lib/store/api/userApi";
const AddUserForm = () => {
  const [registerUser] = useRegisterUserMutation();

  const onSubmit = (data: ICreateUserForm) => {
    console.log(data);
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
      telegram: "",
      role: "",
      comment: "",
      password: "",
      login: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 font-montserrat"
      id="addUser"
    >
      <div className="flex justify-between gap-3">
        <div className="flex flex-col grow">
          <label
            htmlFor="name"
            className="mb-2 text-sm font-bold leading-4 text-[#2E3438]"
          >
            Імʼя
          </label>
          <div>
            <div className="relative">
              <span
                className="hidden md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
                onClick={() => {
                  setValue("name", "");
                }}
              >
                x
              </span>
              <input
                id="name"
                className="placeholder:text-sm md:placeholder:text-base bg-inputBgStatic w-full font-medium rounded p-2"
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
            className="mb-2 text-sm font-bold leading-4 text-[#2E3438]"
          >
            Предмет
          </label>
          <div>
            <div className="relative">
              <span
                className="hidden md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
                onClick={() => {
                  setValue("subject", "");
                }}
              >
                x
              </span>
              <input
                id="subject"
                className="placeholder:text-sm md:placeholder:text-base bg-inputBgStatic w-full font-medium rounded p-2"
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
          htmlFor="telegram"
          className="mb-2 text-sm font-bold leading-4 text-[#2E3438]"
        >
          Telegram
        </label>
        <div>
          <div className="relative">
            <span
              className="hidden md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
              onClick={() => {
                setValue("telegram", "");
              }}
            >
              x
            </span>
            <input
              id="telegram"
              className="placeholder:text-sm md:placeholder:text-base bg-inputBgStatic w-full font-medium rounded p-2"
              placeholder="@example293"
              {...register("telegram", {
                required: "Обовʼязкове поле для заповнення!",
              })}
            />
          </div>
          {errors.telegram && (
            <span className="text-red-500 text-xs mt-1">
              {errors.telegram.message}
            </span>
          )}
        </div>
      </div>
      <hr />
      <div className="flex flex-col">
        <label
          htmlFor="role"
          className="mb-2 text-sm font-bold leading-4 text-[#2E3438]"
        >
          Тип користувача
        </label>
        <div>
          <div className="relative">
            <span
              className="hidden md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
              onClick={() => {
                setValue("role", "");
              }}
            >
              x
            </span>
            <input
              id="role"
              className="placeholder:text-sm md:placeholder:text-base bg-inputBgStatic w-full font-medium rounded p-2"
              placeholder="Викладач"
              {...register("role", {
                required: "Обовʼязкове поле для заповнення!",
              })}
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
          className="mb-2 text-sm font-bold leading-4 text-[#2E3438]"
        >
          Логін
        </label>
        <div>
          <div className="relative">
            <span
              className="hidden md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
              onClick={() => {
                setValue("login", "");
              }}
            >
              x
            </span>
            <input
              id="login"
              className="placeholder:text-sm md:placeholder:text-base bg-inputBgStatic w-full font-medium rounded p-2"
              placeholder="Викладач"
              {...register("login", {
                required: "Обовʼязкове поле для заповнення!",
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
          className="mb-2 text-sm font-bold leading-4 text-[#2E3438]"
        >
          Пароль
        </label>
        <div>
          <div className="relative">
            <span
              className="hidden md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
              onClick={() => {
                setValue("password", "");
              }}
            >
              x
            </span>
            <input
              id="password"
              type="password"
              className="placeholder:text-sm md:placeholder:text-base bg-inputBgStatic w-full font-medium rounded p-2"
              placeholder="Викладач"
              {...register("password", {
                required: "Обовʼязкове поле для заповнення!",
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
          className="mb-2 text-sm font-bold leading-4 text-[#2E3438]"
        >
          Замітка
        </label>
        <div>
          <div className="relative">
            <span
              className="hidden md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
              onClick={() => {
                setValue("comment", "");
              }}
            >
              x
            </span>
            <input
              id="comment"
              className="placeholder:text-sm md:placeholder:text-base bg-inputBgStatic w-full font-medium rounded p-2"
              placeholder="Готова взяти додатково 2 студентів"
              {...register("comment", {
                required: "Обовʼязкове поле для заповнення!",
              })}
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
