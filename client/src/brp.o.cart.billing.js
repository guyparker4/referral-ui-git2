mul.set( "brp.o.cart.billing" , [] , {
    template: embed( './templates/brp.o.cart.billing.html' ),
    props:["data"],
    methods: {
        onUseAddress () {
            console.log('onUseAddress');
        }
    }
});