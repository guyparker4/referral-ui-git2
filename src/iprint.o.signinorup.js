mul.set( "iprint.o.signinorup" , [] , {
	template: embed( './templates/iprint.o.signinorup.html' ),
	props:[],
	ready(){
		console.log("PAGE INIT: registerDialog (termsAndConditions, forgotyourpasswordlinkForLogin)");
		registerDialog('termsAndConditions-fBox','termsAndConditions-fBoxDiv','/estore/responsive/en/common/policies/frags/childOnlinePrivacyTerms.jsp');
		registerDialog('forgotyourpasswordlinkForLogin','forgotPasswordBody','/estore/responsive/en/usr/component/forgotPasswordBody.jsp');
	},
	methods:{
		signin:function () {
			valEmail = validator.isEmail($("#returnEmail").val());
			valPassword = validator.isLength($("#password").val(), {min:0, max: undefined});
			if (!valEmail) {
				console.log("invalid email");
			}
			if (!valPassword) {
				console.log("invalid password");
			}
			if (valEmail && valPassword) {
				document.getElementById('loginForm').submit();
			}
		},
		register:function () {
			document.getElementById('registerForm').submit();
		},
		submitEmail:function () {
			document.getElementById('forgotPasswordemail').submit();
		},
		toggleForm:function (theDiv) {
			console.log("TOGGLE: toggle for " + theDiv)
			// hide all forms
			document.getElementById("loginSection").style.display = "none";
			document.getElementById("registrationSection").style.display = "none";
			document.getElementById(theDiv).style.display = "block";
			document.getElementById("loginForm").reset();
			document.getElementById("registerForm").reset();
			// $("#loginSection").hide();
			// $("#registrationSection").hide();
			// // show active form
			// $("#" + theDiv).show();
			// // clear forms
			// $("#loginForm").clearForm();
			// $("#registerForm").clearForm();
		},
		clearErrorMsg:function (divID) {
			// document.getElementById(divID).innerHTML = '';
			// $('#'+divID).html("");
		},
		callKey:function(event,continueId){
				event= event || window.event;
				if ( event.keyCode == 13 ) {
					if(window.event)
						window.event.returnValue = false;
					else
						event.preventDefault();
					document.getElementById(continueId).click();
				}
		}
	}
});