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
        console.log( "INVALID JSON" );
        brp.model.errors.push( {'code':'VGSC001', 'message':'Invalid JSON in getShoppingCart( validation )'} );
        brp.model.modalError = true;
        return;
    }
    if( result.error ){
        console.log( "JSON with ERROR" );
        brp.model.errors.push( {'code':result.error.code, 'message': result.error.message } );
        brp.model.modalError = true;
        return;
    }

    console.log( result );
    //SUCCESS
    if( result.status == "Success" ){
        //brp.model.order = result.order;
        return;
    }
}

validationModule.validateAddress = function( data ){
    console.log( "brp.validation.validateAddress" );
    try{
        var result = JSON.parse( data );
    }catch(e){
        brp.model.errors.push( {'code':'VVAS001', 'message':'Invalid JSON in validateAddress( validation )'} );
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

validationModule.signin = function( data ){
    console.log( "brp.validation.signin" );
    try{
        var result = JSON.parse( data );
    }catch(e){
        brp.model.errors.push( {'code':'VSI001', 'message':'Invalid JSON in signin( validation )'} );
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

validationModule.create = function( data ){
    console.log( "brp.validation.create" );
    try{
        var result = JSON.parse( data );
    }catch(e){
        brp.model.errors.push( {'code':'VCR001', 'message':'Invalid JSON in create( validation )'} );
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

validationModule.guest = function( data ){
    console.log( "brp.validation.guest" );
    try{
        var result = JSON.parse( data );
    }catch(e){
        brp.model.errors.push( {'code':'VGU001', 'message':'Invalid JSON in guest( validation )'} );
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

validationModule.setShippingAddress = function( data ){
    console.log( "brp.validation.setShippingAddress" );
    try{
        var result = JSON.parse( data );
    }catch(e){
        brp.model.errors.push( {'code':'VSSA001', 'message':'Invalid JSON in setShippingAddress( validation )'} );
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

validationModule.setBillingAddress = function( data ){
    console.log( "brp.validation.setBillingAddress" );
    try{
        var result = JSON.parse( data );
    }catch(e){
        brp.model.errors.push( {'code':'VSBßA001', 'message':'Invalid JSON in setBillingAddress( validation )'} );
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