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

    Vue.component( 'a.breadcrumbs' , function( resolve , reject ){
        console.log('a.breadcrumbs');
        mul.get( 'iprint.a.breadcrumbs' , resolve , this );
    });

    Vue.component( 'a.breadcrumb' , function( resolve , reject ){
        console.log('a.breadcrumb');
        mul.get( 'iprint.a.breadcrumb' , resolve , this );
    });

    Vue.component( 'a.accordion' , function( resolve , reject ){
        console.log('a.accordion');
        mul.get( 'iprint.a.accordion' , resolve , this );
    });

    Vue.component( 'a.accordionitem' , function( resolve , reject ){
        console.log('a.accordionitem');
        mul.get( 'iprint.a.accordionitem' , resolve , this );
    });

    Vue.component( 'a.callout' , function( resolve , reject ){
        console.log('a.callout');
        mul.get( 'iprint.a.callout' , resolve , this );
    });

    Vue.component( 'a.card' , function( resolve , reject ){
        console.log('a.card');
        mul.get( 'iprint.a.card' , resolve , this );
    });

    Vue.component( 'a.cardheader' , function( resolve , reject ){
        console.log('a.cardheader');
        mul.get( 'iprint.a.cardheader' , resolve , this );
    });

    Vue.component( 'a.cardsection' , function( resolve , reject ){
        console.log('a.cardsection');
        mul.get( 'iprint.a.cardsection' , resolve , this );
    });

    Vue.component( 'a.media' , function( resolve , reject ){
        console.log('a.media');
        mul.get( 'iprint.a.media' , resolve , this );
    });

    Vue.component( 'a.mediasection' , function( resolve , reject ){
        console.log('a.mediasection');
        mul.get( 'iprint.a.mediasection' , resolve , this );
    });

    Vue.component( 'a.thumbnail' , function( resolve , reject ){
        console.log('a.thumbnail');
        mul.get( 'iprint.a.thumbnail' , resolve , this );
    });

    Vue.component( 'a.dropdown' , function( resolve , reject ){
        console.log('a.dropdown');
        mul.get( 'iprint.a.dropdown' , resolve , this );
    });

	Vue.component( 'a.modal' , function( resolve , reject ){
		console.log('a.modal');
		mul.get( 'iprint.a.modal' , resolve , this );
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

    Vue.component( 'o.cart.shipping' , function( resolve , reject ){
        console.log('o.cart.shipping');
        mul.get( 'iprint.o.cart.shipping' , resolve , this );
    });

	Vue.component( 'o.footer' , function( resolve , reject ){
		console.log('o.footer');
		mul.get( 'iprint.o.footer' , resolve , this );
	});

	Vue.component( 'o.certificate' , function( resolve , reject ){
		console.log('o.certificate');
		mul.get( 'iprint.o.certificate' , resolve , this );
	});

	Vue.component( 'o.checkoutwithlogin' , function( resolve , reject ){
		console.log('o.checkoutwithlogin');
		mul.get( 'iprint.o.checkoutwithlogin' , resolve , this );
	});

	Vue.component( 'o.checkoutwithoutlogin' , function( resolve , reject ){
		console.log('o.checkoutwithoutlogin');
		mul.get( 'iprint.o.checkoutwithoutlogin' , resolve , this );
	});

	Vue.component( 'o.signinorup' , function( resolve , reject ){
		console.log('o.signinorup');
		mul.get( 'iprint.o.signinorup' , resolve , this );
	});

	Vue.component( 'o.forgotpw' , function( resolve , reject ){
		console.log('o.forgotpw');
		mul.get( 'iprint.o.forgotpw' , resolve , this );
	});

	Vue.component( 'o.addressbook' , function( resolve , reject ){
		console.log('o.addressbook');
		mul.get( 'iprint.o.addressbook' , resolve , this );
	});

	Vue.component( 'o.addedtocart' , function( resolve , reject ){
		console.log('o.addedtocart');
		mul.get( 'iprint.o.addedtocart' , resolve , this );
	});

	Vue.component( 'o.quantityselection' , function( resolve , reject ){
		console.log('o.quantityselection');
		mul.get( 'iprint.o.quantityselection' , resolve , this );
	});

	Vue.component( 'o.apparelquantity' , function( resolve , reject ){
		console.log('o.apparelquantity');
		mul.get( 'iprint.o.apparelquantity' , resolve , this );
	});

	Vue.component( 'p.login' , function( resolve , reject ){
		console.log('p.login');
		mul.get( 'iprint.p.login' , resolve , this );
	});

};


module.exports = mappingModule;