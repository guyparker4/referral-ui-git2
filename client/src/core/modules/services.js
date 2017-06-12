var servicesModule = {};
var brp = window.brp;

servicesModule.applyPromoCode = function( promotionCode ){
    console.log( "brp.services.applyPromoCode" );

    brp.libs.agent.post( brp.config.servicesBasePath + '/applyPromoCode' )
    .type( 'json' )
    .query({'HCAuthToken': brp.config.token })
    .send( { promotionCode: promotionCode } )
    .end( function( err , res ){
        if( err || !res.ok ){
            //error handling
            brp.model.errors.push( {'code':'SAPC001', 'message':'Error in call to applyPromoCode'} );
            brp.model.modalError = true;
        }else{
            brp.validation.applyPromoCode( res );
        }
    });

}

servicesModule.removePromoCode = function( promotionCode ){
    console.log( "brp.services.removePromoCode" );
    brp.libs.agent.post( brp.config.servicesBasePath + '/removePromoCode' )
    .type( 'json' )
    .query({'HCAuthToken': brp.config.token })
    .send( { promotionCode: promotionCode } )
    .end( function( err , res ){
        if( err || !res.ok ){
            //error handling
            brp.model.errors.push( {'code':'SRPC001', 'message':'Error in call to removePromoCode'} );
            brp.model.modalError = true;
        }else{
            brp.validation.removePromoCode( res );
        }
    });
}

servicesModule.changeQuantity = function( relationshipId , quantity ){
    console.log( "brp.services.changeQuantity" );
    brp.libs.agent.post( brp.config.servicesBasePath + '/changeQuantity' )
    .type( 'json' )
    .query({'HCAuthToken': brp.config.token })
    .send( { relationshipId:relationshipId , quantity:quantity } )
    .end( function( err , res ){
        if( err || !res.ok ){
            //error handling
            brp.model.errors.push( {'code':'SCQ001', 'message':'Error in call to changeQuantity'} );
            brp.model.modalError = true;
        }else{
            brp.validation.changeQuantity( res );
        }
    });
}

servicesModule.removeOrderItem = function( relationshipId ){
    console.log( "brp.services.removeOrderItem" );
    brp.libs.agent.post( brp.config.servicesBasePath + '/removeOrderItem' )
    .type( 'json' )
    .query({'HCAuthToken': brp.config.token })
    .send( { relationshipId:relationshipId } )
    .end( function( err , res ){
        if( err || !res.ok ){
            //error handling
            brp.model.errors.push( {'code':'SROI001', 'message':'Error in call to removeOrderItem'} );
            brp.model.modalError = true;
        }else{
            brp.validation.removeOrderItem( res );
        }
    });
}

servicesModule.getShoppingCart = function(){
    console.log( "brp.services.getShoppingCart" );
    brp.libs.agent.get( brp.config.servicesBasePath + '/getShoppingCart' )
    .query({'HCAuthToken': brp.config.token })
    .send()
    .end( function( err , res ){
        if( err || !res.ok ){
            //error handling
            brp.model.errors.push( {'code':'SGSC001', 'message':'Error in call to getShoppingCart'} );
            brp.model.modalError = true;
        }else{
            brp.validation.getShoppingCart( res.text );
        }
    });
}

servicesModule.getCatalogSummary = function(){
    console.log( "brp.services.getCatalogSummary" );
    brp.libs.agent.get( brp.config.servicesBasePath + '/getCatalogSummary' )
    .query({'HCAuthToken': brp.config.token })
    .send()
    .end( function( err , res ){
        if( err || !res.ok ){
            //error handling
            brp.model.errors.push( {'code':'SGCS001', 'message':'Error in call to getCatalogSummary'} );
            brp.model.modalError = true;
        }else{
            brp.validation.getCatalogSummary( res );
        }
    });
}

