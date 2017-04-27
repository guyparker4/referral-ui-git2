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


	Vue.component( 'm.header' , function( resolve , reject ){
		console.log('m.header');
		mul.get( 'iprint.m.header' , resolve , this );
	});
	Vue.component( 'p.home' , function( resolve , reject ){
		console.log('p.home');
		mul.get( 'iprint.p.home' , resolve , this );
	});
	Vue.component( 'm.stepbar' , function( resolve , reject ){
		console.log('m.stepbar');
		mul.get( 'iprint.m.stepbar' , resolve , this );
	});
	Vue.component( 'm.footer' , function( resolve , reject ){
		console.log('m.footer');
		mul.get( 'iprint.m.footer' , resolve , this );
	});
	Vue.component( 'p.welcome' , function( resolve , reject ){
		console.log('p.welcome');
		mul.get( 'iprint.p.welcome' , resolve , this );
	});
	Vue.component( 'p.orderchecks' , function( resolve , reject ){
		console.log('p.orderchecks');
		mul.get( 'iprint.p.orderchecks' , resolve , this );
	});
	Vue.component( 'm.addressblock' , function( resolve , reject ){
		console.log('m.addressblock');
		mul.get( 'iprint.m.addressblock' , resolve , this );
	});
	Vue.component( 'm.checknumber' , function( resolve , reject ){
		console.log('m.checknumber');
		mul.get( 'iprint.m.checknumber' , resolve , this );
	});
	Vue.component( 'm.checkoutbtn' , function( resolve , reject ){
		console.log('m.checkoutbtn');
		mul.get( 'iprint.m.checkoutbtn' , resolve , this );
	});
	Vue.component( 'm.checkstyle' , function( resolve , reject ){
		console.log('m.checkstyle');
		mul.get( 'iprint.m.checkstyle' , resolve , this );
	});
	Vue.component( 'm.description' , function( resolve , reject ){
		console.log('m.description');
		mul.get( 'iprint.m.description' , resolve , this );
	});
	Vue.component( 'm.fraudrecovery' , function( resolve , reject ){
		console.log('m.fraudrecovery');
		mul.get( 'iprint.m.fraudrecovery' , resolve , this );
	});
	Vue.component( 'm.orderchecksbtns' , function( resolve , reject ){
		console.log('m.orderchecksbtns');
		mul.get( 'iprint.m.orderchecksbtns' , resolve , this );
	});
	Vue.component( 'm.otherproducts' , function( resolve , reject ){
		console.log('m.otherproducts');
		mul.get( 'iprint.m.otherproducts' , resolve , this );
	});
	Vue.component( 'm.quantity' , function( resolve , reject ){
		console.log('m.quantity');
		mul.get( 'iprint.m.quantity' , resolve , this );
	});
	Vue.component( 'm.stepindicator' , function( resolve , reject ){
		console.log('m.stepindicator');
		mul.get( 'iprint.m.stepindicator' , resolve , this );
	});
	Vue.component( 'm.carousel' , function( resolve , reject ){
		console.log('m.carousel');
		mul.get( 'iprint.m.carousel' , resolve , this );
	});
	Vue.component( 'a.card' , function( resolve , reject ){
		console.log('a.card');
		mul.get( 'iprint.a.card' , resolve , this );
	});
	Vue.component( 'm.centeraccent' , function( resolve , reject ){
		console.log('m.centeraccent');
		mul.get( 'iprint.m.centeraccent' , resolve , this );
	});
	Vue.component( 'm.customfont' , function( resolve , reject ){
		console.log('m.customfont');
		mul.get( 'iprint.m.customfont' , resolve , this );
	});
	Vue.component( 'm.leftaccent' , function( resolve , reject ){
		console.log('m.leftaccent');
		mul.get( 'iprint.m.leftaccent' , resolve , this );
	});
	Vue.component( 'm.oneliners' , function( resolve , reject ){
		console.log('m.oneliners');
		mul.get( 'iprint.m.oneliners' , resolve , this );
	});
	Vue.component( 'a.modal' , function( resolve , reject ){
		console.log('a.modal');
		mul.get( 'iprint.a.modal' , resolve , this );
	});
	Vue.component( 'm.newproduct' , function( resolve , reject ){
		console.log('m.newproduct');
		mul.get( 'iprint.m.newproduct' , resolve , this );
	});
	Vue.component( 'p.catalog' , function( resolve , reject ){
		console.log('p.catalog');
		mul.get( 'iprint.p.catalog' , resolve , this );
	});
}

module.exports = mappingModule;