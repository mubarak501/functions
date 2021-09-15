// let main = {
//   mubarak: {
//     username: "mubarak",
//     pass: "123",
//   },
//   abkr: {
//     username: "abkr",
//     pass: "123",
//   },
//   rehan: {
//     username: "rehan",
//     pass: "123",
//   },
//   shahid: {
//     username: "shahid",
//     pass: "123",
//   },
// };
// let userInput = prompt("username");
// console.log(Boolean(main[userInput]));
// if (main[userInput]) {
//   let currentUSer = main[userInput];

//   let check = 0;
//   while (check < 3) {
//     let pass = prompt("Your pass?");
//     if (pass != currentUSer.pass) check++;
//     else {
//       console.log("Your Detials", currentUSer);
//       break;
//     }
//   }
// } else {
//   let newUser = prompt("Enter New User Name");
//   if (main[newUser]) {
//     alert("already exits");
//   } else {
//     while (true) {
//       let newpass = prompt("new password");
//       if (newpass) {
//         let newObj = {
//           username: newUser,
//           pass: newpass,
//         };
//         main[newUser] = newObj;
//         break;
//       }
//     }
//   }
// }
