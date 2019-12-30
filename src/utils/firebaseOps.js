import { firebase } from "./../hooks/withFirebase";
let db = firebase.firestore();
const firebaseOps = {
  getAllChallenges: async () => {
    const dbRef = db.collection("problems");
    const snapshot = await dbRef.get();
    return snapshot.docs.map(doc => doc.data());
  }
};

export { firebaseOps };
