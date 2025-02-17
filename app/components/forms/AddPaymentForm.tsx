import { useForm } from "react-hook-form";
import { IAddPaymentForm } from "@/types/form";
import Button from "@components/Button";
import BackArrowIcon from "@assets/back-arrow.svg";
import { showErrorToast, showSuccessToast } from "@utils/toastUtils";
import { PAYMENT_DURATIONS } from "@/constants/paymentDuration";
import { useState, useEffect } from "react";
import { useUpdateStudentPaymentMutation } from "@store/api/studentApi";

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

  // const { data: studentInfo } = useGetStudentByLoginQuery(oldLogin, {
  //   skip: !oldLogin,
  // });

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

    try {
      await updatePayment({ data, login: oldLogin }).unwrap();
      showSuccessToast("Інформація про користувача була успішно оновлена!");
      onClose();
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
    formState: { errors },
  } = useForm<IAddPaymentForm>({
    defaultValues: {
      amount: 1,
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
                    className={`placeholder:text-sm md:placeholder:text-base min-w-32 dark:text-white transition-colors dark:bg-[#2F3966] font-medium rounded p-2 cursor-pointer ${
                      value === duration
                        ? "bg-[#5843e6] hover:bg-[#5843e6] text-white dark:bg-[#3c3ec0] dark:hover:bg-[#3c3ec0]"
                        : "hover:bg-[#5843e6] hover:text-white bg-inputBgStatic dark:hover:bg-[#5356df]"
                    }`}
                    onClick={() => {
                      handleDurationClick(value);
                      setDuration(value);
                    }}
                  >
                    {label}
                  </div>
                ))}

                {/* <input
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
                /> */}
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
