import { useForm } from "react-hook-form";
import { IAddPaymentForm } from "@/types/form";
import Button from "@components/Button";
import BackArrowIcon from "@assets/back-arrow.svg";
import { showErrorToast, showSuccessToast } from "@utils/toastUtils";
import { PAYMENT_DURATIONS } from "@/constants/paymentDuration";
import { useState, useEffect } from "react";
import { useUpdateStudentPaymentMutation } from "@store/api/studentApi";
import { convertToTimeString } from "@/lib/utils/timeFormatter";

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
  const [duration, setDuration] = useState(1);
  const [updatePayment] = useUpdateStudentPaymentMutation();

  const durations = PAYMENT_DURATIONS.map(({ value }) => value);

  useEffect(() => {
    if (!isSettingsModalOpen) {
      reset();
      setDuration(1);
    }
  }, [isSettingsModalOpen]);

  const onSubmit = async (data: IAddPaymentForm) => {
    if (!oldLogin) {
      showErrorToast("Неможливо оновити платіж без логіна користувача.");
      return;
    }

    data.amount = +data.amount;

    try {
      onClose();
      await updatePayment({ data, login: oldLogin }).unwrap();
      showSuccessToast("Інформація про користувача була успішно оновлена!");
    } catch (error) {
      showErrorToast("Виникла помилка, спробуйте пізніше!");
    } finally {
      reset();
      setDuration(1);
    }
  };

  const {
    handleSubmit,
    reset,
    setValue,
    register,
    formState: { errors },
  } = useForm<IAddPaymentForm>({
    defaultValues: {
      amount: 1,
    },
  });

  const handleDurationClick = (duration: number) => {
    setValue("amount", duration);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 font-montserrat h-full"
        id="addPaymentStudent"
        autoComplete="off"
      >
        <div className="flex justify-between gap-3 h-full">
          <div className="flex flex-col grow h-full">
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
                    className={`placeholder:text-sm md:placeholder:text-base min-w-32 dark:text-white transition-colors dark:bg-[#2F3966] font-medium rounded p-2 cursor-pointer ${
                      value === duration
                        ? "bg-[#5843e6] hover:bg-[#5843e6] text-white dark:bg-[#3c3ec0] dark:hover:bg-[#3c3ec0]"
                        : "hover:bg-[#5356df] hover:text-white bg-inputBgStatic dark:hover:bg-[#5356df]"
                    }`}
                    onClick={() => {
                      handleDurationClick(value);
                      setDuration(value);
                    }}
                  >
                    {label}
                  </div>
                ))}
                <div className="w-full mb-1">
                  <label
                    className="dark:text-white font-medium items-center"
                    htmlFor=""
                  >
                    Введіть своє значення{" "}
                    <span className="block mb-2 text-xs font-medium dark:text-[#d9d9d9]">
                      (1 год 30 хв = 1.5)
                    </span>
                  </label>

                  <input
                    id="amount"
                    maxLength={3}
                    className={`placeholder:text-sm mr-2 text-center md:placeholder:text-base max-w-12 dark:text-white transition-colors font-medium rounded p-2 ${
                      durations.includes(duration)
                        ? "bg-inputBgStatic dark:bg-[#2F3966]"
                        : "bg-[#5843e6] hover:bg-[#5843e6] text-white dark:bg-[#3c3ec0] dark:hover:bg-[#3c3ec0]"
                    }`}
                    {...register("amount", {
                      onChange: (e) => {
                        handleDurationClick(e.target.value);
                        setDuration(e.target.value);
                      },
                      pattern: {
                        value: /^[0-9]+(\.[0-9]+)?$/,
                        message: "Використовуйте лише числа!",
                      },
                    })}
                  />
                  <span className="font-montserrat font-medium dark:text-white ">
                    год
                  </span>
                </div>
              </div>
              {errors.amount && (
                <span className="text-red-500 font-medium text-xs mt-1">
                  {errors.amount.message}
                </span>
              )}
            </div>
            <span className="block ml-auto mt-auto font-medium text-base md:text-lg dark:text-white">
              До зарахування{" "}
              <span className="font-semibold  dark:text-[#b1b2f7]">
                {convertToTimeString(duration)}
              </span>
            </span>
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
