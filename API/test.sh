rm *.out

#UAT.changeQuantity.url = /rest/model/com/hcrc/rest/service/CartModifierActor/changeQuantity
#echo "DIRECT changeQuantity"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/CartModifierActor/changeQuantity" &> UAT_IPRINT_REST_changeQuantity.out

#echo "changeQuantity"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/services/changeQuantity?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_changeQuantity.out

#UAT.applyPromoCode.url = /rest/model/com/hcrc/rest/service/PromotionalActor/applyPromoCode
#echo "DIRECT applyPromoCode"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/PromotionalActor/applyPromoCode" &> UAT_IPRINT_REST_applyPromoCode.out

#echo "applyPromoCode"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/services/applyPromoCode?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_applyPromoCode.out

#UAT.removePromoCode.url = /rest/model/com/hcrc/rest/service/PromotionalActor/removePromoCode
#echo "DIRECT removePromoCode"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/PromotionalActor/removePromoCode" &> UAT_IPRINT_REST_removePromoCode.out

#echo "removePromoCode"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/services/removePromoCode?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_removePromoCode.out


#UAT.removeOrderItem.url = /rest/model/com/hcrc/rest/service/CartModifierActor/removeOrderItem
#echo "DIRECT removeOrderItem"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/CartModifierActor/removeOrderItem" &> UAT_IPRINT_REST_removeOrderItem.out

#echo "removeOrderItem"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/services/removeOrderItem?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_removeOrderItem.out

#UAT.signin.url = /rest/model/com/hcrc/rest/service/UserProfileActor/userLogin
echo "DIRECT signin"
curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
"Powersdk00" }" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/UserProfileActor/userLogin" &> UAT_IPRINT_REST_signin.out

#echo "signin"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/services/signin?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_signin.out

#UAT.CREATE.url = /rest/model/com/hcrc/rest/service/UserProfileActor/userLogin
#echo "DIRECT create"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/UserProfileActor/userRegistartion" &> UAT_IPRINT_REST_create.out

#echo "create"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/services/create?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_create.out

#UAT.setShippingAddress.url = /rest/model/com/hcrc/rest/service/ShippingGroupActor/setShippingAddress
#echo "DIRECT setShippingAddress"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/ShippingGroupActor/setShippingAddress" &> UAT_IPRINT_REST_setShippingAddress.out

#echo "setShippingAddress"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/services/setShippingAddress?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_setShippingAddress.out



#UAT.getShoppingCart.url= /rest/model/com/hcrc/rest/service/OrderActor/cartSummary
echo "DIRECT getShoppingCart"
curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/rest/model/com/hcrc/rest/service/OrderActor/cartSummary" &> UAT_IPRINT_REST_getShoppingCart.out

echo "getShoppingCart"
curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/services/getShoppingCart?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_getShoppingCart.out

#UAT.getHeaderInfo.url= /rest/model/com/hcrc/rest/service/ProductCatalogActor/catalogSummary
echo "DIRECT getHeaderInfo"
curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/rest/model/com/hcrc/rest/service/ProductCatalogActor/catalogSummary" &> UAT_IPRINT_REST_getHeaderInfo.out

echo "getHeaderInfo"
curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/services/getHeaderInfo?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_getHeaderInfo.out

#UAT.getCartRecommendedProducts.url = /rest/model/com/hcrc/rest/service/OrderActor/recommendedProducts
echo "DIRECT getCartRecommendedProducts"
curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/rest/model/com/hcrc/rest/service/OrderActor/recommendedProducts" &> UAT_IPRINT_REST_getCartRecommendedProducts.out

echo "getCartRecommendedProducts"
curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/services/getCartRecommendedProducts?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_getCartRecommendedProducts.out

#UAT.savedDesigns.url = /rest/model/com/hcrc/rest/service/savedDesignActor/savedDesign
echo "DIRECT savedDesigns"
curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/rest/model/com/hcrc/rest/service/savedDesignActor/savedDesign" &> UAT_IPRINT_REST_savedDesigns.out

echo "savedDesigns"
curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/services/savedDesigns?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_savedDesigns.out
