mul.set( "iprint.m.orderchecksbtns" , [] , {
	template: embed( './templates/iprint.m.orderchecksbtns.html' ),
	props:[],
	data(){
		return app.model;
	},
	computed: {
		stepTag: function () {
			if(this.step == "CHECK OPTIONS") {
				return "PERSONALIZE";
			} else {
				return "CHECK OPTIONS";
			}
		}
	},
	methods: {
		changeStep: function() {
			if(this.step == "CHECK OPTIONS") {
				this.step = "PERSONALIZE";
			} else {
				this.step = "CHECK OPTIONS";
			}
		}
	}
});