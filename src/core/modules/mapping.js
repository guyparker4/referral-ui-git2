var mappingModule = function(){

    console.log("mapping init");

    Vue.component( 'a.button' , function( resolve , reject ){
        console.log('a.button');
        mul.get( 'brp.a.button' , resolve , this );
    });

    Vue.component( 'a.buttongroup' , function( resolve , reject ){
        console.log('a.buttongroup');
        mul.get( 'brp.a.buttongroup' , resolve , this );
    });

    Vue.component( 'a.switch' , function( resolve , reject ){
        console.log('a.switch');
        mul.get( 'brp.a.switch' , resolve , this );
    });

    Vue.component( 'a.menu' , function( resolve , reject ){
        console.log('a.menu');
        mul.get( 'brp.a.menu' , resolve , this );
    });

    Vue.component( 'a.submenu' , function( resolve , reject ){
        console.log('a.submenu');
        mul.get( 'brp.a.submenu' , resolve , this );
    });

    Vue.component( 'a.menuitem' , function( resolve , reject ){
        console.log('a.menuitem');
        mul.get( 'brp.a.menuitem' , resolve , this );
    });

    Vue.component( 'a.accmenu' , function( resolve , reject ){
        console.log('a.accmenu');
        mul.get( 'brp.a.accmenu' , resolve , this );
    });

    Vue.component( 'a.accsubmenu' , function( resolve , reject ){
        console.log('a.accsubmenu');
        mul.get( 'brp.a.accsubmenu' , resolve , this );
    });

    Vue.component( 'a.accmenuitem' , function( resolve , reject ){
        console.log('a.accmenuitem');
        mul.get( 'brp.a.accmenuitem' , resolve , this );
    });

    Vue.component( 'a.drillmenu' , function( resolve , reject ){
        console.log('a.drillmenu');
        mul.get( 'brp.a.drillmenu' , resolve , this );
    });

    Vue.component( 'a.drillsubmenu' , function( resolve , reject ){
        console.log('a.drillsubmenu');
        mul.get( 'brp.a.drillsubmenu' , resolve , this );
    });

    Vue.component( 'a.drillmenuitem' , function( resolve , reject ){
        console.log('a.drillmenuitem');
        mul.get( 'brp.a.drillmenuitem' , resolve , this );
    });

    Vue.component( 'a.topbar' , function( resolve , reject ){
        console.log('a.topbar');
        mul.get( 'brp.a.topbar' , resolve , this );
    });

    Vue.component( 'a.col' , function( resolve , reject ){
        console.log('a.col');
        mul.get( 'brp.a.col' , resolve , this );
    });

    Vue.component( 'a.row' , function( resolve , reject ){
        console.log('a.row');
        mul.get( 'brp.a.row' , resolve , this );
    });

    Vue.component( 'a.breadcrumbs' , function( resolve , reject ){
        console.log('a.breadcrumbs');
        mul.get( 'brp.a.breadcrumbs' , resolve , this );
    });

    Vue.component( 'a.breadcrumb' , function( resolve , reject ){
        console.log('a.breadcrumb');
        mul.get( 'brp.a.breadcrumb' , resolve , this );
    });

    Vue.component( 'a.accordion' , function( resolve , reject ){
        console.log('a.accordion');
        mul.get( 'brp.a.accordion' , resolve , this );
    });

    Vue.component( 'a.accordionitem' , function( resolve , reject ){
        console.log('a.accordionitem');
        mul.get( 'brp.a.accordionitem' , resolve , this );
    });

    Vue.component( 'a.callout' , function( resolve , reject ){
        console.log('a.callout');
        mul.get( 'brp.a.callout' , resolve , this );
    });

    Vue.component( 'a.card' , function( resolve , reject ){
        console.log('a.card');
        mul.get( 'brp.a.card' , resolve , this );
    });

    Vue.component( 'a.cardheader' , function( resolve , reject ){
        console.log('a.cardheader');
        mul.get( 'brp.a.cardheader' , resolve , this );
    });

    Vue.component( 'a.cardsection' , function( resolve , reject ){
        console.log('a.cardsection');
        mul.get( 'brp.a.cardsection' , resolve , this );
    });

    Vue.component( 'a.media' , function( resolve , reject ){
        console.log('a.media');
        mul.get( 'brp.a.media' , resolve , this );
    });

    Vue.component( 'a.mediasection' , function( resolve , reject ){
        console.log('a.mediasection');
        mul.get( 'brp.a.mediasection' , resolve , this );
    });

    Vue.component( 'a.thumbnail' , function( resolve , reject ){
        console.log('a.thumbnail');
        mul.get( 'brp.a.thumbnail' , resolve , this );
    });

    Vue.component( 'a.dropdown' , function( resolve , reject ){
        console.log('a.dropdown');
        mul.get( 'brp.a.dropdown' , resolve , this );
    });

	Vue.component( 'a.modal' , function( resolve , reject ){
		console.log('a.modal');
		mul.get( 'brp.a.modal' , resolve , this );
	});

    Vue.component( 'o.promoheader' , function( resolve , reject ){
		console.log('o.promoheader');
		mul.get( 'brp.o.promoheader' , resolve , this );
	});

    Vue.component( 'o.productmenu' , function( resolve , reject ){
		console.log('o.productmenu');
		mul.get( 'brp.o.productmenu' , resolve , this );
	});

    Vue.component( 'o.toolbar' , function( resolve , reject ){
        console.log('o.toolbar');
        mul.get( 'brp.o.toolbar' , resolve , this );
    });

    Vue.component( 'o.cart' , function( resolve , reject ){
		console.log('o.cart');
		mul.get( 'brp.o.cart' , resolve , this );
	});

    Vue.component( 'o.cart.shipping' , function( resolve , reject ){
        console.log('o.cart.shipping');
        mul.get( 'brp.o.cart.shipping' , resolve , this );
    });

	Vue.component( 'o.footer' , function( resolve , reject ){
		console.log('o.footer');
		mul.get( 'brp.o.footer' , resolve , this );
	});

	Vue.component( 'o.certificate' , function( resolve , reject ){
		console.log('o.certificate');
		mul.get( 'brp.o.certificate' , resolve , this );
	});

	Vue.component( 'o.checkoutwithlogin' , function( resolve , reject ){
		console.log('o.checkoutwithlogin');
		mul.get( 'brp.o.checkoutwithlogin' , resolve , this );
	});

	Vue.component( 'o.checkoutwithoutlogin' , function( resolve , reject ){
		console.log('o.checkoutwithoutlogin');
		mul.get( 'brp.o.checkoutwithoutlogin' , resolve , this );
	});

	Vue.component( 'o.signinorup' , function( resolve , reject ){
		console.log('o.signinorup');
		mul.get( 'brp.o.signinorup' , resolve , this );
	});

	Vue.component( 'o.forgotpw' , function( resolve , reject ){
		console.log('o.forgotpw');
		mul.get( 'brp.o.forgotpw' , resolve , this );
	});

	Vue.component( 'o.addressbook' , function( resolve , reject ){
		console.log('o.addressbook');
		mul.get( 'brp.o.addressbook' , resolve , this );
	});

	Vue.component( 'o.addedtocart' , function( resolve , reject ){
		console.log('o.addedtocart');
		mul.get( 'brp.o.addedtocart' , resolve , this );
	});

	Vue.component( 'o.quantityselection' , function( resolve , reject ){
		console.log('o.quantityselection');
		mul.get( 'brp.o.quantityselection' , resolve , this );
	});

	Vue.component( 'o.apparelquantity' , function( resolve , reject ){
		console.log('o.apparelquantity');
		mul.get( 'brp.o.apparelquantity' , resolve , this );
	});

	Vue.component( 'o.deleteshippingaddress' , function( resolve , reject ){
		console.log('o.deleteshippingaddress');
		mul.get( 'brp.o.deleteshippingaddress' , resolve , this );
	});

	Vue.component( 'o.editaddress' , function( resolve , reject ){
		console.log('o.editaddress');
		mul.get( 'brp.o.editaddress' , resolve , this );
	});

	Vue.component( 'o.addressverification' , function( resolve , reject ){
		console.log('o.addressverification');
		mul.get( 'brp.o.addressverification' , resolve , this );
	});

	Vue.component( 'p.login' , function( resolve , reject ){
		console.log('p.login');
		mul.get( 'brp.p.login' , resolve , this );
	});

};


module.exports = mappingModule;