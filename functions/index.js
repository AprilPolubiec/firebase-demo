const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios").default;
// This is a secure key - the dotfile exists in cloud but is not in git
const { catApiKey } = require("./.config.json");

admin.initializeApp();
let firestore = admin.firestore();

const CAT_ENDPOINT = "https://api.thecatapi.com/v1";

exports.addUserToFirestore = functions.auth.user().onCreate((user) => {
  firestore.collection("users").doc(user.uid).set({
    email: user.email,
    emailVerified: user.emailVerified,
    name: user.displayName,
  });
});

exports.getCatPhoto = functions.firestore
  .document("users/{userId}/cats/{catId}")
  .onCreate((snap, context) => {
    return axios
      .get(`${CAT_ENDPOINT}/images/search?api_key=${catApiKey}`)
      .then((res) => {
        const photo = res.data[0].url;
        return snap.ref.set({ photo }, { merge: true });
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  });
