var validationModule = {};
var brp = window.brp;

validationModule.applyPromoCode = function( data ){
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