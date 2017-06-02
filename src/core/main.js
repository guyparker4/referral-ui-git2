//vue filters
require( './modules/filters' )();

var brp = require( './modules/model' );

//output to global
window.brp = brp;

brp.version = "001";

//lodash
brp._ = {};
//brp._.find = require( 'lodash/find' );

brp.Vue = Vue;
brp.Vue.config.debug = true;
brp.Vue.config.devtools = true

brp.VueRouter = VueRouter;
brp.Vue.use( brp.VueRouter );



//async
brp.mul = require( './modules/mul' );
brp.mul.root = "/assets/js/";

brp.mapping = require( './modules/mapping' );
brp.libs = require( './modules/libs' );
brp.methods = require( './modules/methods' );
brp.validation = require( './modules/validation' );
brp.services = require( './modules/services' );
brp.analytics = require( './modules/analytics' );
brp.router = require( './modules/router' );
brp.config = {
    token:"TestAuthToken123",
    servicesBasePath: "https://uat.iprint.com/services"
}
//load version from html

brp.router = new brp.VueRouter({
    routes: [
  { path: '/cart', component: brp.mapping['o.cart'] },
  { path: '/cart/login', component: brp.mapping['o.login'] },
  { path: '/cart/shipping', component: brp.mapping['o.shipping'] },
  { path: '/cart/billing', component: brp.mapping['o.billing'] },
  { path: '/cart/payment', component: brp.mapping['o.paymentmethod'] },
  { path: '/cart/items', component: brp.mapping['o.youritems'] },
  { path: '/cart/shippingmethod', component: brp.mapping['o.shippingmethod'] },
  { path: '/cart/confirmation', component: brp.mapping['o.shippingdetail'] },
]})

if( document.getElementById( 'app_catalog' ) ){
    brp.model.catalog = JSON.parse( document.getElementById( 'app_catalog' ).text );
}

if( document.getElementById( 'app_basepage' ) ){
    brp.model.current = JSON.parse( document.getElementById( 'app_basepage' ).text );
    var len = brp.model.current.length;
    for( var i = 0; i < len; i++ ){
        if( brp.model.current[i].type == "cart" ){
            brp.model.order = brp.model.current[i].order;
            brp.model.recommendedProducts = brp.model.current[i].recommendedProducts;
        }
        if( brp.model.current[i].type == "catalogmenu" ){
            brp.model.catalog = brp.model.current[i].catalogData;
        }
        if( brp.model.current[i].type == "savedDesign" ){
            brp.model.savedDesign = brp.model.current[i].savedcards;
        }
        if( brp.model.current[i].type == "recommendedProducts" ){
            brp.model.recommendedProducts = brp.model.current[i].recommendedProducts;
        }
    }
}

//apparel quantity selection
if( document.getElementById( 'cart_qty_model' )) {
	brp.model.apparel = {};
	brp.model.apparel.model={};
	brp.model.apparel.model = JSON.parse(document.getElementById('cart_qty_model').text);
	brp.model.apparel.model.apparel = [];
	brp.model.apparel.model.total = 0;
	brp.model.apparel.model.saleTotal = 0;
}

//}catch(e){
//    brp.model.current = [];
//}
try{
    brp.model.version = 'v.' + brp.version + '.' + document.getElementById( 'app_version' ).text;
}catch(e){
    brp.model.version = 'v.' + brp.version + '.???';
}

Vue.mixin({
    created(){
      this.version="1.2.1";
    }
})


brp.methods.resize();
window.addEventListener( 'resize' , brp.methods.debounce( brp.methods.resize , 50 ) );

window.onerror = brp.analytics.onerror;

brp.app = new Vue({
  el: '#app',
  router:brp.router,
  data:brp.model,
  methods:{
    setRoute( path ){
        this.cartPath = "#" + path;
        window.location = this.cartPath;
    },
    setLocation( event ){
        setTimeout(function(){
            window.location = "#" + brp.model.cartPath;
        }, 50)
    }
  }
});
