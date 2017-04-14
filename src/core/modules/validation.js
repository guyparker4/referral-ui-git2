var validationModule = {};
var app = window.app;

validationModule.regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  routing: /^[0-9]{9,9}$/,
  account: /^[0-9]{4,20}$/,
  zip: /^\d{5}(?:[-\s]\d{4})?$/,
  views:{
      home:'11',
      checkout:'11'
  }
};

validationModule.lang = function( data ) {
}

module.exports = validationModule;