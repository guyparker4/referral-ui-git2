rm *.out

echo "getShoppingCart"
curl -v -H  "accept: application/json" -X GET "https://uat.iprint.com/services/getShoppingCart" &> services_getShoppingCart.out

echo "UserProfileActor_userLogin"
curl -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
"Powersdk00" }" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/UserProfileActor/userLogin" &> rest_model_com_hcrc_rest_service_UserProfileActor_userLogin.out

echo "services_signin"
curl -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
"Powersdk00" }" -X POST "https://uat.iprint.com/services/signin?HCAuthToken=TestAuthToken123"  &> services_signin.out
