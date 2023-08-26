// const logInId = document.querySelector("#account");

// const logInPw = document.querySelector("#password");

// const logInBtn = document.querySelector("#login");

// const logInId = document.getElementById("account");
// const logInPw = document.getElementById("password");
// const logInBtn = document.getElementById("login");

const a = document.querySelector("div");
console.log(a);

function onLoginSubmit(event) {
  event.prevendDefault();
  const userId = logInId.value;
  const userPw = logInPw.value;

  const savedUserPw = localStorage.getItem(userId);

  if (savedUserPw === null) {
    console.log("No Id");
  } else if (savedUserPw != userPw) {
    console.log("Pw error");
  }
}

//logInBtn.addEventListener("submit", onLoginSubmit);

// console.log(logInBtn);
// console.log(logInId);
// console.log(logInPw);
