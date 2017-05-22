mul.set( "brp.a.modal" , [] , {
	template: embed( './templates/brp.a.modal.html' ),
	props:["size"],
	data(){
		return {
			active:false,
			close:true
		}
	}
});