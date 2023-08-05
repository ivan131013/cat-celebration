import { useEffect, useState } from "react";
import {
  collection,
  doc,
  DocumentData,
  onSnapshot,
  query,
  QueryDocumentSnapshot,
  where,
} from "firebase/firestore";
import { db } from "../../../services/firebase/firebase";

export const useFCounter = () => {
  const [fCount, setFCount] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, "counter", "respect"),
      (document) => {
        setFCount(document.data().count);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return { fCount };
};
