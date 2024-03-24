const admin = require("firebase-admin");

// Initialize firebase admin SDK

const serviceAccount = require("../quickfoot-e9b1f-firebase-adminsdk-n94fq-982f0580f9.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://quickfoot-e9b1f.appspot.com",
});
// Cloud storage
const bucket = admin.storage().bucket();

module.exports = {
  bucket,
};
