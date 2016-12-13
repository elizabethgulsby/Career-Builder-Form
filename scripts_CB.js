$(document).ready(function() {

	$('.sign-up-form').submit(function(event) {
		event.preventDefault();

		//all fields mandatory
		$('input').each(function() {
			var currentClass = $(this).attr('class');
			var errorClass = '.' + currentClass + "-error";
			console.log(errorClass);
			if ($(this).val() == '') {
				console.log(errorClass + ' is required!')
				$(errorClass).html('This field is required.')
				$(errorClass).show();
			}
			else {
				$(errorClass).hide();
			}
		});

		//check the length of the first name input field
		var firstNameVariable = $('.firstName').val();
		if ((firstNameVariable.length < 2) && (firstNameVariable.length > 0)){
			$('.firstName-error').html('Your first name must be more than 1 character long.');
			$('.firstName-error').show();
			console.log("first name bitch!");
		}
		

		//check the length of the last name input field
		var lastNameVariable = $('.lastName').val();
		if ((lastNameVariable.length < 2) && (lastNameVariable.length > 0)) {
			$('.lastName-error').html('Your last name must be more than 1 character long.');
			$('.lastName-error').show();
		}
		

		//make sure password fields match
		//needs:
			// 8-15 chars
			// 1 uppercase
			// 1 lowercase
			// 1 number or symbol

		//check to see if passwords match; check to see if password is between 8-15 chars
		var enteredPassword = $('.password').val();
		var enteredPassword2 = $('.password2').val();
		if (enteredPassword !== enteredPassword2) {
			$('.password-error').html('Your passwords must match.');
			console.log(enteredPassword);
			$('.password-error').show();
		}
		else if ((enteredPassword.length < 8) || (enteredPassword.length > 15)) {
			$('.password-error').html('Your password must be between 8-15 characters long.');
			$('.password-error').show();
		}

		//function to check for upper and lowercase letters
		function checkPasswordCase(password) {
			var passwordIsOkay = false;
			var hasUpperCase = false;
			var hasLowerCase = false;
			for (var i = 0; i < password.length; i++) {
				if (password[i].toUpperCase() == password[i]) {
					//is uppercase!
					if(Number.isInteger(parseInt(password[i])) == false) {
						hasUpperCase = true;
					}	
				}
				if (password[i].toLowerCase() == password[i]) {
					if(Number.isInteger(parseInt(password[i])) == false) {
						hasLowerCase = true;
					}
				}
			}
			if ((hasLowerCase == true) && (hasUpperCase == true)) {
				passwordIsOkay = true;
			}
			return passwordIsOkay;

		}

		var checkedPassword = checkPasswordCase(enteredPassword); //set equal to a function that returns a boolean
		if (checkedPassword == false) {
			$('.password-error').html('Please include both an upper and lowercase letter in your password.');
			$('.password-error').show();
		}

		//check for a symbol in the password
		// function checkNumberSymbol(password) {
		// 	var passwordIsOkay = true;
		// 	var hasUpperCase = true;
		// 	var hasLowerCase = true;
		// 	for (var i = 0; i < password.length; i++) {
		// 		if (password[i].toUpperCase() !== password[i]) {
		// 			//is uppercase!
		// 			hasUpperCase = false;
		// 		}
		// 		if (password[i].toLowerCase() !== password[i]) {
		// 			hasLowerCase = false;
		// 		}
		// 	}
		// 	if ((hasLowerCase == true) && (hasUpperCase == true)) {
		// 		passwordIsOkay = false;
		// 	}
		// 	return passwordIsOkay;
		// }







	})
});
