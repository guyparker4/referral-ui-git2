mul.set( "brp.o.checkoutwithlogin" , [] , {
	template: embed( './templates/brp.o.checkoutwithlogin.html' ),
	props:[],
	data(){
		return { 
			view:"login",
			loginForm:{
				login:"",
				password:"",
				autologin:false	
			},
			registerForm:{
				login:"",
				password:"",
				autologin:false	
			}

		};
	},
	methods:{
		signin(){
			brp.services.signin( this.loginForm.login , this.loginForm.password , this.loginForm.autologin );
			this.loginForm.login = "";
			this.loginForm.password = "";
			this.loginForm.autologin = false;
		}
	}
});