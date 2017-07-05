rm *.txt
rm *.json
#rm cookie.txt

#UAT.signin.url = /rest/model/com/hcrc/rest/service/UserProfileActor/userLogin

#WORKING
echo "DIRECT signin"
curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d  '{ "login" : "ted@light.ly" , "password" :
"Powersdk00" }' -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/UserProfileActor/userLogin" &> UAT_IPRINT_REST_signin.txt

#WORKING
#echo "signin"
#curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d  '{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }' -X POST "https://uat.iprint.com/services/signin?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_signin.txt



#UAT.CREATE.url = /rest/model/com/hcrc/rest/service/UserProfileActor/userLogin

#UNTESTED
#echo "DIRECT create"
#curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d  '{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }' -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/UserProfileActor/userRegistartion" &> UAT_IPRINT_REST_create.txt

#UNTESTED
#echo "create"
#curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d  '{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }' -X POST "https://uat.iprint.com/services/create?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_create.txt



#UAT.GUEST.url = /rest/model/com/hcrc/rest/service/UserProfileActor/userLogin

#UNTESTED
#echo "DIRECT guest"
#curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d  '{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }' -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/UserProfileActor/guestRegistartion" &> UAT_IPRINT_REST_guest.txt

#UNTESTED
#echo "guest"
#curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d  '{ "login" : "ted@light.ly" , "password" :
#"Powersdk00" }' -X POST "https://uat.iprint.com/services/guest?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_guest.txt



#UAT.changeQuantity.url = /rest/model/com/hcrc/rest/service/CartModifierActor/changeQuantity

#WORKING
#echo "DIRECT changeQuantity"
#curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d  '{ "quantity": 50, "relationshipId": "r86800005"}' -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/CartModifierActor/changeQuantity" &> UAT_IPRINT_REST_changeQuantity.txt

#WORKING
#echo "changeQuantity"
#curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d  '{ "quantity": 60, "relationshipId": "r86800005"}' -X POST "https://uat.iprint.com/services/changeQuantity?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_changeQuantity.txt



#UAT.applyPromoCode.url = /rest/model/com/hcrc/rest/service/PromotionalActor/applyPromoCode

#WORKING
#echo "DIRECT applyPromoCode"
#curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d '{ "promotionCode" : "BIZ30" }' -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/PromotionalActor/applyPromoCode" &> UAT_IPRINT_REST_applyPromoCode.txt

#WORKING
#echo "applyPromoCode"
#curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d '{ "promotionCode" : "BIZ30" }' -X POST "https://uat.iprint.com/services/applyPromoCode?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_applyPromoCode.txt



#UAT.removePromoCode.url = /rest/model/com/hcrc/rest/service/PromotionalActor/removePromoCode

#WORKING
#echo "DIRECT removePromoCode"
#curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d '{ "promotionCode" : "BIZ30" }' -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/PromotionalActor/removePromoCode" &> UAT_IPRINT_REST_removePromoCode.txt

#WORKING
#echo "removePromoCode"
#curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d '{ "promotionCode" : "BIZ30" }' -X POST "https://uat.iprint.com/services/removePromoCode?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_removePromoCode.txt



#UAT.removeOrderItem.url = /rest/model/com/hcrc/rest/service/CartModifierActor/removeOrderItem

#ERROR
#echo "DIRECT removeOrderItem"
#curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d  '{ "relationshipId" : "r86800005" }' -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/CartModifierActor/removeOrderItem" &> UAT_IPRINT_REST_removeOrderItem.txt

#ERROR
#echo "removeOrderItem"
#curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d  '{ "relationshipId" : "r86800005"}' -X POST "https://uat.iprint.com/services/removeOrderItem?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_removeOrderItem.txt



#UAT.setShippingAddress.url = /rest/model/com/hcrc/rest/service/ShippingGroupActor/setShippingAddress

#WORKING
echo "DIRECT setShippingAddress"
curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d  '{"firstName":"Ted","lastName":"Patrick","companyName":"Lightly LLC","street1":"11712 Palisades Parkway","street2":"Suite 1","city":"Austin","state":"TX","zipcode":"78732","phoneNumber":"4156453448","country":"US","sameForBilling":true,"domestic":true}' -X POST "https://uat.iprint.com/rest/model/com/hcrc/rest/service/ShippingGroupActor/setShippingAddress" &> UAT_IPRINT_REST_setShippingAddress.txt

#UNTESTED
#echo "setShippingAddress"
#curl -c cookie.txt -b cookie.txt -k -L -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -d  '{"firstName":"Ted","lastName":"Patrick","companyName":"Lightly LLC","street1":"11712 Palisades Parkway","street2":"Suite 1","city":"Austin","state":"TX","zipcode":"78732","phoneNumber":"4156453448","country":"US","sameForBilling":true,"domestic":true}' -X POST "https://uat.iprint.com/services/setShippingAddress?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_setShippingAddress.txt



#UAT.getShoppingCart.url= /rest/model/com/hcrc/rest/service/OrderActor/cartSummary

#WORKING
#echo "DIRECT getShoppingCart"
#curl -c cookie.txt -b cookie.txt -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/rest/model/com/hcrc/rest/service/OrderActor/cartSummary" &> UAT_IPRINT_REST_getShoppingCart.txt

#WORKING
#echo "getShoppingCart"
#curl -c cookie.txt -b cookie.txt -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/services/getShoppingCart?HCAuthToken=TestAuthToken123" > UAT_IPRINT_SERVICES_getShoppingCart.txt



#UAT.getHeaderInfo.url= /rest/model/com/hcrc/rest/service/ProductCatalogActor/catalogSummary

#WORKING
#echo "DIRECT getHeaderInfo"
#curl -c cookie.txt -b cookie.txt -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/rest/model/com/hcrc/rest/service/ProductCatalogActor/catalogSummary" &> UAT_IPRINT_REST_getHeaderInfo.txt

#WORKING
#echo "getHeaderInfo"
#curl -c cookie.txt -b cookie.txt -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/services/getHeaderInfo?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_getHeaderInfo.txt



#UAT.getCartRecommendedProducts.url = /rest/model/com/hcrc/rest/service/OrderActor/recommendedProducts

#WORKING
#echo "DIRECT getCartRecommendedProducts"
#curl -c cookie.txt -b cookie.txt -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/rest/model/com/hcrc/rest/service/OrderActor/recommendedProducts" &> UAT_IPRINT_REST_getCartRecommendedProducts.txt

#WORKING
#echo "getCartRecommendedProducts"
#curl -c cookie.txt -b cookie.txt -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/services/getCartRecommendedProducts?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_getCartRecommendedProducts.txt



#UAT.savedDesigns.url = /rest/model/com/hcrc/rest/service/savedDesignActor/savedDesign

#FAILURE
#echo "DIRECT savedDesigns"
#curl -c cookie.txt -b cookie.txt -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/rest/model/com/hcrc/rest/service/savedDesignActor/savedDesign" &> UAT_IPRINT_REST_savedDesigns.txt

#FAILURE
#echo "savedDesigns"
#curl -c cookie.txt -b cookie.txt -v -H "Content-Type: application/json" -H "Accept-Encoding: application/json" -X GET "https://uat.iprint.com/services/savedDesigns?HCAuthToken=TestAuthToken123" &> UAT_IPRINT_SERVICES_savedDesigns.txt
