//1 Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з 
//полями email і message, у яких зберігай поточні значення полів форми.
//2 Нехай ключем для сховища буде рядок "feedback-form-state".
//3 Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, 
//заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми.
//4 Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль 
//об'єкт з полями email, message та їхніми поточними значеннями.
//5 Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. 
//Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
import { throttle } from "lodash";

const feedbackForm = document.querySelector(".feedback-form");
const formInput = document.querySelector("input");
const formText = document.querySelector("textarea");

const key = "feedback-form-state";
// console.log(formInput);

formUpdate();

feedbackForm.addEventListener("input", throttle(addToStorage, 1000));
feedbackForm.addEventListener("submit", clearForm);


function addToStorage(event) {
    event.preventDefault();
    let newData = event.currentTarget.elements;
    console.dir(newData);

    let dataObj = {};
    
    dataObj.mail = newData.email.value;
    dataObj.text = newData.message.value;
    localStorage.setItem(key, JSON.stringify(dataObj))

}
function clearForm(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(key)
    // if (formInput.value !== "" && formText.value !== "") {
    //     formInput.value = ""
    //     formText.value = ""
    // }
}

function formUpdate() {
    const getData = JSON.parse(localStorage.getItem(key)) || "";
    console.log(getData);
    formInput.value = getData.mail || "";
    formText.value = getData.text || "";

}






// let getEmail = (event) => {
//     if (event.target.type === "email") {
//         return emailValue = event.target.value;
//     }
//     if (event.target.type !== "textarea") {
//         return messageValue = event.target.value;
//     }
//     let formText = {
//         email: emailValue,
//         message: messageValue,
//     }

//     return formText
// }