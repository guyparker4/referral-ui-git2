mul.set( "brp.o.cart" , [] , {
    template: embed( './templates/brp.o.cart.html' ),
    props:["data"],
    data(){
        return {
            promoCodeInput:""
        }
    },
    methods:{
        applyPromoCode(){
            brp.services.applyPromoCode( this.promoCodeInput );
            this.promoCodeInput = "";
        },
        removePromoCode(){
            // need to change this, promocode not returning results accuratly
            // should just click X next to promocode on cart
            // hard to remove when you cant add
            brp.services.removePromoCode( this.promoCodeInput );
        },
        removeOrderItem( itemId ){
            brp.services.removeOrderItem( itemId );
        },
        quantitySelected( event , item ){
            console.log( event );
            console.log( item );
            if( event.srcElement.value == item.quantity ){
                console.log( "SAME Quantity Selected")
                return;
            }else{
                brp.services.changeQuantity( item.relationshipId , parseInt( event.srcElement.value ) );
            }
        }
    }
});