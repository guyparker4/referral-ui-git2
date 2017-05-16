mul.set( "iprint.o.checkoutwithlogin" , [] , {
	template: embed( './templates/iprint.o.checkoutwithlogin.html' ),
	props:[],
	methods: {
		toggle: function (el) {
			if(el == 'loginSection'){
				document.getElementById('loginSection').style.display = 'block';
				document.getElementById('registrationSection').style.display = 'none';
			} else {
				document.getElementById('loginSection').style.display = 'none';
				document.getElementById('registrationSection').style.display = 'block';
			}
		}
	}
});