mul.set( "brp.o.checkoutwithoutlogin" , [] , {
	template: embed( './templates/brp.o.checkoutwithoutlogin.html' ),
	props:[],
	data(){
		return { 
			guestForm:{
				login:"",
				optin:true
			}
		};
	},
	methods:{
		guest(){
			brp.services.guest( this.guestForm.login , this.guestForm.optin );
			this.guestForm.login = "";
			this.guestForm.optin = true;
		}
	}
});