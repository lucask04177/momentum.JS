const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const geeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    // greeting.innerText = "안녕하시오~? " + username + "씨";
    greeting.innerText = `안녕하시오~? '${username}' 씨`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}


loginForm.addEventListener("submit", onLoginSubmit);