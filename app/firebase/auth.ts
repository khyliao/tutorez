import bcrypt from "bcryptjs";
import { ref, get, set } from "firebase/database";
import { db } from "./index";

interface User {
  login: string;
  password: string;
  role: string;
}

export const logIn = async (login: string) => {
  try {
    const usersRef = ref(db, `users/${login}`);
    const snapshot = await get(usersRef);

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      throw new Error("User not found");
    }
  } catch (e) {
    console.error(e);
  }
};

export const registerUser = async ({ login, password, role }: User) => {
  try {
    const hashedPassword = await hashPassword(password);
    const userRef = ref(db, `users/${login}`);

    await set(userRef, {
      login,
      password: hashedPassword,
      role,
    });

    console.log("User registered successfully!");
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

export const hashPassword = async (password: string) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};
