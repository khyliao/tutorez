import { ref, query, orderByChild, equalTo, get } from "firebase/database";
import { db } from "../index";

export async function getUsersByRole(role: string) {
  const usersRef = ref(db, "users");

  try {
    let snapshot;

    if (role === "allRoles") {
      snapshot = await get(usersRef);
    } else {
      const usersQuery = query(usersRef, orderByChild("role"), equalTo(role));
      snapshot = await get(usersQuery);
    }

    if (!snapshot.exists()) {
      return [];
    }

    const users = snapshot.val();
    return users ? Object.values(users) : [];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
