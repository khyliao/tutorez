import { useForm } from "react-hook-form";
import { IAddPaymentForm } from "@/types/form";
import { useUpdateStudentMutation } from "@store/api/studentApi";
import { selectCurrentUser } from "@/lib/store/api/features/currentUserSlice";
import { useSelector } from "react-redux";
import Button from "@components/Button";
import BackArrowIcon from "@assets/back-arrow.svg";
import { showErrorToast, showSuccessToast } from "@/lib/utils/toastUtils";
import { PAYMENT_DURATIONS } from "@/constants/paymentDuration";
import { useState } from "react";

interface IAddPaymentFormProps {
  isSettingsModalOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  oldLogin: string | null;
}

const AddPaymentForm = ({
  isSettingsModalOpen,
  oldLogin,
  onBack,
  onClose,
}: IAddPaymentFormProps) => {
  const [updateStudent] = useUpdateStudentMutation();
  const user = useSelector(selectCurrentUser);
  const [duration, setDuration] = useState(1);

  // const { data: studentInfo } = useGetStudentByLoginQuery(oldLogin, {
  //   skip: !oldLogin,
  // });

  const onSubmit = async (data: IAddPaymentForm) => {
    try {
      console.log(data);
      showSuccessToast("Інформація про коeристувача була успішно оновлена!");

      onClose();
    } catch (e) {
      console.error(e);

      showErrorToast("Виникла помилка, спробуйте пізніше!");
    } finally {
      reset();
    }
  };

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IAddPaymentForm>({
    defaultValues: {
      amount: "",
    },
  });

  // useEffect(() => {
  //   if (studentInfo) {
  //     reset({
  //       amount: "",
  //     });
  //   }
  // }, [studentInfo]);

  const handleDurationClick = (duration: number) => {
    setValue("amount", duration);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 font-montserrat"
        id="addPaymentStudent"
        autoComplete="off"
      >
        <div className="flex justify-between gap-3">
          <div className="flex flex-col grow">
            <label
              htmlFor="amount"
              className="mb-2 text-sm font-bold leading-4 text-[#2E3438] transition-colors dark:text-white"
            >
              Кількість оплачених годин
            </label>
            <div>
              <div className="flex flex-wrap gap-3">
                {PAYMENT_DURATIONS.map(({ label, value }) => (
                  <div
                    key={label}
                    className={`placeholder:text-sm md:placeholder:text-base min-w-32 dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] font-medium rounded p-2 cursor-pointer ${
                      value === duration
                        ? "bg-[#98b8fe] hover:bg-[#98b8fe] dark:bg-[#3c3ec0] dark:hover:bg-[#3c3ec0]"
                        : "hover:bg-[#bacffd] dark:hover:bg-[#6062db] "
                    }`}
                    onClick={() => {
                      handleDurationClick(value);
                      setDuration(value);
                    }}
                  >
                    {label}
                  </div>
                ))}

                <input
                  id="amount"
                  className="placeholder:text-sm md:placeholder:text-base min-w-32 dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] font-medium rounded p-2"
                  placeholder="Свій варіант..."
                  {...register("amount", {
                    maxLength: {
                      value: 2,
                      message:
                        "Неможливе значення! Кількість годин не може складатися з більше ніж двох цифр!",
                    },
                    pattern: {
                      value: /^[0-9]+(\.[0-9]+)?$/,
                      message:
                        "Необхідно вказати лише кількість годин (без слів)!",
                    },
                  })}
                />
              </div>
              {errors.amount && (
                <span className="text-red-500 font-medium text-xs mt-1">
                  {errors.amount.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </form>
      <div>
        <Button onClick={onBack} type="variantBtn">
          <BackArrowIcon className="transition-colors dark:text-white text-black" />{" "}
          Назад
        </Button>
      </div>
    </>
  );
};

export default AddPaymentForm;
