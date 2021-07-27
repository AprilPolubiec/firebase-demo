const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios").default;

let firestore = admin.firestore();
// This is a secure key - the dotfile exists in cloud but is not in git
const { catApiKey } = require("./.config.json");

const CAT_ENDPOINT = "https://api.thecatapi.com/v1";

exports.addUserToFirestore = functions.auth.user().onCreate((user) => {
  firestore
    .collection("users")
    .doc(user.uid)
    .set({
      email: user.email,
      emailVerified: user.emailVerified,
      name: user.displayName,
    });
});

// exports.getCatPhoto = functions.https.onCall((data, context) => {
//   console.log("Received request: ", data);
//   return axios
//     .get(`${CAT_ENDPOINT}/images/search?api_key=${catApiKey}`)
//     .then((res) => {
//       const photo = res[0].url;
//       return photo;
//     })
//     .catch((error) => error);
// });
