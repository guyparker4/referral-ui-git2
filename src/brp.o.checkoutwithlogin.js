mul.set( "brp.o.checkoutwithlogin" , [] , {
	template: embed( './templates/brp.o.checkoutwithlogin.html' ),
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