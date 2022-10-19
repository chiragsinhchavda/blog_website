console.log('login....')

//const locationObj = window.location;


function validateValues(event){
	event.preventDefault();
	if(localStorage.getItem("registerData")){
		console.log('Yah!! it is available....')
	}
	console.log('hello');
	console.log(location);
}