servicesModule.getRecommendedProducts = function(){
    console.log( "brp.services.getRecommendedProducts" );
    brp.libs.agent.get( brp.config.servicesBasePath + '/getRecommendedProducts' )
    .query({'HCAuthToken': brp.config.token })
    .send()
    .end( function( err , res ){
        if( err || !res.ok ){
            //error handling
            brp.model.errors.push( {'code':'SGRP001', 'message':'Error in call to getRecommendedProducts'} );
            brp.model.modalError = true;
        }else{
            brp.validation.getRecommendedProducts( res );
        }
    });
}

servicesModule.savedDesigns = function(){
    console.log( "brp.services.savedDesigns" );
    brp.libs.agent.get( brp.config.servicesBasePath + '/savedDesigns' )
    .query({'HCAuthToken': brp.config.token })
    .send()
    .end( function( err , res ){
        if( err || !res.ok ){
            //error handling
            brp.model.errors.push( {'code':'SSD001', 'message':'Error in call to savedDesigns'} );
            brp.model.modalError = true;
        }else{
            brp.validation.savedDesigns( res );
        }
    });
}

servicesModule.signin = function( login , password ){
    console.log( "brp.services.signin" );
    brp.libs.agent.post( brp.config.servicesBasePath + '/signin' )
    .type( 'json' )
    .query({'HCAuthToken': brp.config.token })
    .send( { login:login , password:password } )
    .end( function( err , res ){
        if( err || !res.ok ){
            //error handling
            brp.model.errors.push( {'code':'SSI001', 'message':'Error in call to signin'} );
            brp.model.modalError = true;
        }else{
            brp.validation.signin( res );
        }
    });
}

servicesModule.create = function( login , password , question , answer , optin ){
    console.log( "brp.services.create" );
    brp.libs.agent.post( brp.config.servicesBasePath + '/create' )
    .type( 'json' )
    .query({'HCAuthToken': brp.config.token })
    .send( { login:login , password:password , question:question , answer:answer , optin:optin } )
    .end( function( err , res ){
        if( err || !res.ok ){
            //error handling
            brp.model.errors.push( {'code':'SCR001', 'message':'Error in call to create'} );
            brp.model.modalError = true;
        }else{
            brp.validation.create( res );
        }
    });
}

servicesModule.guest = function( login , optin ){
    console.log( "brp.services.guest" );
    brp.libs.agent.post( brp.config.servicesBasePath + '/guest' )
    .type( 'json' )
    .query({'HCAuthToken': brp.config.token })
    .send( { login:login , optin:optin } )
    .end( function( err , res ){
        if( err || !res.ok ){
            //error handling
            brp.model.errors.push( {'code':'SGU001', 'message':'Error in call to guest'} );
            brp.model.modalError = true;
        }else{
            brp.validation.guest( res );
        }
    });
}

servicesModule.setShippingAddress = function( data ){
    console.log( "brp.services.setShippingAddress" );
    brp.libs.agent.post( brp.config.servicesBasePath + '/setShippingAddress' )
    .type( 'json' )
    .query({'HCAuthToken': brp.config.token })
    .send( data )
    .end( function( err , res ){
        if( err || !res.ok ){
            //error handling
            brp.model.errors.push( {'code':'SSSA001', 'message':'Error in call to setShippingAddress'} );
            brp.model.modalError = true;
        }else{
            brp.validation.setShippingAddress( res );
        }
    });
}

servicesModule.setBillingAddress = function( data ){
    console.log( "brp.services.setBillingAddress" );
    brp.libs.agent.post( brp.config.servicesBasePath + '/setBillingAddress' )
    .type( 'json' )
    .query({'HCAuthToken': brp.config.token })
    .send( data )
    .end( function( err , res ){
        if( err || !res.ok ){
            //error handling
            brp.model.errors.push( {'code':'SSBA001', 'message':'Error in call to setBillingAddress'} );
            brp.model.modalError = true;
        }else{
            brp.validation.setBillingAddress( res );
        }
    });
}

module.exports = servicesModule;