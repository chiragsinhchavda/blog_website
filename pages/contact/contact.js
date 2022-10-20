const nav = document.getElementById("nav");
const navHeader = document.getElementById("heading");
let lists = document.getElementsByClassName("lists");

function showMenu() {
	if (nav.style.display == "none") {
		nav.style.display = "flex";
		navHeader.style.display = "none";
	} else {
		nav.style.display = "none";
		navHeader.style.display = "block";
	}
}

if (localStorage.getItem("loginData")) {
	lists[2].innerHTML = `<a href="/">LOGOUT</a>`
	lists[3].style.display = "none";
} else {
	lists[2].innerHTML = `<a href="./pages/login/login.html">LOGIN</a>`
	lists[3].innerHTML = `<a href="./pages/register/register.html">REGISTER</a>`;
}

function getData(event) {
	event.preventDefault();
	let fullName = document.getElementById("fullName").value;
	let email = document.getElementById("email").value;
	let mobileNumber = document.getElementById("mobileNumber").value;
	let message = document.getElementById("msg").value;
	let emailSpan = document.getElementById("emailSpan");
	let nameSpan = document.getElementById("nameSpan");

	const contactData = {
		name: fullName,
		email: email,
		mobile: mobileNumber,
		message: message,
	}

	if (fullName == "") {
		nameSpan.innerHTML = "Name field is required."
	} else if (email == "") {
		emailSpan.innerHTML = "Email field is required."
		nameSpan.innerHTML = ""
	} else {
		localStorage.setItem("contactData", JSON.stringify(contactData));
		emailSpan.innerHTML = ""
		nameSpan.innerHTML = ""
	}

}