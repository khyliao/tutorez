import { ref, query, orderByChild, equalTo, get } from "firebase/database";
import { db } from "../index";

export async function getStudentsByTutor(tutor: string) {
  const usersRef = ref(db, "users");

  try {
    let snapshot;

    const usersQuery = query(usersRef, orderByChild("tutor"), equalTo(tutor));
    snapshot = await get(usersQuery);

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
