const nav = document.getElementById("nav");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const msg = document.getElementById("msg");
console.log('iamregister...');
function showMenu() {
	if (nav.style.display == "none") {
		nav.style.display = "flex";
	} else {
		nav.style.display = "none";
	}
}

function goToLogin() {
	window.location.href = window.location.origin + `/pages/login/login.html`;
}

function validateValues(event) {
	event.preventDefault();
	let location = window.location;
	let loginPath = location.origin + `/pages/login/login.html`;
	let emailSpan = document.getElementById("emailSpan");
	let passwordSpan = document.getElementById("passwordSpan");
	let cpasswordSpan = document.getElementById("cpasswordSpan");
	let emailValue = email.value;
	let passwordValue = password.value;
	let cpasswordValue = cpassword.value;

	const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	const registerData = {
		email: emailValue,
		password: passwordValue
	}

	if (emailValue == "" && passwordValue == "" && cpasswordValue == "") {
		emailSpan.innerText = "Email field is required";
		passwordSpan.innerText = "Password field is required";
		cpasswordSpan.innerText = "Confirm password field is required";
	} else if (!emailRegex.test(emailValue)) {
		emailSpan.innerText = "Email is not valid";
	} else if (!passwordRegex.test(passwordValue)) {
		passwordSpan.innerText = "password have should atlease one digit, one small latter and one capital latter and have length more than 6 charactor.";
		cpasswordSpan.innerText = "";
		emailSpan.innerText = "";
	} else if (passwordValue != cpasswordValue) {
		cpasswordSpan.innerText = "password does not match";
		emailSpan.innerText = "";
		passwordSpan.innerText = "";
	} else {
		emailSpan.innerText = "";
		passwordSpan.innerText = "";
		cpasswordSpan.innerText = "";
		window.location.href = loginPath;
		localStorage.setItem("registerData", JSON.stringify(registerData));
	}
}