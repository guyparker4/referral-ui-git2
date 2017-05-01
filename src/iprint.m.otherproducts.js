mul.set( "iprint.m.otherproducts" , [] , {
	template: embed( './templates/iprint.m.otherproducts.html' ),
	props:{
		src: String,
		title: String,
		msg: {
			type: Boolean,
			default: false
		},
		checkbox: {
			type: Boolean,
			default: false
		}
		},
	data(){
		return app.model;
	},
	methods:{
		addNewProduct:function(e){
			document.getElementsByClassName("newproduct-modal")[0].style.display = "table";
		}
	}
});