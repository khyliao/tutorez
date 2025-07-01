"use client";

import { Suspense } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLoginUserMutation } from "@store/api/userApi";
import { useLang } from "@/hooks/useLang";
import EmailIcon from "@assets/email.svg";
import PasswordIcon from "@assets/password.svg";
import { useAppDispatch } from "@hooks/reduxHooks";
import { setCurrentUser } from "@store/api/features/currentUserSlice";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Inputs = {
  login: string;
  password: string;
};

const Login = () => {
  const { lang, t } = useLang();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const [loginUser, { error }] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.remove("dark");

    const login = searchParams.get("login");
    const password = searchParams.get("password");

    if (login && password) {
      const loginWithGiverUserInfo = async () => {
        try {
          const userInfo = { login, password };
          const res = await loginUser(userInfo).unwrap();

          if (res.error) {
            setApiError("Invalid login or password. Please try again.");
            throw new Error(`No correct details`);
          }

          dispatch(setCurrentUser(userInfo));

          localStorage.setItem("user", JSON.stringify(userInfo));

          router.push("/platform/dashboard");
        } catch (e) {
          console.error(e);
        }
      };

      loginWithGiverUserInfo();
    }

    if (localStorage.getItem("user")) {
      router.push("/platform/dashboard");
    }
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (userCredentials) => {
    try {
      const res = await loginUser(userCredentials);

      if (res.error) {
        setApiError("Invalid login or password. Please try again.");
        throw new Error(`No correct details`);
      }

      const { data } = res;
      dispatch(setCurrentUser(data));

      localStorage.setItem("user", JSON.stringify(userCredentials));

      router.push("/platform/dashboard");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='w-screen h-screen p-4 flex items-center justify-center'>
      <div className='w-96'>
        <div className='font-bungee z-20 tracking-wider text-3xl lg:text-5xl xl:text-6xl pb-6 md:pb-8 border-b text-center border-[#f0f0f5] leading-5 text-[#252222] font-medium'>
          Tutor<span className='text-[#7000FF]'>EZ</span>
        </div>

        <span className='block text-center text-3xl md:text-4xl font-bold tracking-wide my-4 md:my-6 lg:my-8'>
          {t[lang].login.entry}
        </span>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4  '>
            <div className='relative'>
              <EmailIcon
                className='absolute top-1/2 left-4 -translate-y-1/2'
                width={19}
              />
              <input
                className='border min-h-12 w-full tracking-wide pl-12 px-2 rounded-lg border-[#e6e6eb] focus:outline-[#333dff]'
                placeholder={t[lang].login.login}
                type='text'
                {...register("login", { required: "Login is required!" })}
              />
            </div>
            {errors.login && (
              <span className='font-semibold  text-red-600'>
                {errors.login.message}
              </span>
            )}
          </div>
          <div className='mb-1 '>
            <div className='relative'>
              <PasswordIcon
                className='absolute top-1/2 left-4 -translate-y-1/2'
                width={22}
              />
              <input
                className='border min-h-12 w-full tracking-wide pl-12 px-2 rounded-lg border-[#e6e6eb] focus:outline-[#333dff]'
                placeholder={t[lang].login.password}
                type='password'
                {...register("password", { required: "Password is required!" })}
              />
            </div>
            {errors.password && (
              <span className='font-semibold  text-red-600'>
                {errors.password.message}
              </span>
            )}
          </div>
          {apiError && (
            <div className='text-red-600  text-sm font-semibold'>
              {apiError}
            </div>
          )}
          <Link
            href=''
            className='text-[#9292a6] hover:text-[#363638] transition-colors duration-300 mb-4 font-medium font-montserrat tracking-wide'
          >
            {t[lang].login.forgot}
          </Link>

          <button className='px-4 py-3 w-full text-lg rounded-lg font-bold text-white tracking-wide transition-colors duration-300 bg-[#5500ff] hover:bg-[#4000ff] focus:bg-[#4000ff]'>
            {t[lang].login.entry}
          </button>
        </form>
      </div>
    </div>
  );
};

const LoginPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
};

export default LoginPage;
