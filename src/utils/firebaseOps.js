import { firebase } from "./../hooks/withFirebase";
let db = firebase.firestore();
const firebaseOps = {
  getAllChallenges: async () => {
    const dbRef = db.collection("problems");
    const snapshot = await dbRef.get();
    return snapshot.docs.map(doc => doc.data());
  },
  saveCode: async (doc, challengeID, code) => {
    const dbRef = db
      .collection("solutions")
      .doc(doc)
      .collection("userCode")
      .doc(challengeID);
    const data = {
      userCode: code,
      challengeID: challengeID
    };
    await dbRef.set(data);
    return { message: "Code saved sucessfully !" };
  }
};

export { firebaseOps };
