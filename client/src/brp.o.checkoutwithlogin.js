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
				email:"",
				password:"",
				userAccountName:"",
				question:"",
				answer:"",
				sendEmailPromotions:true
			},
			createConfirmEmail:"",
			createConfirmPassword:""
		};
	},
	methods:{
		signin(){
			brp.services.signin( this.loginForm.login , this.loginForm.password , this.loginForm.autologin );
			this.loginForm.login = "";
			this.loginForm.password = "";
			this.loginForm.autologin = false;
		},
		create(){
			//copy email to login
			this.registerForm.login = this.registerForm.email;
			var data = JSON.parse( JSON.stringify( this.registerForm ) );
			brp.services.create( data );
			this.registerForm.login = "";
			this.registerForm.email = "";
			this.registerForm.password = "";
			this.registerForm.userAccountName = "";
			this.registerForm.question = "";
			this.registerForm.answer = "";
			this.registerForm.sendEmailPromotions = true;
			this.createConfirmEmail = "";
			this.createConfirmPassword = "";
		}
	},
	computed:{
		createFormValid(){
			if( this.registerForm.email == "" ){
				return true;
			}
			if( this.registerForm.password == "" ){
				return true;
			}
			if( this.registerForm.email != this.createConfirmEmail ){
				return true;
			}
			if( this.registerForm.password != this.createConfirmPassword ){
				return true;
			}
			return false;
			
		}
	}
});