mul.set( "brp.o.productmenu" , [] , {
	template: embed( './templates/brp.o.productmenu.html' ),
	props:[],
	computed:{
		showProductMenu(){
			if( this.$route.path=='/cart/login' ){
				return false;
			}
			if( this.$route.path=='/cart/shipping' ){
				return false;
			}
			if( this.$route.path=='/cart/shippingmethod' ){
				return false;
			}
			if( this.$route.path=='/cart/billing' ){
				return false;
			}
			if( this.$route.path=='/cart/payment' ){
				return false;
			}
			return true;
		}
	}
});