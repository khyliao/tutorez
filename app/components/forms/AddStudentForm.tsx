import { useForm } from "react-hook-form";
import { IAddStudentForm } from "@/types/form";
import { useRegisterStudentMutation } from "@store/api/studentApi";
import Dropdown from "@components/Dropdown";

const AddStudentForm = () => {
  const [registerStudent] = useRegisterStudentMutation();

  const onSubmit = (data: IAddStudentForm) => {
    registerStudent(data);
    reset();
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
      telegram: "",
      price: "",
      login: "",
      status: "Активний",
      comment: "",
      role: "student",
    },
  });

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
            className="mb-2 text-sm font-bold leading-4 text-[#2E3438]"
          >
            Імʼя *
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
            Предмет *
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
      <div className="flex justify-between gap-3">
        <div className="flex flex-col grow">
          <label
            htmlFor="telegram"
            className="mb-2 text-sm font-bold leading-4 text-[#2E3438]"
          >
            Telegram *
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
        <div className="flex flex-col grow">
          <label
            htmlFor="price"
            className="mb-2 text-sm font-bold leading-4 text-[#2E3438]"
          >
            Ціна/год *
          </label>
          <div>
            <div className="relative">
              <span
                className="hidden md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer"
                onClick={() => {
                  setValue("price", "");
                }}
              >
                x
              </span>
              <input
                id="price"
                className="placeholder:text-sm md:placeholder:text-base bg-inputBgStatic w-full font-medium rounded p-2"
                placeholder="200"
                {...register("price", {
                  required: "Обовʼязкове поле для заповнення!",
                })}
              />
            </div>
            {errors.price && (
              <span className="text-red-500 text-xs mt-1">
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
          className="mb-2 text-sm font-bold leading-4 text-[#2E3438]"
        >
          Логін *
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
              placeholder="matviy304"
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
          htmlFor="status"
          className="mb-2 text-sm font-bold leading-4 text-[#2E3438]"
        >
          Статус студента
        </label>
        <div>
          <div className="relative">
            <Dropdown
              options={["Активний", "Пауза", "Призупинений", "Втрачений"]}
              setValue={setValue}
              field="status"
            />
          </div>
          {errors.status && (
            <span className="text-red-500 text-xs mt-1">
              {errors.status.message}
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
              placeholder="Потрібно скинути додаткові матеріали на завтра"
              {...register("comment")}
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

export default AddStudentForm;
