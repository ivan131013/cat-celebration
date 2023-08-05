import { getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../../services/firebase/firebase";

export const postPayRespect = (count) => {
  return setDoc(doc(db, "counter", "respect"), { count: count });
};

export const getPayRespect = () => {
  return getDoc(doc(db, "counter", "respect"));
};
