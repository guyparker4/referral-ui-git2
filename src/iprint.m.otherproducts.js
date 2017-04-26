mul.set( "iprint.m.otherproducts" , [] , {
	template: embed( './templates/iprint.m.otherproducts.html' ),
	props:[],
	data(){
		return app.model;
	},
	methods:{
		addNewProduct:function(e){
			document.getElementsByClassName("newproduct-modal")[0].style.display = "table";
		}
	}
});