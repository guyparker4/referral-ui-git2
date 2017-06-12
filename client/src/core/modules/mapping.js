var m = {}

console.log("mapping init");

m['a.button'] = Vue.component( 'a.button' , function( resolve , reject ){
    console.log('a.button');
    mul.get( 'brp.a.button' , resolve , this );
});

m['a.buttongroup'] = Vue.component( 'a.buttongroup' , function( resolve , reject ){
    console.log('a.buttongroup');
    mul.get( 'brp.a.buttongroup' , resolve , this );
});

m['a.switch'] = Vue.component( 'a.switch' , function( resolve , reject ){
    console.log('a.switch');
    mul.get( 'brp.a.switch' , resolve , this );
});

m['a.menu'] = Vue.component( 'a.menu' , function( resolve , reject ){
    console.log('a.menu');
    mul.get( 'brp.a.menu' , resolve , this );
});

m['a.submenu'] = Vue.component( 'a.submenu' , function( resolve , reject ){
    console.log('a.submenu');
    mul.get( 'brp.a.submenu' , resolve , this );
});

m['a.menuitem'] = Vue.component( 'a.menuitem' , function( resolve , reject ){
    console.log('a.menuitem');
    mul.get( 'brp.a.menuitem' , resolve , this );
});

m['a.accmenu'] = Vue.component( 'a.accmenu' , function( resolve , reject ){
    console.log('a.accmenu');
    mul.get( 'brp.a.accmenu' , resolve , this );
});

m['a.accsubmenu'] = Vue.component( 'a.accsubmenu' , function( resolve , reject ){
    console.log('a.accsubmenu');
    mul.get( 'brp.a.accsubmenu' , resolve , this );
});

m['a.accmenuitem'] = Vue.component( 'a.accmenuitem' , function( resolve , reject ){
    console.log('a.accmenuitem');
    mul.get( 'brp.a.accmenuitem' , resolve , this );
});

m['a.drillmenu'] = Vue.component( 'a.drillmenu' , function( resolve , reject ){
    console.log('a.drillmenu');
    mul.get( 'brp.a.drillmenu' , resolve , this );
});

m['a.drillsubmenu'] = Vue.component( 'a.drillsubmenu' , function( resolve , reject ){
    console.log('a.drillsubmenu');
    mul.get( 'brp.a.drillsubmenu' , resolve , this );
});

m['a.drillmenuitem'] = Vue.component( 'a.drillmenuitem' , function( resolve , reject ){
    console.log('a.drillmenuitem');
    mul.get( 'brp.a.drillmenuitem' , resolve , this );
});

m['a.topbar'] = Vue.component( 'a.topbar' , function( resolve , reject ){
    console.log('a.topbar');
    mul.get( 'brp.a.topbar' , resolve , this );
});

m['a.col'] = Vue.component( 'a.col' , function( resolve , reject ){
    console.log('a.col');
    mul.get( 'brp.a.col' , resolve , this );
});

m['a.row'] = Vue.component( 'a.row' , function( resolve , reject ){
    console.log('a.row');
    mul.get( 'brp.a.row' , resolve , this );
});

m['a.breadcrumbs'] = Vue.component( 'a.breadcrumbs' , function( resolve , reject ){
    console.log('a.breadcrumbs');
    mul.get( 'brp.a.breadcrumbs' , resolve , this );
});

m['a.breadcrumb'] = Vue.component( 'a.breadcrumb' , function( resolve , reject ){
    console.log('a.breadcrumb');
    mul.get( 'brp.a.breadcrumb' , resolve , this );
});

m['a.accordion'] = Vue.component( 'a.accordion' , function( resolve , reject ){
    console.log('a.accordion');
    mul.get( 'brp.a.accordion' , resolve , this );
});

m['a.accordionitem'] = Vue.component( 'a.accordionitem' , function( resolve , reject ){
    console.log('a.accordionitem');
    mul.get( 'brp.a.accordionitem' , resolve , this );
});

m['a.callout'] = Vue.component( 'a.callout' , function( resolve , reject ){
    console.log('a.callout');
    mul.get( 'brp.a.callout' , resolve , this );
});

m['a.card'] = Vue.component( 'a.card' , function( resolve , reject ){
    console.log('a.card');
    mul.get( 'brp.a.card' , resolve , this );
});

m['a.cardheader'] = Vue.component( 'a.cardheader' , function( resolve , reject ){
    console.log('a.cardheader');
    mul.get( 'brp.a.cardheader' , resolve , this );
});

m['a.cardsection'] = Vue.component( 'a.cardsection' , function( resolve , reject ){
    console.log('a.cardsection');
    mul.get( 'brp.a.cardsection' , resolve , this );
});

m['a.media'] = Vue.component( 'a.media' , function( resolve , reject ){
    console.log('a.media');
    mul.get( 'brp.a.media' , resolve , this );
});

m['a.mediasection'] = Vue.component( 'a.mediasection' , function( resolve , reject ){
    console.log('a.mediasection');
    mul.get( 'brp.a.mediasection' , resolve , this );
});

m['a.thumbnail'] = Vue.component( 'a.thumbnail' , function( resolve , reject ){
    console.log('a.thumbnail');
    mul.get( 'brp.a.thumbnail' , resolve , this );
});

m['a.dropdown'] = Vue.component( 'a.dropdown' , function( resolve , reject ){
    console.log('a.dropdown');
    mul.get( 'brp.a.dropdown' , resolve , this );
});

