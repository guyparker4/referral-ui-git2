mul.set( "iprint.m.leftaccent" , [] , {
	template: embed( './templates/iprint.m.leftaccent.html' ),
	props:[],
	data(){
		return app.model;
	},
	computed: {
		title:function(){
			return this.step == "PERSONALIZE" ? "Left Accent" : "Change Left Accent";
		},
		isEdit:function(){
			if(this.step == "Change Left Accent") {
				return true;
			} else {
				return false;
			}
		}
	},
	methods: {
		editLeftAccent:function(){
			this.step = "Change Left Accent";
		}
	}
});