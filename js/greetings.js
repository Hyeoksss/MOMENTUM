//Grab the HTML THINGS
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//Handle Duplicated Var
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//event.preventDefault()없어도 잘 실행 되는데 이 부분 생각해보기
//코드가 많아지고 사이트이 컨텐츠들이 많아지면 매번 새로 가져오는 것이 비효율적일 수 있다
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
