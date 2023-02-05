import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { firestoreObj } from "./firebase";

const eventsCollection = collection(firestoreObj, "events");

export async function getEvents() {
  const eventsSnapshot = await getDocs(eventsCollection);
  const events = eventsSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return events;
}

export async function getEventItem(id) {
  const eventSnapshot = await getDocs(
    eventsCollection,
    query(where("id", "==", id))
  );

  const event = eventSnapshot.docs[0].data();
  return event;
}
