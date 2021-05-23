import firebase from "./firebase-admin";

export async function getAllFeedback(siteId) {
  const snapshot = await firebase
    .collection("feedback")
    .where("siteId", "==", siteId)
    .get();

  const feedbacks = [];

  snapshot.forEach((doc) => {
    feedbacks.push({ id: doc.id, ...doc.data() });
  });

  return feedbacks;
}

export async function getAllSites() {
  let sites = [];

  const snapshot = await firebase
    .collection("sites")
    .get()
    .then((snap) => {
      snap.forEach((doc) => {
        sites.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch((err) => console.log("Error: ", err));


  return sites;
}
