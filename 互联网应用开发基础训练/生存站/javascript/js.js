function FirstMove(path) {
  var Video = document.querySelector("video");
  Video.addEventListener("ended", function () {
    window.location.assign(path);
  });
}

function Move(path) {
  window.location.assign(path);
}

function Register_f(event) {
  event.preventDefault();
  var Id = document.querySelector("#Id").value;
  var Pw = document.querySelector("#Pw").value;
  var Pw_a = document.querySelector("#Pw_again").value;

  if (!Id || !Pw || !Pw_a) {
    alert("Fill in all spaces");
    return;
  }

  if (localStorage.getItem(Id) != null) {
    alert("Use different Id");
    return;
  }
  if (Pw != Pw_a) {
    alert("Pw is not same");
    return;
  }
  localStorage.setItem(Id, Pw);
  alert("Register success");
  Move("logIn.html");
}

if (document.querySelector("#register") != null) {
  const Register = document.querySelector("#register");
  Register.addEventListener("click", Register_f);
}

function LOG_IN(event) {
  event.preventDefault();
  var Id = document.querySelector("#Id").value;
  var Pw = document.querySelector("#Pw").value;
  var Check_Id = localStorage.getItem(Id);
  if (Check_Id === null) {
    alert("Wrong Id");
    return;
  }
  if (Check_Id != Pw) {
    alert("Wrong Pw");
    return;
  }
  alert("Log In");
  Move("choose.html");
}

if (document.querySelector("#LogIn") != null) {
  const LogIn = document.querySelector("#LogIn");
  LogIn.addEventListener("click", LOG_IN);
}

//Talk
function Talk() {}
