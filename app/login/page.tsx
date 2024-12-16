"use client";
import bcrypt from "bcryptjs";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { logIn, registerUser, hashPassword } from "@firebase/auth";
import { useLang } from "@/hooks/useLang";
import EmailIcon from "@assets/email.svg";
import PasswordIcon from "@assets/password.svg";

type Inputs = {
  login: string;
  password: string;
};

const Login = () => {
  const { lang, t } = useLang();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  // const checkUserDetailsByLogIn = async (
  //   userInputPassword: string,
  //   hashedPassword: string
  // ): Promise<boolean> => {
  //   return await bcrypt.compare(userInputPassword, hashedPassword);
  // };

  // const checkUserDetailsByLogIn = (
  //   userInputDetails: Inputs,
  //   userCredential: Inputs
  // ) => {
  //   console.log(userInputDetails, userCredential);

  //   if (
  //     userInputDetails.login === userCredential.login &&
  //     userInputDetails.password === userCredential.password
  //   ) {
  //     console.log(userInputDetails, userCredential);
  //     return true;
  //   }
  // };

  const onSubmit: SubmitHandler<Inputs> = async ({ login, password }) => {
    // const hashedPassword = await hashPassword(password);
    // const userInputDetails = { login, password: hashedPassword };
    // const userCredential = await logIn(login);
    // const res = await registerUser({
    //   login: "sanya",
    //   password: "sanya",
    //   role: "root",
    // });
    // console.log(res);
    // const isUserDetailsCorrect = checkUserDetailsByLogIn(
    //   userInputDetails.password,
    //   userCredential.password
    // );
    // console.log(isUserDetailsCorrect);
    // console.log(userCredential);
    // if (!isUserDetailsCorrect) {
    //   return `No correct details`;
    // }
    // router.push("/dashboard");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-96">
        <div className="font-bungee z-20 tracking-wider text-2xl lg:text-3xl xl:text-6xl pb-8 border-b text-center border-[#f0f0f5] leading-5 text-[#252222] font-medium">
          Tutor<span className="text-[#7000FF]">EZ</span>
        </div>

        <span className="block text-center text-4xl font-bold tracking-wide my-8">
          {t[lang].login.placeholder}
        </span>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4  ">
            <div className="relative">
              <EmailIcon
                className="absolute top-1/2 left-4 -translate-y-1/2"
                width={19}
              />
              <input
                className="border min-h-12 w-full tracking-wide pl-12 px-2 rounded-lg border-[#e6e6eb] focus:outline-[#333dff]"
                placeholder="Login"
                type="text"
                {...register("login", { required: "Login is required!" })}
              />
            </div>
            {errors.login && (
              <span className="font-semibold  text-red-600">
                {errors.login.message}
              </span>
            )}
          </div>
          <div className="mb-1 ">
            <div className="relative">
              <PasswordIcon
                className="absolute top-1/2 left-4 -translate-y-1/2"
                width={22}
              />
              <input
                className="border min-h-12 w-full tracking-wide pl-12 px-2 rounded-lg border-[#e6e6eb] focus:outline-[#333dff]"
                placeholder="Password"
                type="password"
                {...register("password", { required: "Password is required!" })}
              />
            </div>
            {errors.password && (
              <span className="font-semibold  text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>

          <Link
            href=""
            className="text-[#9292a6] hover:text-[#363638] transition-colors duration-300 mb-7 font-medium font-montserrat tracking-wide"
          >
            Forgot your password?
          </Link>
          <button className="px-4 py-3 w-full text-lg rounded-lg font-bold text-white tracking-wide transition-colors duration-300 bg-[#5500ff] hover:bg-[#4000ff] focus:bg-[#4000ff]">
            {t[lang].login.placeholder}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
