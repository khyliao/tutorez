import { useState } from "react";
import dynamic from "next/dynamic";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "@/types/form";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useLang } from "@/hooks/useLang";
import FormSelect from "@components/Select";
import Gift from "@assets/gift.svg";
import "./clientForm.css";
import { motion } from "framer-motion";

const TimerLazy = dynamic(() => import("@components/Timer"), {
  loading: () => <p>Loading footer...</p>,
});

const ClientForm = () => {
  const { t, lang } = useLang();
  const isMedia1024 = useMediaQuery(1024);
  const [subject, setSubject] = useState("Математика");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append("subject", subject);

    try {
      setIsLoading(true);
      const response = await fetch("/api/email", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      reset();
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="md:flex pb-14 lg:pb-24 px-3 scroll-mt-24 md:scroll-mt-32 md:items-center md:gap-10 md:px-6 lg:max-w-[1300px] lg:mx-auto"
      id="contacts"
    >
      <div
        className={`${
          !isMedia1024 && "accent-news"
        } mb-10 md:max-w-[400px] lg:max-w-[550px]`}
      >
        <motion.div
          className="relative inline-block lg:mb-0"
          initial={{
            x: -20,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-2 px-6 text-white uppercase font-open-sans tracking-wide font-bold text-base md:text-lg lg:text-2xl leading-5 bg-[#ec1e9a] rounded-[50px] ">
            {t[lang].form.promoNow}
          </span>
          <Gift
            width={isMedia1024 ? 30 : 44}
            height={isMedia1024 ? 34 : 48}
            className="absolute -top-5 -right-2 lg:-top-8 lg:-right-4"
          />
        </motion.div>
        <strong className="block -ml-1 mb-4 lg:mb-8 font-open-sans font-extrabold p-1">
          <motion.span
            className="block  gradient-first-text p-2 pb-0 pt-0 pr-0 text-[50px] lg:text-[70px] xl:text-[80px]"
            initial={{
              x: -20,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
          >
            {t[lang].form.promoTitle[0]}
          </motion.span>
          <motion.span
            className="block gradient-second-text p-2 pt-0 pr-0 text-[56px] leading-[48px] md:leading-[50px] lg:text-[92px] xl:text-[102px] lg:leading-[78px] xl:leading-[86px]"
            initial={{
              x: -20,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.7,
              },
            }}
            viewport={{ once: true }}
          >
            {t[lang].form.promoTitle[1]}
          </motion.span>
        </strong>
        <motion.p
          className="mb-5 text-base md:text-base lg:text-2xl font-bold font-open-sans leading-5"
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1.2,
            },
          }}
          viewport={{ once: true }}
        >
          {t[lang].form.promoDetails}
        </motion.p>
        <TimerLazy />
      </div>
      <motion.form
        className="flex flex-col md:flex-1 items-center px-2 md:px-0"
        onSubmit={handleSubmit(onSubmit)}
        initial={{
          y: 20,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.2,
          },
        }}
        viewport={{ once: true }}
      >
        <h2 className="font-open-sans text-center text-[22px] md:text-xl lg:text-3xl xl:text-4xl font-extrabold leading-7 md:leading-5 mb-5">
          {t[lang].form.formTitle}
        </h2>
        <div className="w-full flex flex-col mb-4">
          <label
            className="font-open-sans text-sm lg:text-base xl:text-lg font-semibold leading-5 text-[#4a4a4a] mb-2"
            htmlFor="name"
          >
            {t[lang].form.fields.name.label} *
          </label>
          <input
            className="h-[48px] lg:h-[54px] p-3 border rounded-lg placeholder:text-[#cccccc]"
            placeholder={t[lang].form.fields.name.placeholder}
            id="name"
            disabled={isLoading}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="mt-1 text-red-500 text-sm md:text-base font-semibold">
              {t[lang].form.fields.name.formError}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col mb-4">
          <label
            className="font-open-sans text-sm lg:text-base xl:text-lg font-semibold leading-5 text-[#4a4a4a] mb-2"
            htmlFor="phone"
          >
            {t[lang].form.fields.phone.label} *
          </label>
          <input
            className="h-[48px] lg:h-[54px] p-3 border rounded-lg placeholder:text-[#cccccc]"
            placeholder={t[lang].form.fields.phone.placeholder}
            id="phone"
            disabled={isLoading}
            {...register("phone", {
              required: true,
              pattern: {
                value: /^\+?[0-9]*$/,
                message: t[lang].form.fields.phone.phoneValidError,
              },
            })}
          />
          {errors.phone && (
            <span className="mt-1 text-red-500 text-sm md:text-base font-semibold">
              {t[lang].form.fields.phone.formError}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col mb-4">
          <label
            className="font-open-sans text-sm lg:text-base xl:text-lg font-semibold leading-5 text-[#4a4a4a] mb-2"
            htmlFor="email"
          >
            {t[lang].form.fields.email.label}
          </label>
          <input
            className="h-[48px] lg:h-[54px] p-3 border rounded-lg placeholder:text-[#cccccc]"
            placeholder={t[lang].form.fields.email.placeholder}
            id="email"
            disabled={isLoading}
            {...register("email")}
          />
        </div>
        <div className="w-full flex flex-col mb-4">
          <label
            className="font-open-sans text-sm lg:text-base xl:text-lg font-semibold leading-5 text-[#4a4a4a] mb-2"
            htmlFor="other"
          >
            {t[lang].form.fields.additionInfo.label}
          </label>
          <input
            className="h-[48px] lg:h-[54px] p-3 border rounded-lg placeholder:text-[#cccccc]"
            placeholder={t[lang].form.fields.additionInfo.placeholder}
            id="other"
            disabled={isLoading}
            {...register("other")}
          />
        </div>
        <div className="w-full flex flex-col mb-6 md:mb-8 ">
          <label
            className="font-open-sans text-sm lg:text-base xl:text-lg font-semibold leading-5 text-[#4a4a4a] mb-2"
            htmlFor="subject"
          >
            {t[lang].form.fields.subject.label}
          </label>
          <FormSelect
            disabled={isLoading}
            subject={subject}
            setSubject={setSubject}
          />
        </div>
        <button
          className="w-[164px] md:w-[176px] xl:w-[200px] inline-block p-3 xl:p-4 text-center font-open-sans text-sm md:text-base lg:text-lg md:font-semibold md:-tracking-tight leading-6 transition-colors duration-300 text-white bg-[#7A5CFA] hover:bg-[#6e4ff8] rounded-lg"
          type="submit"
        >
          {t[lang].form.submitBtn}
        </button>
      </motion.form>
    </section>
  );
};

export default ClientForm;
