import { getUserFeedback } from "@/lib/db-admin";
import { auth } from "@/lib/firebase-admin";

export default async (req, res) => {
  try {
    const token = req.headers.token;
    const { uid } = await auth.verifyIdToken(token);
    const { feedback } = await getUserFeedback(uid);
    res.status(200).json({ feedback });
  } catch (err) {
    res.status(500).json({ err });
  }
};
