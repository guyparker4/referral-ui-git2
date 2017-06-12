mul.set( "brp.o.apparelquantity" , [] , {
	template: embed( './templates/brp.o.apparelquantity.html' ),
	props:[],
	data () {
		return {
			model: brp.model.apparel.model,
			orderBackUp: {'apparel': [], 'total': 0, 'saleTotal': 0}
		}
	},
	updated(){
		this.backup();
	},
	computed: {
		minimumOrder:function(){
			return this.totalQuantity >= this.model.pdp.product.minimumQty;
		},
		totalQuantity: function() {
			var totalQuantity = 0;
			_.forEach(this.model.apparel, function(obj) {
				totalQuantity += obj.quantity;
			})
			return totalQuantity;
		},
		configVars: function () {
			return window.configVars;
		}
	},
	methods: {
		backup: function() {
			this.orderBackUp.apparel = JSON.parse(JSON.stringify(this.model.apparel));
			this.orderBackUp.total = this.model.total;
			this.orderBackUp.saleTotal =  this.model.saleTotal;
		},
		updateQty: function () {
			if(!this.minimumOrder){
				this.updateWarning("block");
				return;
			}
			this.outputOrder();
			console.log("update quantities");
			location.reload();
		},
		cancelQty: function () {
			Vue.set(this.model, 'apparel', JSON.parse(JSON.stringify(this.orderBackUp.apparel)));
			Vue.set(this.model, 'total', this.orderBackUp.total);
			Vue.set(this.model, 'saleTotal', this.orderBackUp.saleTotal);
			console.log("cancel quantities");
			this.updateWarning("none");
		},
		updateWarning: function(toggle){
			//mobile and desktop
			for(var i=0; i < document.getElementsByClassName("quantity__msg").length; i++){
				document.getElementsByClassName("quantity__msg")[i].style.display = toggle;
			}
		},
		beautify: function (txt) {
			var str = JSON.stringify(txt)
			return str.split(':').join(': ').split(',').join(', ');
		},
		outputOrder:function() {
			//sort apparel order based on size
			var apparel = this.model.apparel;
			var sizeOrder = {'XXS': null, 'XS': null, 'S': null, 'M': null, 'L': null, 'LT':null, 'XL': null, 'XLT': null, '2X': null, '2XL': null, '2XLT': null, '3X': null, '3XL': null, '3XLT': null, '4X': null, '4XL': null, '4XLT': null, '5XL': null, '5XLT': null, '6XL': null};
			apparel.forEach(function(obj){
				sizeOrder[obj.size] = obj;
			})
			var apparelSkuIds = "";
			var apparelQuantity = "";
			for(var key in sizeOrder) {
				if(sizeOrder[key]){
					apparelSkuIds += sizeOrder[key]["skuId"] + ",";
					apparelQuantity += sizeOrder[key]["quantity"] + ",";
				}
			}
			var apparelSkuIds = apparelSkuIds.substring(0, apparelSkuIds.length -1);
			var apparelQuantity = apparelQuantity.substring(0, apparelQuantity.length -1);
			var commerceItemId = this.configVars.commerceItemId;
			var data = {"catalogRefId1": apparelSkuIds, "prodQuantity": apparelQuantity, "commerceItemId": commerceItemId};
			var endpoint = this.configVars.qtyUpdateService;

			window.superagent
				.post( endpoint )
				.set( { 'Cache-Control' : 'no-cache' } )
				.type( "json" )
				.send( data )
				.end( function( err, res ) {
					console.log(res);
				})
		}
	}
});