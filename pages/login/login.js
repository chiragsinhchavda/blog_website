const nav = document.getElementById("nav");
//const locationObj = window.location;

function showMenu() {
	if (nav.style.display == "none") {
		nav.style.display = "flex";
	} else {
		nav.style.display = "none";
	}
}

function validateValues(event){
	event.preventDefault();
	if(localStorage.getItem("registerData")){
		console.log('Yah!! it is available....')
	}
	console.log('hello');
	console.log(location);
}