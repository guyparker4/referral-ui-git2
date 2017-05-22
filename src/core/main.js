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
Vue.config.devtools = true

//async
brp.mul = require( './modules/mul' );
brp.mul.root = "/assets/js/";

require( './modules/mapping' )();

brp.libs = require( './modules/libs' );
brp.methods = require( './modules/methods' );
brp.validation = require( './modules/validation' );
brp.services = require( './modules/services' );
brp.analytics = require( './modules/analytics' );
brp.router = require( './modules/router' );

//load version from html

if( document.getElementById( 'app_basepage' ) ){
    brp.model.current = JSON.parse( document.getElementById( 'app_basepage' ).text );
}

if( document.getElementById( 'app_catalog' ) ){
    brp.model.catalog = JSON.parse( document.getElementById( 'app_catalog' ).text );
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
  data:brp.model
});
