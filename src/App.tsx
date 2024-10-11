import "./App.css";
import Chat from "./containers/Chat/Chat.tsx";

const App = () => (
  <>
    <Chat />
  </>
);

export default App;
//
// const loader: HTMLElement | null = document.getElementById("loader");
// const formBlock = document.getElementById("formBlock");
// const messagesAllBlock = document.getElementById("messagesAll");
// const baseUrl = "http://146.185.154.90:8000/messages";
// let messages: {
//   _id: string;
//   author: string;
//   datetime: string;
//   message: string;
// }[] = [];
// let date: string = "";
// let messagesNewItem: {
//   _id: string;
//   author: string;
//   datetime: string;
//   message: string;
// }[] = [];
//
// const loaderOnOrOff = (status: string) => {
//   if (loader !== null) {
//     loader.style.display = status;
//   }
// };
//
// const fetchRequest = async (url: string) => {
//   const response = await fetch(url);
//
//   if (!response.ok) {
//     throw new Error(response.status + " " + response.statusText);
//   }
//   return await response.json();
// };
//
// const getAllMessages = async () => {
//   try {
//     loaderOnOrOff("block");
//     messages = await fetchRequest(baseUrl);
//     for (let i = 0; i < messages.length; i++) {
//       let dateFormat = new Date(`${messages[i].datetime}`);
//       dateFormat.toString();
//       const divMessage = document.createElement("div");
//       divMessage.className = "border bg-light rounded mb-3 ps-5 pt-3 pb-3 pe-3";
//       divMessage.id = messages[i]._id;
//       divMessage.innerHTML = `<div class="border-bottom mb-2">
//                 Message № ${i + 1} <span>from: <span class="text-primary"><srtong>${messages[i].author}</srtong></span></span> <div><strong> Date: </strong><span>${dateFormat}</span></div>
//             </div><div class="mt-2 text-break"><strong>Text of message: </strong>${messages[i].message}</div>`;
//       if (messagesAllBlock !== null) {
//         messagesAllBlock.appendChild(divMessage);
//       }
//       window.scrollTo(0, document.body.scrollHeight);
//     }
//     loaderOnOrOff("none");
//   } catch (error) {
//     alert(error);
//     loaderOnOrOff("none");
//   }
// };
//
// getAllMessages();
//
// const form = document.createElement("form");
// form.className =
//   "border border-2 rounded row g-3 ps-5 bg-light justify-content-center";
// form.innerHTML =
//   '<div class="mb-1"><label for="exampleFormControlInput1" class="form-label">Your name</label>\n' +
//   '                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name">\n' +
//   "                </div>\n" +
//   '                <div class="mb-1">\n' +
//   '                    <label for="exampleFormControlTextarea1" class="form-label">Your message:</label>\n' +
//   '                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>\n' +
//   "                </div>\n" +
//   '                <button class="btn btn-primary mb-2 col-2 " type="submit">Send</button>';
// if (formBlock !== null) {
//   formBlock.appendChild(form);
// }
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let authorName = document.getElementById(
//     "exampleFormControlInput1",
//   ) as HTMLInputElement;
//   let messageText = document.getElementById(
//     "exampleFormControlTextarea1",
//   ) as HTMLInputElement;
//   const postNewMessages = async () => {
//     try {
//       loaderOnOrOff("block");
//       await fetch("http://146.185.154.90:8000/messages", {
//         method: "POST",
//         body,
//       });
//       loaderOnOrOff("none");
//     } catch (error) {
//       alert(error);
//       loaderOnOrOff("none");
//     }
//   };
//   const body = new URLSearchParams();
//   if (
//     authorName.value.trim().length === 0 ||
//     messageText.value.trim().length === 0
//   ) {
//     alert("Please enter a correct data");
//   } else {
//     body.append("author", authorName.value);
//     body.append("message", messageText.value);
//   }
//   postNewMessages();
//   form.reset();
// });
//
// const getNewMessages = async () => {
//   try {
//     messagesNewItem = await fetchRequest(baseUrl + `?datetime=${date}`);
//     if (messagesNewItem.length === 0) {
//       console.log("Новых сообщений нет");
//     } else if (messagesNewItem.length !== 0) {
//       messages.push(messagesNewItem[0]);
//       let dateFormatNew = new Date(`${messagesNewItem[0].datetime}`);
//       dateFormatNew.toString();
//       const divMessage = document.createElement("div");
//       divMessage.className = "border bg-light rounded mb-3 ps-5 pt-3 pb-3 pe-3";
//       divMessage.id = messagesNewItem[0]._id;
//       const number = messages.length;
//       divMessage.innerHTML = `<div class="border-bottom mb-2">
//                 Message № ${number} <span>from: <span class="text-primary"><srtong>${messagesNewItem[0].author}</srtong></span></span><div><strong> Date: </strong><span>${dateFormatNew}</span></div>
//             </div><div class="mt-2 text-break"><strong>Text of message: </strong>${messagesNewItem[0].message}</div>`;
//       if (messagesAllBlock !== null) {
//         messagesAllBlock.appendChild(divMessage);
//       }
//       window.scrollTo(0, document.body.scrollHeight);
//     }
//   } catch (error) {
//     alert(error);
//   }
// };
//
// setInterval(() => {
//   messagesNewItem = [];
//   if (messagesAllBlock !== null) {
//     let lastMessage = messagesAllBlock.lastChild as HTMLElement;
//     let idLastMessage = lastMessage.id;
//     for (let i = 0; i < messages.length; i++) {
//       if (messages[i]._id === idLastMessage) {
//         date = messages[i].datetime;
//       }
//     }
//   }
//   getNewMessages();
// }, 3000);
