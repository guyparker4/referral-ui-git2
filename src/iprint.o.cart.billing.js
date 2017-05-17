mul.set( "iprint.o.cart.billing" , [] , {
    template: embed( './templates/iprint.o.cart.billing.html' ),
    props:["data"],
    methods: {
        onUseAddress () {
            console.log('onUseAddress');
        }
    }
});