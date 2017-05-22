//vue filters
require( './modules/filters' )();

var app = require( './modules/model' );

//output to global
window.app = app;

app.version = "001";

//lodash
app._ = {};
//app._.find = require( 'lodash/find' );

app.Vue = Vue;
app.Vue.config.debug = true;
Vue.config.devtools = true

//async
app.mul = require( './modules/mul' );
app.mul.root = "/assets/js/";

require( './modules/mapping' )();

app.libs = require( './modules/libs' );
app.methods = require( './modules/methods' );
app.validation = require( './modules/validation' );
app.services = require( './modules/services' );
app.analytics = require( './modules/analytics' );
app.router = require( './modules/router' );

//load version from html


//load model from html
app.model = {};
app.model.errors = [];
app.model.scroll = {};
app.model.history = [];

//global variable

app.model.current = null
if( document.getElementById( 'app_basepage' ) ){
    app.model.current = JSON.parse( document.getElementById( 'app_basepage' ).text );
}

app.model.catalog = null
if( document.getElementById( 'app_catalog' ) ){
    app.model.catalog = JSON.parse( document.getElementById( 'app_catalog' ).text );
}

//apparel quantity selection
if( document.getElementById( 'cart_qty_model' )) {
	app.model.apparel = {};
	app.model.apparel.model={};
	app.model.apparel.model = JSON.parse(document.getElementById('cart_qty_model').text);
	app.model.apparel.model.apparel = [];
	app.model.apparel.model.total = 0;
	app.model.apparel.model.saleTotal = 0;
}

//}catch(e){
//    app.model.current = [];
//}
try{
    app.model.version = 'v.' + app.version + '.' + document.getElementById( 'app_version' ).text;
}catch(e){
    app.model.version = 'v.' + app.version + '.???';
}

Vue.mixin({
    created(){
      this.version="1.2.1";
    }
})


app.methods.resize();
window.addEventListener( 'resize' , app.methods.debounce( app.methods.resize , 50 ) );

window.onerror = app.analytics.onerror;

app.app = new Vue({
  el: '#app',
  data:app.model
});
