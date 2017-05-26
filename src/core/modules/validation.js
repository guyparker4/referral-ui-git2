var validationModule = {};
var brp = window.brp;

validationModule.applyPromoCode = function( data ){
    console.log( "brp.validation.applyPromoCode" );
    try{
        var result = JSON.parse( data );
    }catch(e){
        brp.model.errors.push( {'code':'VAPC001', 'message':'Invalid JSON in applyPromoCode( validation )'} );
        brp.model.modalError = true;
        return;
    }
    if( result.error ){
        brp.model.errors.push( {'code':result.error.code, 'message': result.error.message } );
        brp.model.modalError = true;
        return;
    }
    //SUCCESS
    if( result.status == "Success" ){
        brp.model.order = result.order;
        return;
    }
}

validationModule.removePromoCode = function( data ){
    console.log( "brp.validation.removePromoCode" );
    try{
        var result = JSON.parse( data );
    }catch(e){
        brp.model.errors.push( {'code':'VRPC001', 'message':'Invalid JSON in removePromoCode( validation )'} );
        brp.model.modalError = true;
        return;
    }
    if( result.error ){
        brp.model.errors.push( {'code':result.error.code, 'message': result.error.message } );
        brp.model.modalError = true;
        return;
    }
    //SUCCESS
    if( result.status == "Success" ){
        brp.model.order = result.order;
        return;
    }
}

validationModule.changeQuantity = function( data ){
    console.log( "brp.validation.changeQuantity" );
    try{
        var result = JSON.parse( data );
    }catch(e){
        brp.model.errors.push( {'code':'VCQ001', 'message':'Invalid JSON in changeQuantity( validation )'} );
        brp.model.modalError = true;
        return;
    }
    if( result.error ){
        brp.model.errors.push( {'code':result.error.code, 'message': result.error.message } );
        brp.model.modalError = true;
        return;
    }
    //SUCCESS
    if( result.status == "Success" ){
        brp.model.order = result.order;
        return;
    }
}

validationModule.removeOrderItem = function( data ){
    console.log( "brp.validation.removeOrderItem" );
    try{
        var result = JSON.parse( data );
    }catch(e){
        brp.model.errors.push( {'code':'VROI001', 'message':'Invalid JSON in removeOrderItem( validation )'} );
        brp.model.modalError = true;
        return;
    }
    if( result.error ){
        brp.model.errors.push( {'code':result.error.code, 'message': result.error.message } );
        brp.model.modalError = true;
        return;
    }
    //SUCCESS
    if( result.status == "Success" ){
        brp.model.order = result.order;
        return;
    }
}

validationModule.getShoppingCart = function( data ){
    console.log( "brp.validation.getShoppingCart" );
    try{
        var result = JSON.parse( data );
    }catch(e){
        brp.model.errors.push( {'code':'VGSC001', 'message':'Invalid JSON in getShoppingCart( validation )'} );
        brp.model.modalError = true;
        return;
    }
    if( result.error ){
        brp.model.errors.push( {'code':result.error.code, 'message': result.error.message } );
        brp.model.modalError = true;
        return;
    }
    //SUCCESS
    if( result.status == "Success" ){
        brp.model.order = result.order;
        return;
    }
}

validationModule.getCatalogSummary = function( data ){
    console.log( "brp.validation.getCatalogSummary" );
    try{
        var result = JSON.parse( data );
    }catch(e){
        brp.model.errors.push( {'code':'VGCS001', 'message':'Invalid JSON in getCatalogSummary( validation )'} );
        brp.model.modalError = true;
        return;
    }
    if( result.error ){
        brp.model.errors.push( {'code':result.error.code, 'message': result.error.message } );
        brp.model.modalError = true;
        return;
    }
    //SUCCESS
    if( result.status == "Success" ){
        brp.model.catalog = result.catalog;
        return;
    }
}

validationModule.getRecommendedProducts = function( data ){
    console.log( "brp.validation.getRecommendedProducts" );
    try{
        var result = JSON.parse( data );
    }catch(e){
        brp.model.errors.push( {'code':'VGRP001', 'message':'Invalid JSON in getRecommendedProducts( validation )'} );
        brp.model.modalError = true;
        return;
    }
    if( result.error ){
        brp.model.errors.push( {'code':result.error.code, 'message': result.error.message } );
        brp.model.modalError = true;
        return;
    }
    //SUCCESS
    if( result.status == "Success" ){
        brp.model.order = result.order;
        return;
    }
}

validationModule.savedDesigns = function( data ){
    console.log( "brp.validation.savedDesigns" );
    try{
        var result = JSON.parse( data );
    }catch(e){
        brp.model.errors.push( {'code':'VSD001', 'message':'Invalid JSON in savedDesigns( validation )'} );
        brp.model.modalError = true;
        return;
    }
    if( result.error ){
        brp.model.errors.push( {'code':result.error.code, 'message': result.error.message } );
        brp.model.modalError = true;
        return;
    }
    //SUCCESS
    if( result.status == "Success" ){
        brp.model.order = result.order;
        return;
    }
}

module.exports = validationModule;