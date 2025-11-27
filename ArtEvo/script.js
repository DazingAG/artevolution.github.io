let userValue = "";
let passwordValue = "";

const userData = {
        usernameOrEmailOrPhone: "",
            password: ""
        };

const userInput = document.getElementById("userInput");
const passwordInput = document.getElementById("passwordInput");
const signupBtn = document.getElementById("signupBtn");
const successMsg = document.getElementById("successMessage");

userInput.addEventListener("input", () => {
        userValue = userInput.value;
        });

passwordInput.addEventListener("input", () => {
        passwordValue = passwordInput.value;
        });

signupBtn.addEventListener("click", () => {

userData.usernameOrEmailOrPhone = userValue;
userData.password = passwordValue;

if (userValue === "" || passwordValue === "") {
        alert("Please fill out all fields.");
            return;
            }

successMsg.style.display = "block";

setTimeout(() => {
        window.location.href = "index.html";
            }, 1500);
        });
