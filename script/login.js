const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "admin123") {
    window.location.assign("./home.html");
  } else {
    alert("Wrong username or password!");
  }
});