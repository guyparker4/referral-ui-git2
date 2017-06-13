'use strict';

//API USES COOKIES
const superagent = require('superagent');
const agent = superagent.agent();

global.application = {
    console:console
}

//API DOES NOT USE COOKIES
//const agent = require('superagent');

const config = {
    token:"TestAuthToken123",
    servicesBasePath: "https://uat.iprint.com/services"
}

const callGet = function( path, args, res, next ){
    agent.get( config.servicesBasePath + '/' + path )
    .query( {'HCAuthToken': config.token } )
    .send()
    .end( function( apierr , apires ){
        settings.console.log( " CALLGET RESPONSE " );
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        settings.console.log( JSON.stringify( apires ) );
        settings.console.log( JSON.stringify( apierr ) );
        if( apierr || !apires.ok ){
            res.end("");
            settings.console.log( JSON.stringify( apierr ) );
        }else{
            res.end( apires.text );
        }
    });
}

const callPost = function( path, args, res, next ){
    agent.post( config.servicesBasePath + '/' + path )
    .query( {'HCAuthToken': config.token } )
    .send( args )
    .end( function( apierr , apires ){
        settings.console.log( " CALLPOST RESPONSE " );
        res.setHeader( 'Content-Type', 'application/json' );
        res.setHeader( 'Referrer-Policy', 'same-origin' );
        res.setHeader( 'Access-Control-Allow-Origin', '*' );
        settings.console.log( JSON.stringify( apires ) );
        settings.console.log( JSON.stringify( apierr ) );
        if( apierr || !apires.ok ){
            res.end("");
            settings.console.log( JSON.stringify( apierr ) );
        }else{
            res.end( apires.text );
        }
    });
}

exports.addressBookAddPOST = function(args, res, next) {
    callPost( 'addressBookAdd' , args, res, next );
}

exports.addressBookEditPOST = function(args, res, next) {
    callPost( 'addressBookEdit' , args, res, next );
}

exports.addressBookGET = function(args, res, next) {
    callGet( 'addressBook' , args, res, next );
}

exports.addressBookRemovePOST = function(args, res, next) {
    callPost( 'addressBookRemove' , args, res, next );
}

exports.apiShippingAddressItemPOST = function(args, res, next) {
    callPost( 'apiShippingAddressItem' , args, res, next );
}

exports.apiShippingMethodPOST = function(args, res, next) {
    callPost( 'apiShippingMethod' , args, res, next );
}

exports.applyPromoCodePOST = function(args, res, next) {
    callPost( 'applyPromoCode' , args, res, next );
}

exports.changeQuantityPOST = function(args, res, next) {
    callPost( 'changeQuantity' , args, res, next );
}

exports.createPOST = function(args, res, next) {
    callPost( 'create' , args, res, next );
}

exports.getCartRecommendedProductsGET = function(args, res, next) {
    callGet( 'getCartRecommendedProducts' , args, res, next );
}

exports.getHeaderInfoGET = function(args, res, next) {
    callGet( 'getHeaderInfo' , args, res, next );
}

exports.getShoppingCartGET = function(args, res, next) {
    callGet( 'getShoppingCart' , args, res, next );
}

exports.guestPOST = function(args, res, next) {
    callPost( 'guest' , args, res, next );
}

exports.removeOrderItemPOST = function(args, res, next) {
    callPost( 'removeOrderItem' , args, res, next );
}

exports.removePromoCodePOST = function(args, res, next) {
    callPost( 'removePromoCode' , args, res, next );
}

exports.savedDesignsGET = function(args, res, next) {
    callGet( 'savedDesigns' , args, res, next );
}

exports.services_below_are_undefinedDELETE = function(args, res, next) {
    callGet( 'services_below_are_undefined' , args, res, next );
}

exports.setBillingAddressPOST = function(args, res, next) {
    callPost( 'setBillingAddress' , args, res, next );
}

exports.setShippingAddressPOST = function(args, res, next) {
    callPost( 'setShippingAddress' , args, res, next );
}

exports.signinPOST = function(args, res, next) {
    callPost( 'signin' , args, res, next );
}

exports.validateShippingAddressPOST = function(args, res, next) {
    callPost( 'validateShippingAddress' , args, res, next );
}

