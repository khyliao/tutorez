import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IAddLessonForm } from "@/types/form";
import { showErrorToast, showSuccessToast } from "@utils/toastUtils";
import { PAYMENT_DURATIONS } from "@/constants/paymentDuration";
import { useAddLessonMutation } from "@store/api/studentApi";
import { useLang } from "@hooks/useLang";
import Button from "@components/Button";
import BackArrowIcon from "@assets/back-arrow.svg";
import { reviewMessages } from "@/constants/lessonReviews";
import LessonMark from "../LessonMark";

interface IAddLessonFormProps {
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
}: IAddLessonFormProps) => {
  const [duration, setDuration] = useState(1);
  const [addLesson] = useAddLessonMutation();

  useEffect(() => {
    if (!isSettingsModalOpen) {
      reset();
      setDuration(1);
    }
  }, [isSettingsModalOpen]);

  const handleChooseMark = (value: number) => {
    setValue("tutorReview", value);
  };

  const onSubmit = async (data: IAddLessonForm) => {
    if (!oldLogin) {
      showErrorToast("Неможливо оновити платіж без логіна користувача.");
      return;
    }

    try {
      await addLesson({ data, login: oldLogin }).unwrap();
      showSuccessToast("Інформація про заняття була успішно внесена!");
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
    register,
    watch,
    formState: { errors },
  } = useForm<IAddLessonForm>({
    defaultValues: {
      duration: 1,
      tutorReview: 5,
      comment: "",
    },
  });

  // useEffect(() => {
  //   if (studentInfo) {
  //     reset({
  //       duration: "",
  //     });
  //   }
  // }, [studentInfo]);

  const handleDurationClick = (duration: number) => {
    setValue("duration", duration);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 font-montserrat"
        id="addLessonStudent"
        autoComplete="off"
      >
        <div className="flex flex-col justify-between gap-3">
          <div className="flex flex-col grow">
            <label
              htmlFor="duration"
              className="mb-2 text-sm font-bold leading-4 text-[#2E3438] transition-colors dark:text-white"
            >
              Тривалість заняття
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
              </div>
              {errors.duration && (
                <span className="text-red-500 font-medium text-xs mt-1">
                  {errors.duration.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col grow">
            <label
              htmlFor="duration"
              className="mb-2 text-sm font-bold leading-4 text-[#2E3438] transition-colors dark:text-white"
            >
              Загальний відгук за заняття
            </label>
            <LessonMark onClick={handleChooseMark} />
            <div className="flex flex-col gap-1">
              <span className="block font-medium text-sm text-[#000] dark:text-white">
                {reviewMessages[watch("tutorReview")].label}
              </span>
              <span className="block font-medium text-sm text-[#000] dark:text-white">
                {reviewMessages[watch("tutorReview")].homework}
              </span>
            </div>
          </div>
          <div className="flex flex-col grow">
            <label
              htmlFor="duration"
              className="mb-2 text-sm font-bold leading-4 text-[#2E3438] transition-colors dark:text-white"
            >
              Коментар до заняття
            </label>
            <div>
              <div className="relative">
                <span
                  className="hidden transition-colors dark:text-white md:block font-bold absolute right-1 top-1/2 px-2 py-1 -translate-y-1/2 cursor-pointer "
                  onClick={() => {
                    setValue("comment", "");
                  }}
                >
                  x
                </span>
                <input
                  id="comment"
                  className="placeholder:text-sm md:placeholder:text-base dark:text-white bg-inputBgStatic transition-colors dark:bg-[#2F3966] focus:outline-field-focus w-full font-medium rounded p-2"
                  placeholder="Відволікався постійно на телефон під час заняття"
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
