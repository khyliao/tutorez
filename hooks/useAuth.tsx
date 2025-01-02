import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLoginUserMutation } from "@store/api/userApi";
import { useAppDispatch } from "@hooks/reduxHooks";
import { setCurrentUser } from "@store/api/features/currentUserSlice";

const useAuth = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [loginUser] = useLoginUserMutation();

  useEffect(() => {
    const user = localStorage.getItem("user") || "";

    if (!user) {
      router.push("/login");
      return;
    }

    const userCredentials = JSON.parse(user);

    const logIn = async () => {
      try {
        const res = await loginUser(userCredentials);
        dispatch(setCurrentUser(res.data));
        setIsUserLoading(false);
      } catch (e) {
        router.push("/login");
      }
    };

    logIn();
  }, [router, loginUser, dispatch]);

  return { isUserLoading };
};

export default useAuth;
