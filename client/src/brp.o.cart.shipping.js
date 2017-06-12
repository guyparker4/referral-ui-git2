mul.set( "brp.o.cart.shipping" , [] , {
    template: embed( './templates/brp.o.cart.shipping.html' ),
    props:["data"],
    methods: {
        selectShippingAddress (idx) {
            console.log('selectShippingAddress ->', idx);
        },
        editShippingAddress (idx) {
            console.log('editShippingAddress ->', idx);
        },
        deleteShippingAddress (idx) {
            console.log('deleteShippingAddress ->', idx);
        },
        onShipToAddress () {
            console.log('onShipToAddress');
        },
        onSelectAltAddress () {
            console.log('onSelectAltAddress');
        }
    }
});