'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.addressBookAddPOST = function addressBookAddPOST (req, res, next) {
  Default.addressBookAddPOST(req.swagger.params, res, next);
};

module.exports.addressBookEditPOST = function addressBookEditPOST (req, res, next) {
  Default.addressBookEditPOST(req.swagger.params, res, next);
};

module.exports.addressBookGET = function addressBookGET (req, res, next) {
  Default.addressBookGET(req.swagger.params, res, next);
};

module.exports.addressBookRemovePOST = function addressBookRemovePOST (req, res, next) {
  Default.addressBookRemovePOST(req.swagger.params, res, next);
};

module.exports.apiShippingAddressItemPOST = function apiShippingAddressItemPOST (req, res, next) {
  Default.apiShippingAddressItemPOST(req.swagger.params, res, next);
};

module.exports.apiShippingMethodPOST = function apiShippingMethodPOST (req, res, next) {
  Default.apiShippingMethodPOST(req.swagger.params, res, next);
};

module.exports.applyPromoCodePOST = function applyPromoCodePOST (req, res, next) {
  Default.applyPromoCodePOST(req.swagger.params, res, next);
};

module.exports.changeQuantityPOST = function changeQuantityPOST (req, res, next) {
  Default.changeQuantityPOST(req.swagger.params, res, next);
};

module.exports.createPOST = function createPOST (req, res, next) {
  Default.createPOST(req.swagger.params, res, next);
};

module.exports.getCartRecommendedProductsGET = function getCartRecommendedProductsGET (req, res, next) {
  Default.getCartRecommendedProductsGET(req.swagger.params, res, next);
};

module.exports.getHeaderInfoGET = function getHeaderInfoGET (req, res, next) {
  Default.getHeaderInfoGET(req.swagger.params, res, next);
};

module.exports.getShoppingCartGET = function getShoppingCartGET (req, res, next) {
  Default.getShoppingCartGET(req.swagger.params, res, next);
};

module.exports.guestPOST = function guestPOST (req, res, next) {
  Default.guestPOST(req.swagger.params, res, next);
};

module.exports.removeOrderItemPOST = function removeOrderItemPOST (req, res, next) {
  Default.removeOrderItemPOST(req.swagger.params, res, next);
};

module.exports.removePromoCodePOST = function removePromoCodePOST (req, res, next) {
  Default.removePromoCodePOST(req.swagger.params, res, next);
};

module.exports.savedDesignsGET = function savedDesignsGET (req, res, next) {
  Default.savedDesignsGET(req.swagger.params, res, next);
};

module.exports.services_below_are_undefinedDELETE = function services_below_are_undefinedDELETE (req, res, next) {
  Default.services_below_are_undefinedDELETE(req.swagger.params, res, next);
};

module.exports.setBillingAddressPOST = function setBillingAddressPOST (req, res, next) {
  Default.setBillingAddressPOST(req.swagger.params, res, next);
};

module.exports.setShippingAddressPOST = function setShippingAddressPOST (req, res, next) {
  Default.setShippingAddressPOST(req.swagger.params, res, next);
};

module.exports.signinPOST = function signinPOST (req, res, next) {
  Default.signinPOST(req.swagger.params, res, next);
};

module.exports.validateShippingAddressPOST = function validateShippingAddressPOST (req, res, next) {
  Default.validateShippingAddressPOST(req.swagger.params, res, next);
};
