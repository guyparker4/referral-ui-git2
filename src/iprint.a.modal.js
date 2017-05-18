mul.set( "iprint.a.modal" , [] , {
	template: embed( './templates/iprint.a.modal.html' ),
	props:["size"],
	data(){
		return {
			active:false,
			close:true
		}
	}
});