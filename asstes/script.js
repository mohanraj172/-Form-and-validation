const form = document.getElementById("form");
const username = document.getElementById("usrename");
const email  = document.getElementById("email");
const password = document.getAnimations("password");
const password1  = document.getElementById("password1");

form.addEventListener("submit", function(e) {
e.preventDefault();
Required([username,email,password,password1]);
});