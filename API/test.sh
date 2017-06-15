rm *.out


#UAT.signin.url = /rest/model/com/hcrc/rest/service/UserProfileActor/userLogin

#WORKING
#echo "DIRECT signin"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/UserProfileActor/userLogin" &> UAT_IPRINT_REST_signin.out

#FAILURE
#echo "signin"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/services/signin?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_signin.out



#UAT.CREATE.url = /rest/model/com/hcrc/rest/service/UserProfileActor/userLogin

#UNTESTED
#echo "DIRECT create"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/UserProfileActor/userRegistartion" &> UAT_IPRINT_REST_create.out

#UNTESTED
#echo "create"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/services/create?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_create.out



#UAT.GUEST.url = /rest/model/com/hcrc/rest/service/UserProfileActor/userLogin

#UNTESTED
#echo "DIRECT guest"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/UserProfileActor/guestRegistartion" &> UAT_IPRINT_REST_guest.out

#UNTESTED
#echo "guest"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/services/guest?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_guest.out



#UAT.changeQuantity.url = /rest/model/com/hcrc/rest/service/CartModifierActor/changeQuantity

#WORKING
#echo "DIRECT changeQuantity"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "quantity": 32, "relationshipId": "r86800005"}" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/CartModifierActor/changeQuantity" &> UAT_IPRINT_REST_changeQuantity.out

#FAILURE
#echo "changeQuantity"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "quantity": 30, "relationshipId": "r86800005"}" -X POST "https://uat.iprint.com/services/changeQuantity?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_changeQuantity.out



#UAT.applyPromoCode.url = /rest/model/com/hcrc/rest/service/PromotionalActor/applyPromoCode

#WORKING
#echo "DIRECT applyPromoCode"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d "{ "promotionCode" : "BIZ30" }" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/PromotionalActor/applyPromoCode" &> UAT_IPRINT_REST_applyPromoCode.out

#FAILURE
#echo "applyPromoCode"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d "{ "promotionCode" : "BIZ30" }" -X POST "https://uat.iprint.com/services/applyPromoCode?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_applyPromoCode.out



#UAT.removePromoCode.url = /rest/model/com/hcrc/rest/service/PromotionalActor/removePromoCode

#WORKING
#echo "DIRECT removePromoCode"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d "{ "promotionCode" : "BIZ30" }" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/PromotionalActor/removePromoCode" &> UAT_IPRINT_REST_removePromoCode.out

#FAILURE
#echo "removePromoCode"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d "{ "promotionCode" : "BIZ30" }" -X POST "https://uat.iprint.com/services/removePromoCode?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_removePromoCode.out



#UAT.removeOrderItem.url = /rest/model/com/hcrc/rest/service/CartModifierActor/removeOrderItem

#UNTESTED
#echo "DIRECT removeOrderItem"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/CartModifierActor/removeOrderItem" &> UAT_IPRINT_REST_removeOrderItem.out

#UNTESTED
#echo "removeOrderItem"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/services/removeOrderItem?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_removeOrderItem.out



#UAT.setShippingAddress.url = /rest/model/com/hcrc/rest/service/ShippingGroupActor/setShippingAddress

#UNTESTED
#echo "DIRECT setShippingAddress"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/ShippingGroupActor/setShippingAddress" &> UAT_IPRINT_REST_setShippingAddress.out

#UNTESTED
#echo "setShippingAddress"
#curl -b cookie.txt -c cookie.txt -k -L -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -d  "{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }" -X POST "https://uat.iprint.com/services/setShippingAddress?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_setShippingAddress.out



#UAT.getShoppingCart.url= /rest/model/com/hcrc/rest/service/OrderActor/cartSummary

#WORKING
#echo "DIRECT getShoppingCart"
#curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/rest/model/com/hcrc/rest/service/OrderActor/cartSummary" &> UAT_IPRINT_REST_getShoppingCart.out

#WORKING
#echo "getShoppingCart"
#curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/services/getShoppingCart?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_getShoppingCart.out



#UAT.getHeaderInfo.url= /rest/model/com/hcrc/rest/service/ProductCatalogActor/catalogSummary

#WORKING
#echo "DIRECT getHeaderInfo"
#curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/rest/model/com/hcrc/rest/service/ProductCatalogActor/catalogSummary" &> UAT_IPRINT_REST_getHeaderInfo.out

#WORKING
#echo "getHeaderInfo"
#curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/services/getHeaderInfo?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_getHeaderInfo.out



#UAT.getCartRecommendedProducts.url = /rest/model/com/hcrc/rest/service/OrderActor/recommendedProducts

#WORKING
#echo "DIRECT getCartRecommendedProducts"
#curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/rest/model/com/hcrc/rest/service/OrderActor/recommendedProducts" &> UAT_IPRINT_REST_getCartRecommendedProducts.out

#WORKING
#echo "getCartRecommendedProducts"
#curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/services/getCartRecommendedProducts?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_getCartRecommendedProducts.out



#UAT.savedDesigns.url = /rest/model/com/hcrc/rest/service/savedDesignActor/savedDesign

#FAILURE
#echo "DIRECT savedDesigns"
#curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/rest/model/com/hcrc/rest/service/savedDesignActor/savedDesign" &> UAT_IPRINT_REST_savedDesigns.out

#FAILURE
#echo "savedDesigns"
#curl -b cookie.txt -c cookie.txt -v -H "Content-Type: application/json"  "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/services/savedDesigns?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_savedDesigns.out
