mul.set( "iprint.a.dropdown" , [] , {
	template: embed( './templates/iprint.a.dropdown.html' ),
	props:["top","right","left","bottom"],
	data(){
		return { active:false }
	}
});