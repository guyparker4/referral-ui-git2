mul.set( "iprint.o.quantityselection" , [] , {
	template: embed( './templates/iprint.o.quantityselection.html' ),
	props:[],
	data: function() {
		return {
			model: app.model.apparel.model,
			sizeArray : [],
			quantity: {},
			currentSkuId:""
		}
	},
	mounted: function() {
		var self = this;
		self.quantity = {'XXS': 0, 'XS': 0, 'S': 0, 'M': 0, 'L': 0, 'LT':0, 'XL': 0, 'XLT': 0, '2X': 0, '2XL': 0, '2XLT': 0, '3X': 0, '3XL': 0, '3XLT': 0, '4X': 0, '4XL': 0, '4XLT': 0, '5XL': 0, '5XLT': 0, '6XL': 0};

		this.$watch('model.apparel', function(val, oldVal){
				var freshQuantity = {};
				var obj = _.forEach(self.model.apparel, function(o){
					freshQuantity[o.size] = o.quantity;
				})
				for(var key in self.quantity) {
					if(freshQuantity[key]){
						self.quantity[key] = freshQuantity[key];
					} else {
						self.quantity[key] = 0;
					}
				}
			},
			{ deep: true }
		)
		// edit from cart
		var skuIds = self.skus.split(",");
		self.currentSkuId = skuIds[0];
		var quantitys = self.quantities.split(",");
		for(var i = 0; i < skuIds.length; i++) {
			var obj = _.find(self.model.pdp.product.childSkus, function(o){
				return o.skuId == skuIds[i];
			})

			var objExist = _.find(self.model.apparel, function(el){
				return el.skuId == skuIds[i];
			})
			var skuIsExist = objExist? true : false;
			if(!skuIsExist) {
				var skuObj = {"skuId" : obj.skuId, "size" : obj.productoption.description , "quantity" : parseInt(quantitys[i]), "upcharge" : obj.upcharge}
				self.model.apparel.push(skuObj);
			}
		}
		_.forEach(self.model.apparel, function(o){
			self.quantity[o.size] = o.quantity;
		})


		this.updateSku();

		// $('.size-show-all').on('click', function(){
		// 	console.log("PDP: Show advanced sizes");
		// 	$(".more_sizes").each(function() {
		// 		Foundation.Motion.animateIn(this, "slide-in-down");
		// 	});
		// 	$('.size-show-all').each(function(){
		// 		$(this).parent().hide();
		// 	})
		// 	return false;
		// });
	},
	computed:{
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
		currentPrice: function() {
			var self = this;
			var temp = 1;
			if(self.totalQuantity != 0){
				temp = self.totalQuantity;
			}
			var priceDetail = _.find(this.model.pdp.product.price, function(obj){
				return temp <= obj.highBoundQty && temp >= obj.lowBoundQty;
			})
			if(priceDetail.onsale) {
				return priceDetail.unitsaleprice;
			} else {
				return priceDetail.unitprice;
			}
		},
		maximumLimit: function(){
			//check maximum limit
			var highBoundQty = 0;
			_.forEach(this.model.pdp.product.price, function(obj){
				if(obj.highBoundQty > highBoundQty) {
					highBoundQty = obj.highBoundQty;
				}
			})
			return highBoundQty;
		},
		configVars: function () {
			return window.configVars;
		},
		skus: function () {
			return this.configVars.skuID
		},
		quantities: function () {
			return this.configVars.quantity
		}
	},
	methods: {
		isAdvancedSize: function(target) {
			// return target.size == 'XXS' || target.size == 'XS' || target.size == '2X' || target.size == '2XL' || target.size == '2XLT' || target.size == '3X' || target.size == '3XL' || target.size == '3XLT' || target.size == '4X' || target.size == '4XL' || target.size == '4XLT' ||  target.size == '5XL' || target.size == '5XLT' ||  target.size == '6XL';
			return false;
		},
		findTarget:function(s){
			return _.find(this.sizeArray, function(obj){
				return obj.size == s;
			})
		},
		plus: function(s){
			this.quantity[s]++;
			this.updateTotal(this.findTarget(s), null);
		},
		minus: function(s) {
			if(this.quantity[s] > 0) {
				this.quantity[s]--;
				this.updateTotal(this.findTarget(s), null);
			}
		},
		updateTotal: function(target,e){
			for(var i = 0; i < document.getElementsByClassName("quantity__msg2").length; i++){
				document.getElementsByClassName("quantity__msg2")[i].style.display = "none";
			}
			var self = this;
			if(target.stockStatus == "Out of Stock"){
				self.quantity[target.size] = 0;
				return;
			}
			if(e){
				var val = Math.abs(parseFloat(e.target.value));
				if(isNaN(val) || val === ""){
					self.quantity[target.size] = 0;
				} else {
					//calculate quantity excluding that of current size
					var otherQuantity = 0;
					_.forEach(this.model.apparel, function(obj) {
						if(obj.size != target.size) {
							otherQuantity += obj.quantity;
						}
					})
					var currentTotalQuantity = otherQuantity + val;
					if(self.maximumLimit < currentTotalQuantity){
						alert("quantity is not available, please input less.")
						self.quantity[target.size] = 0;
					} else {
						self.quantity[target.size] = val;
					}
				}
			}

			var skuIsExist = false;
			self.model.apparel.every(function(el) {
				if(el.skuId == target.skuId) {
					el.quantity = self.quantity[target.size];
					skuIsExist = true;
					return false;
				}
				return true;
			})

			if(!skuIsExist) {
				var skuObj = {"skuId" : target.skuId, "size" : target.size , "quantity" : self.quantity[target.size], "upcharge" : target.upcharge}
				self.model.apparel.push(skuObj);
			}
			// remove product with quantity 0
			_.remove(self.model.apparel, function(obj){
				return obj.quantity === 0;
			})
			//recalculate the total price
			self.recalculatePrice();

			//apparel minimum order check
			if(self.minimumOrder){
				//mobile and desktop
				for(var i=0; i < document.getElementsByClassName("quantity__msg").length; i++){
					document.getElementsByClassName("quantity__msg")[i].style.display = "none";
				}
			}
		},
		showPricing: function() {
			$('#pricingModal').foundation('open');
		},
		updateSku: function() {
			//reset the size-show button when switch product color
			// $(".size-show-all").parent().show();

			var self = this;
			self.sizeArray = [];

			// assume here we loop through the sku with skuId and skuTitle
			var el = _.find(self.model.pdp.product.childSkus, function(el) {
				return el.skuId == self.currentSkuId;
			})

			_.forEach( self.model.pdp.product.childSkus, function(i) {
				if(i.skuTitle == el.skuTitle) {
					var temp = {};
					temp['size'] = i.productoption.description;
					temp['skuId'] = i.skuId;
					temp['availableStock'] = i.stockLevel.availableStock;
					temp['stockStatus'] = i.stockLevel.stockStatus;
					temp['statusMessage'] = i.stockLevel.statusMessage;
					temp['upcharge'] = i.upcharge;

					self.sizeArray.push(temp);
				}
			})
//                self.sizeArray.sort(function(a,b){
//                    return a.upcharge - b.upcharge;
//                })
			//update quantity in UI
			_.forEach(self.sizeArray, function(obj){
				if(obj.stockStatus == "Out of Stock") {
					if(self.quantity[obj.size] != 0){
						for(var i = 0; i < document.getElementsByClassName("quantity__msg2").length; i++){
							document.getElementsByClassName("quantity__msg2")[i].style.display = "block";
						}
						self.quantity[obj.size] = 0;
					}
				}
			})
			//update apparel order
			self.updateApparel();
		},
		updateApparel: function(){
			var self = this;
			//update apparel when change product color, set quantity of those unavailable(out of stock) 0
			self.model.apparel.forEach(function(obj){
				var a = _.find(self.sizeArray, function(el){
					return obj.size == el.size;
				})
				if(a.stockStatus == "Out of Stock") {
					obj.quantity = 0;
				}
			})

			// remove product with quantity 0
			_.remove(self.model.apparel, function(obj){
				return obj.quantity === 0;
			})

			//update apparel skuIds
			self.model.apparel.forEach(function(obj){
				self.sizeArray.forEach(function(el){
					if(obj.size == el.size) {
						obj.skuId = el.skuId;
					}
				})
			})

			this.recalculatePrice();
		},
		recalculatePrice: function(){
			var self = this;
			self.model.total = 0.00;
			self.model.saleTotal = 0.00;

			var totalQuantity = 0;
			var totalUpcharge = 0;
			self.model.apparel.forEach(function(item) {
				totalQuantity += item.quantity;
				totalUpcharge += item.quantity * item.upcharge;
			})
			self.model.pdp.product.price.every(function(el) {
				if(totalQuantity <= el.highBoundQty) {
					if(el.onsale) {
						self.model.saleTotal += parseFloat(el.unitsaleprice) * totalQuantity + parseFloat(totalUpcharge);
					}
					self.model.total += parseFloat(el.unitprice) * totalQuantity + parseFloat(totalUpcharge);
					return false;
				}
				return true;
			})
		}
	}
});