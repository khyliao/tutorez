import { ref, set, child, get } from "firebase/database";
import { db } from "./index";

export const getClients = async () => {
  try {
    const clientsRef = ref(db, "clients/");
    const snapshot = await get(clientsRef);

    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  } catch (e) {
    console.error(e);
  }
};
