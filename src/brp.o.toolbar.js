mul.set( "brp.o.toolbar" , [] , {
	template: embed( './templates/brp.o.toolbar.html' ),
	props:[],
	computed:{
		toolbarState(){
			if( this.$route.path=='/cart/login' ){
				return 2;
			}
			if( this.$route.path=='/cart/shipping' ){
				return 2;
			}
			if( this.$route.path=='/cart/billing' ){
				return 2;
			}
			if( this.$route.path=='/cart/payment' ){
				return 2;
			}
			return 1;
		}
	}
	
});