import { motion } from "framer-motion";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "@/types/form";
import { useLang } from "@/hooks/useLang";

const FormApplication = () => {
  const { t, lang } = useLang();
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
    <form
      className='flex flex-col md:flex-1 items-center px-2 md:px-0'
      onSubmit={handleSubmit(onSubmit)}
    >
      <motion.h2
        initial={{
          x: -10,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1.2,
          },
        }}
        viewport={{ once: true }}
        className='font-open-sans text-center text-[22px] md:text-xl lg:text-3xl xl:text-4xl font-extrabold leading-7 md:leading-5 mb-5'
      >
        {t[lang].form.formTitle}
      </motion.h2>
      <div className='w-full flex flex-col mb-4'>
        <motion.input
          initial={{
            x: -20,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1.2,
            },
          }}
          viewport={{ once: true }}
          className='h-[48px] lg:h-[54px] p-3 border rounded-lg placeholder:text-[#9b9b9b]'
          placeholder={t[lang].form.fields.name.label + "*"}
          id='name'
          disabled={isLoading}
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className='mt-1 text-red-500 text-sm md:text-base font-semibold'>
            {t[lang].form.fields.name.formError}
          </span>
        )}
      </div>
      <div className='w-full flex flex-col mb-4'>
        <motion.input
          initial={{
            x: -20,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1.2,
              delay: 0.1,
            },
          }}
          viewport={{ once: true }}
          className='h-[48px] lg:h-[54px] p-3 border rounded-lg placeholder:text-[#9b9b9b]'
          placeholder={t[lang].form.fields.phone.label + "*"}
          id='phone'
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
          <span className='mt-1 text-red-500 text-sm md:text-base font-semibold'>
            {t[lang].form.fields.phone.formError}
          </span>
        )}
      </div>
      <div className='w-full flex flex-col mb-4'>
        <motion.input
          initial={{
            x: -20,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1.2,
              delay: 0.2,
            },
          }}
          viewport={{ once: true }}
          className='h-[48px] lg:h-[54px] p-3 border rounded-lg placeholder:text-[#9b9b9b]'
          placeholder={t[lang].form.fields.email.label}
          id='email'
          disabled={isLoading}
          {...register("email")}
        />
      </div>
      <div className='w-full flex flex-col mb-4'>
        <motion.input
          initial={{
            x: -20,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1.2,
              delay: 0.3,
            },
          }}
          viewport={{ once: true }}
          className='h-[48px] lg:h-[54px] p-3 border rounded-lg placeholder:text-[#9b9b9b]'
          placeholder={t[lang].form.fields.additionInfo.placeholder}
          id='other'
          disabled={isLoading}
          {...register("other")}
        />
      </div>
      <motion.button
        initial={{
          y: 20,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.2,
            delay: 0.2,
          },
        }}
        viewport={{ once: true }}
        className='w-[164px] md:w-[176px] xl:w-[200px] inline-block p-3 xl:p-4 text-center font-semibold tracking-wide font-open-sans text-sm md:text-base lg:text-lg md:font-semibold md:-tracking-tight leading-6 transition-colors duration-300 text-white bg-[#000000] hover:bg-[#19191b]  rounded-lg'
        type='submit'
      >
        {t[lang].form.submitBtn}
      </motion.button>
    </form>
  );
};

export default FormApplication;
