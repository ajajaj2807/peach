import db from "@/lib/firebase-admin";

export default async (_, res) => {
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

  res.status(200).json({ sites });
};
