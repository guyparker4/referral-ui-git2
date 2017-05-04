mul.set( "iprint.m.newproduct" , [] , {
	template: embed( './templates/iprint.m.newproduct.html' ),
	props:[],
	data(){
		return {
			"addIt" : "ADD TO CART",
			"confirm": false
		}
	},
	methods:{
		beforeCloseModal:function () {
			this.confirm = true;
		},
		closeModal:function () {
			document.getElementsByClassName("newproduct-modal")[0].style.display = "none";
		},
		add:function () {
			this.addIt = "ADDED!";
		}
	}
});