m['a.modal'] = Vue.component( 'a.modal' , function( resolve , reject ){
    console.log('a.modal');
    mul.get( 'brp.a.modal' , resolve , this );
});

m['a.promoheader'] = Vue.component( 'o.promoheader' , function( resolve , reject ){
    console.log('o.promoheader');
    mul.get( 'brp.o.promoheader' , resolve , this );
});

m['a.productmenu'] = Vue.component( 'o.productmenu' , function( resolve , reject ){
    console.log('o.productmenu');
    mul.get( 'brp.o.productmenu' , resolve , this );
});

m['o.toolbar'] = Vue.component( 'o.toolbar' , function( resolve , reject ){
    console.log('o.toolbar');
    mul.get( 'brp.o.toolbar' , resolve , this );
});

m['o.cart'] = Vue.component( 'o.cart' , function( resolve , reject ){
    console.log('o.cart');
    mul.get( 'brp.o.cart' , resolve , this );
});

m['o.shipping'] = Vue.component( 'o.cart.shipping' , function( resolve , reject ){
    console.log('o.cart.shipping');
    mul.get( 'brp.o.cart.shipping' , resolve , this );
});

m['o.billing'] = Vue.component( 'o.cart.billing' , function( resolve , reject ){
    console.log('o.cart.billing');
    mul.get( 'brp.o.cart.billing' , resolve , this );
});

m['o.footer'] = Vue.component( 'o.footer' , function( resolve , reject ){
    console.log('o.footer');
    mul.get( 'brp.o.footer' , resolve , this );
});

m['o.certificate'] = Vue.component( 'o.certificate' , function( resolve , reject ){
    console.log('o.certificate');
    mul.get( 'brp.o.certificate' , resolve , this );
});

m['o.checkoutwithlogin'] = Vue.component( 'o.checkoutwithlogin' , function( resolve , reject ){
    console.log('o.checkoutwithlogin');
    mul.get( 'brp.o.checkoutwithlogin' , resolve , this );
});

m['o.checkoutwithoutlogin'] = Vue.component( 'o.checkoutwithoutlogin' , function( resolve , reject ){
    console.log('o.checkoutwithoutlogin');
    mul.get( 'brp.o.checkoutwithoutlogin' , resolve , this );
});

m['o.signinorup'] = Vue.component( 'o.signinorup' , function( resolve , reject ){
    console.log('o.signinorup');
    mul.get( 'brp.o.signinorup' , resolve , this );
});

m['o.forgotpw'] = Vue.component( 'o.forgotpw' , function( resolve , reject ){
    console.log('o.forgotpw');
    mul.get( 'brp.o.forgotpw' , resolve , this );
});

m['o.addressbook'] = Vue.component( 'o.addressbook' , function( resolve , reject ){
    console.log('o.addressbook');
    mul.get( 'brp.o.addressbook' , resolve , this );
});

m['o.addedtocart'] = Vue.component( 'o.addedtocart' , function( resolve , reject ){
    console.log('o.addedtocart');
    mul.get( 'brp.o.addedtocart' , resolve , this );
});

m['o.quantityselection'] = Vue.component( 'o.quantityselection' , function( resolve , reject ){
    console.log('o.quantityselection');
    mul.get( 'brp.o.quantityselection' , resolve , this );
});

m['o.apparelquantity'] = Vue.component( 'o.apparelquantity' , function( resolve , reject ){
    console.log('o.apparelquantity');
    mul.get( 'brp.o.apparelquantity' , resolve , this );
});

m['o.deleteshippingaddress'] = Vue.component( 'o.deleteshippingaddress' , function( resolve , reject ){
    console.log('o.deleteshippingaddress');
    mul.get( 'brp.o.deleteshippingaddress' , resolve , this );
});

m['o.editaddress'] = Vue.component( 'o.editaddress' , function( resolve , reject ){
    console.log('o.editaddress');
    mul.get( 'brp.o.editaddress' , resolve , this );
});

m['o.addressverification'] = Vue.component( 'o.addressverification' , function( resolve , reject ){
    console.log('o.addressverification');
    mul.get( 'brp.o.addressverification' , resolve , this );
});

m['o.paymentmethod'] = Vue.component( 'o.paymentmethod' , function( resolve , reject ){
    console.log('o.paymentmethod');
    mul.get( 'brp.o.paymentmethod' , resolve , this );
});

m['o.youritems'] = Vue.component( 'o.youritems' , function( resolve , reject ){
    console.log('o.youritems');
    mul.get( 'brp.o.youritems' , resolve , this );
});

m['o.yourorder'] = Vue.component( 'o.yourorder' , function( resolve , reject ){
    console.log('o.yourorder');
    mul.get( 'brp.o.yourorder' , resolve , this );
});

m['o.shippingmethod'] = Vue.component( 'o.shippingmethod' , function( resolve , reject ){
    console.log('o.shippingmethod');
    mul.get( 'brp.o.shippingmethod' , resolve , this );
});
m['o.shippingdetail'] = Vue.component( 'o.shippingdetail' , function( resolve , reject ){
    console.log('o.shippingdetail');
    mul.get( 'brp.o.shippingdetail' , resolve , this );
});

m['o.youmayalsolike'] = Vue.component( 'o.youmayalsolike' , function( resolve , reject ){
    console.log('o.youmayalsolike');
    mul.get( 'brp.o.youmayalsolike' , resolve , this );
});

m['o.login'] = Vue.component( 'p.login' , function( resolve , reject ){
    console.log('p.login');
    mul.get( 'brp.p.login' , resolve , this );
});


module.exports = m;