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
    Vue.component( 'a.accmenu' , function( resolve , reject ){
        console.log('a.accmenu');
        mul.get( 'iprint.a.accmenu' , resolve , this );
    });
    Vue.component( 'a.accsubmenu' , function( resolve , reject ){
        console.log('a.accsubmenu');
        mul.get( 'iprint.a.accsubmenu' , resolve , this );
    });
    Vue.component( 'a.accmenuitem' , function( resolve , reject ){
        console.log('a.accmenuitem');
        mul.get( 'iprint.a.accmenuitem' , resolve , this );
    });
    Vue.component( 'a.drillmenu' , function( resolve , reject ){
        console.log('a.drillmenu');
        mul.get( 'iprint.a.drillmenu' , resolve , this );
    });
    Vue.component( 'a.drillsubmenu' , function( resolve , reject ){
        console.log('a.drillsubmenu');
        mul.get( 'iprint.a.drillsubmenu' , resolve , this );
    });

    Vue.component( 'a.drillmenuitem' , function( resolve , reject ){
        console.log('a.drillmenuitem');
        mul.get( 'iprint.a.drillmenuitem' , resolve , this );
    });
    Vue.component( 'a.topbar' , function( resolve , reject ){
        console.log('a.topbar');
        mul.get( 'iprint.a.topbar' , resolve , this );
    });
    Vue.component( 'a.col' , function( resolve , reject ){
        console.log('a.col');
        mul.get( 'iprint.a.col' , resolve , this );
    });
    Vue.component( 'a.row' , function( resolve , reject ){
        console.log('a.row');
        mul.get( 'iprint.a.row' , resolve , this );
    });
    

    Vue.component( 'o.promoheader' , function( resolve , reject ){
		console.log('o.promoheader');
		mul.get( 'iprint.o.promoheader' , resolve , this );
	});

    Vue.component( 'o.productmenu' , function( resolve , reject ){
		console.log('o.productmenu');
		mul.get( 'iprint.o.productmenu' , resolve , this );
	});

    Vue.component( 'o.toolbar' , function( resolve , reject ){
        console.log('o.toolbar');
        mul.get( 'iprint.o.toolbar' , resolve , this );
    });

    Vue.component( 'o.cart' , function( resolve , reject ){
		console.log('o.cart');
		mul.get( 'iprint.o.cart' , resolve , this );
	});

	Vue.component( 'o.footer' , function( resolve , reject ){
		console.log('o.footer');
		mul.get( 'iprint.o.footer' , resolve , this );
	});


};


module.exports = mappingModule;