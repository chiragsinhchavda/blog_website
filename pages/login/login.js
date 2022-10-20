const nav = document.getElementById("nav");
let registerData = localStorage.getItem("registerData");
let loginObj = JSON.parse(registerData);

function showMenu() {
	if (nav.style.display == "none") {
		nav.style.display = "flex";
	} else {
		nav.style.display = "none";
	}
}

function goToRegister() {
	window.location.href = window.location.origin + `/pages/register/register.html`;
}

function validateValues(event) {
	event.preventDefault();
	let email = document.getElementById("email");
	let password = document.getElementById("password");
	let emailSpan = document.getElementById("emailSpan");
	let passwordSpan = document.getElementById("passwordSpan");
	const loginData = {
		email: email.value,
		password: password.value
	}
	if (localStorage.getItem("registerData")) {
		if (email.value == "" || password.value == "") {
			emailSpan.innerText = "email field is required";
			passwordSpan.innerText = "password field is required";
		} else if (email.value !== loginObj.email) {
			emailSpan.innerText = "Email address not valid";
			passwordSpan.innerText = "";
		} else if (password.value !== loginObj.password) {
			emailSpan.innerText = "";
			passwordSpan.innerText = "wrong password";
		} else {
			emailSpan.innerText = "";
			passwordSpan.innerText = "";
			localStorage.setItem("loginData", JSON.stringify(loginData));
			window.location.href = window.location.origin + `/index.html`;
		}
	} else {
		if (email.value == "") {
			emailSpan.innerText = "email field is required";
			passwordSpan.innerText = "";
		} else {
			emailSpan.innerText = "email is not registered";
			passwordSpan.innerText = "";
		}
	}
}