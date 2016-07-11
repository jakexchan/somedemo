window.onload = function(){
	var oRegister = document.getElementById('registerLink');
	var divLogin = document.getElementById('login');
	var oLogin = document.getElementById('loginLink');
	var divRegister = document.getElementById('register');

	oRegister.onclick = function(){
		divLogin.style.display = "none";
		divRegister.style.display = "block";
	}
	oLogin.onclick = function(){
		divRegister.style.display = "none";
		divLogin.style.display = "block";
	}

}