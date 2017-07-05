var configurationModule = {};
configurationModule.token = 'TestAuthToken123';
configurationModule.servicesBasePath = '/services';
configurationModule.domain = '';
configurationModule.session = '';

var brp = window.brp;
var configuration = {};
// var configurationFile = 'channelConfig-uat.json';
var configurationFile = 'channelConfig-direct.json';
var token = 'TestAuthToken123';
var servicesBasePath = '/services';
var configId = 'app_configuration-direct';
var isLocal = (window.location.port === '8080');
var services = brp.services;
// var configId = 'app_configuration';

function init () {

  // Set the domain if local to iprint, else leave it empty
  if (isLocal) {
    setDomain();
  }

  // Check for DOM element and load
  var el = window.document.getElementById(configId);
  if (el) {
    try {
      configuration = JSON.parse(el.text);
    } catch (ex) {
      getConfiguration();
    }
  } else {
    getConfiguration();
  }

  // Get a session
  if (isLocal) {
    setSession();
  }
}

function setDomain() {
  configurationModule.domain = 'https://uat.iprint.com';
}

function setSession() {
  let endpoint = configurationModule.domain + '/rest/model/com/hcrc/rest/service/UserProfileActor/jsession';
  brp.libs.agent.get( endpoint )
    .send()
    .end( function( err , res ){
      if( err || !res.ok ){
        //error handling
        brp.model.errors.push( {'code':'SESSION', 'message':'Unable to get SessionID.'} );
        brp.model.modalError = true;
      } else {
        console.log(JSON.parse(res.text));
        console.log('DONE session:');
      }
    });
}

var getConfiguration = function () {
  var config = configuration;
  brp.libs.agent.get( configurationModule.domain + '/resources/rc/mbundle/' + configurationFile )
    .send()
    .end( function( err , res ){
      if( err || !res.ok ){
        //error handling
        brp.model.errors.push( {'code':'CONFIG', 'message':'Unable to get Channel Configuration file.'} );
        brp.model.modalError = true;
      } else {
        config = JSON.parse(res.text);
        console.log('DONE config: ', config);
      }
    });
}

init();

configurationModule.getEndpoint = function (endpoint) {
  return configuration[endpoint] || null
}

module.exports = configurationModule;