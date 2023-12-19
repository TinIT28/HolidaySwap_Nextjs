import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export const fetchToken = (setTokenFound: any, messaging: any) => {
  return getToken(messaging, {
    vapidKey:
      "BE7kiXjAaMuvp4zkI0sUpaeC0ROTbdgzodnDlcDsT4txBsPRgS4k_B22QpYGfm80i2zlnvbT6vKT-byp4kaKG5Q",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};
export const onMessageListener = (messaging: any) =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
