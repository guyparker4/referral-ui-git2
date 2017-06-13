mul.set( "brp.o.cart.billing" , [] , {
    template: embed( './templates/brp.o.cart.billing.html' ),
    props:["data"],
    data(){
        return {
            billingForm:{
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
                isDomestic: true
            }
        }
    },
    methods: {
        onUseAddress () {
            console.log('onUseAddress');
            brp.services.setBillingAddress( this.billingForm );
            this.reset();
        },
        reset(){
            this.billingForm.firstName = "";
            this.billingForm.lastName = "";
            this.billingForm.companyName = "";
            this.billingForm.street1 = "";
            this.billingForm.street2 = "";
            this.billingForm.city = "";
            this.billingForm.state = "";
            this.billingForm.zipcode = "";
            this.billingForm.phoneNumber = "";
            this.billingForm.country = "US";
            this.billingForm.isDomestic = true;
        }
    }
});