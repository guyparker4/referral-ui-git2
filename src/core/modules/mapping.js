var mappingModule = function(){
    console.log("mapping init");
    Vue.component( 'a.button' , function( resolve , reject ){
        console.log('a.button');
        mul.get( 'iprint.a.button' , resolve , this );
    });
    Vue.component( 'a.buttongroup' , function( resolve , reject ){
        console.log('a.buttongroup');
        mul.get( 'iprint.a.buttongroup' , resolve , this );
    });
    Vue.component( 'o.promoheader' , function( resolve , reject ){
        console.log('a.promoheader');
        mul.get( 'iprint.o.promoheader' , resolve , this );
    });
    Vue.component( 'a.switch' , function( resolve , reject ){
        console.log('a.switch');
        mul.get( 'iprint.a.switch' , resolve , this );
    });
    Vue.component( 'a.menu' , function( resolve , reject ){
        console.log('a.menu');
        mul.get( 'iprint.a.menu' , resolve , this );
    });
    Vue.component( 'a.submenu' , function( resolve , reject ){
        console.log('a.submenu');
        mul.get( 'iprint.a.submenu' , resolve , this );
    });
    Vue.component( 'a.menuitem' , function( resolve , reject ){
        console.log('a.menuitem');
        mul.get( 'iprint.a.menuitem' , resolve , this );
    });
}

module.exports = mappingModule;