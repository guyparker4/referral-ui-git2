var servicesModule = {};
var brp = window.brp;

servicesModule.applyPromoCode = function( promotionCode ){

    brp.libs.agent.post( brp.config.servicesBasePath + '/applyPromoCode' )
    .type( 'form' )
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
    brp.libs.agent.post( brp.config.servicesBasePath + '/removePromoCode' )
    .type( 'form' )
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
    brp.libs.agent.post( brp.config.servicesBasePath + '/changeQuantity' )
    .type( 'form' )
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
    brp.libs.agent.post( brp.config.servicesBasePath + '/removeOrderItem' )
    .type( 'form' )
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
    brp.libs.agent.get( brp.config.servicesBasePath + '/getShoppingCart' )
    .query({'HCAuthToken': brp.config.token })
    .send()
    .end( function( err , res ){
        if( err || !res.ok ){
            //error handling
            brp.model.errors.push( {'code':'SGSC001', 'message':'Error in call to getShoppingCart'} );
            brp.model.modalError = true;
        }else{
            brp.validation.getShoppingCart( res );
        }
    });
}

servicesModule.getCatalogSummary = function(){
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

module.exports = servicesModule;