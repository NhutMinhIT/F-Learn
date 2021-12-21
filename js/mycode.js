function checkForm() {
	
	var name=document.getElementById("mydiv1").value;
	var phone=document.getElementById("mydiv2").value;
	var email=document.getElementById("mydiv3").value;

	
	if(name=="" ){
		alert("Fullname is invalid");
	}
	if(phone=="" ){
		alert("Phone is invalid");
	}
	if(email==""){
		alert("Email is invalid");
	}
	else{
		alert("Well come : " + name + "\t" + phone + 
			"\n" + "We will respond to you as soon as possible")
	}

}