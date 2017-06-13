mul.set( "brp.o.cart.shipping" , [] , {
    template: embed( './templates/brp.o.cart.shipping.html' ),
    props:["data"],
    data(){
        return {
            shippingForm:{
                firstName: "",
                lastName: "",
                companyName: "",
                street1: "",
                street2: "",
                city: "",
                state: "",
                zipcode: "",
                phoneNumber: "",
                country: "US",
                sameAsShipping: true,
                isDomestic: true
            }
        }
    },
    methods: {
        selectShippingAddress( idx ){
            console.log('selectShippingAddress ->', idx);
        },
        editShippingAddress( idx ){
            console.log('editShippingAddress ->', idx);
        },
        deleteShippingAddress( idx ){
            console.log('deleteShippingAddress ->', idx);
        },
        onShipToAddress(){
            console.log('onShipToAddress');
            brp.services.setShippingAddress( this.shippingForm );
            this.reset();
        },
        onSelectAltAddress(){
            console.log('onSelectAltAddress');
        },
        reset(){
            this.shippingForm.firstName = "";
            this.shippingForm.lastName = "";
            this.shippingForm.companyName = "";
            this.shippingForm.street1 = "";
            this.shippingForm.street2 = "";
            this.shippingForm.city = "";
            this.shippingForm.state = "";
            this.shippingForm.zipcode = "";
            this.shippingForm.phoneNumber = "";
            this.shippingForm.country = "US";
            this.shippingForm.sameAsShipping = true;
            this.shippingForm.isDomestic = true;
        }
    }
});