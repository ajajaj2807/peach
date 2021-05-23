import { compareDesc, parseISO } from "date-fns";
import { db } from "./firebase-admin";

export async function getAllFeedback(siteId) {
  try {
    const snapshot = await db
      .collection("feedback")
      .where("siteId", "==", siteId)
      .get();

    const feedbacks = [];

    snapshot.forEach((doc) => {
      feedbacks.push({ id: doc.id, ...doc.data() });
    });

    feedbacks.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    return { feedback: feedbacks };
  } catch (err) {
    return { err };
  }
}

export async function getAllSites() {
  try {
    let sites = [];
    const snapshot = await db
      .collection("sites")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          sites.push({ id: doc.id, ...doc.data() });
        });
      })
      .catch((err) => console.log("Error: ", err));

    return { sites };
  } catch (err) {
    return { error };
  }
}

export async function getUserSites(userId) {
  let sites = [];
  const snapshot = await db
    .collection("sites")
    .where("author", "==", userId)
    .get()
    .then((snap) => {
      snap.forEach((doc) => {
        sites.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch((err) => console.log("Error: ", err));

  return { sites };
}
