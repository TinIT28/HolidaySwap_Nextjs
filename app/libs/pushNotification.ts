// import { getToken } from "firebase/messaging";
// import messaging from "./firebaseConfig";

// export const requestNotificationPermission = async () => {
//   if ("Notification" in window) {
//     const permission = await Notification.requestPermission();

//     if (permission === "granted") {
//       console.log("Notification permission granted.");

//       const token = await getToken(messaging, {
//         vapidKey:
//           "BLmQDlFHNaqPD4qF1hr_9I9Nj0NhGMb48VRVvVWjwExBMqeB6DKahaipG5R5DvY9g3G360QF3MDF1RWzYGrnZmE24",
//       });
//       console.log("+++ token", token);
//     } else if (permission === "denied") {
//       alert('permission === "denied"');
//     }
//   }
// };
