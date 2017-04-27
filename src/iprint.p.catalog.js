mul.set( "iprint.p.catalog" , [] , {
	template: embed( './templates/iprint.p.catalog.html' ),
	props:[],
	data(){
		return {
			categories: [
				{"name": "MOST POPULAR",
				 "src": "../../assets/png/demo-pic1.png"},
				{"name": "PATRIOTIC",
				 "src": "../../assets/png/demo-pic2.png"},
				{"name": "COLLEGIATE",
				"src": "../../assets/png/demo-pic3.png"},
				 {"name": "RECYCLED",
				"src": "../../assets/png/demo-pic4.png"},
				{"name": "CLASSICS",
				 "src": "../../assets/png/demo-pic5.png"},
				{"name": "DISNEY",
				 "src": "../../assets/png/demo-pic6.png"},
				{"name": "NATURE & SCIENCE",
				 "src": "../../assets/png/demo-pic7.png"},
				{"name": "ANIMALS",
				 "src": "../../assets/png/demo-pic8.png"}
			]
		}
	}
});