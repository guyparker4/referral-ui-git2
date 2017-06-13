"use strict";mul.set("brp.o.cart.billing",[],{template:'<div class="row columns">\n    <div class="row columns">\n        <h1>Choose a Billing Address</h1>\n        <p>Choose your billing address below or enter a new address.</p>\n    </div>\n    <div class="row">\n        <div class="large-3 columns">\n            <div>\n                <div class="default-address-header"><strong>Your default address</strong></div>\n                <div class="default-address-content">\n                    <div>Grant Pimpler</div>\n                    <div>ABCD Corp,</div>\n                    <div>Suite 2005</div>\n                    <div></div>\n                    <div>San Antonio, TX 78260</div>\n                    <div>United States</div>\n                    <div>(210)324-4808</div>\n                </div>\n                <div class="useThisAddress">\n                    <a.button @click.native="selectShippingAddress(0);" title="Use this Address"></a.button>\n                </div>\n            </div>\n        </div>\n        <div class="large-9 columns">\n            <form>\n                <h2>Or Add a New Billing Address</h2>\n                <div class="row">\n                    <div class="large-2 columns">\n                        First name*\n                    </div>\n                    <div class="large-10 columns">\n                        <input type="text" v-model="billingForm.firstName" placeholder="First Name (required)">\n                    \n                    </div>\n                </div>\n                <div class="row">\n                    <div class="large-2 columns">\n                        Last name*\n                    </div>\n                    <div class="large-10 columns">\n                        <input type="text" v-model="billingForm.lastName" placeholder="Last Name (required)">\n                    </div>\n                \n                </div>\n                <div class="row">\n                    <div class="large-2 columns">\n                        Company\n                    </div>\n                    <div class="large-10 columns">\n                        <input type="text" v-model="billingForm.companyName" placeholder="Company">\n                    </div>\n                </div>\n                \n                <div class="row">\n                    <div class="large-2 columns">\n                        Address*\n                    </div>\n                    <div class="large-10 columns">\n                        <input type="text" v-model="billingForm.street1" placeholder="Address (required)">\n                    </div>\n                </div>\n                \n                <div class="row">\n                    <div class="large-2 columns"> </div>\n                    <div class="large-10 columns">\n                        <input type="text" v-model="billingForm.street2" placeholder="Address">\n                    </div>\n                </div>\n                \n                <div class="row">\n                    <div class="large-2 columns">\n                        City*\n                    </div>\n                    <div class="large-10 columns">\n                        <input type="text" v-model="billingForm.city" placeholder="City">\n                \n                    </div>\n                </div>\n                <div class="row">\n                    <div class="large-2 columns">\n                        State*\n                    </div>\n                    <div class="large-4 columns">\n                        <select class="required-field" v-model="billingForm.state" size="1">\n                            <option value="">Select a State/Territory</option>\n                            <optgroup label="US States">\n                                <option value="AL">AL-Alabama</option>\n                                <option value="AK">AK-Alaska</option>\n                                <option value="AZ">AZ-Arizona</option>\n                                <option value="AR">AR-Arkansas</option>\n                                <option value="CA">CA-California</option>\n                                <option value="CO">CO-Colorado</option>\n                                <option value="CT">CT-Connecticut</option>\n                                <option value="DE">DE-Delaware</option>\n                                <option value="DC">DC-District of Columbia</option>\n                                <option value="FL">FL-Florida</option>\n                                <option value="GA">GA-Georgia</option>\n                                <option value="HI">HI-Hawaii</option>\n                                <option value="ID">ID-Idaho</option>\n                                <option value="IL">IL-Illinois</option>\n                                <option value="IN">IN-Indiana</option>\n                                <option value="IA">IA-Iowa</option>\n                                <option value="KS">KS-Kansas</option>\n                                <option value="KY">KY-Kentucky</option>\n                                <option value="LA">LA-Louisiana</option>\n                                <option value="ME">ME-Maine</option>\n                                <option value="MD">MD-Maryland</option>\n                                <option value="MA">MA-Massachusetts</option>\n                                <option value="MI">MI-Michigan</option>\n                                <option value="MN">MN-Minnesota</option>\n                                <option value="MS">MS-Mississippi</option>\n                                <option value="MO">MO-Missouri</option>\n                                <option value="MT">MT-Montana</option>\n                                <option value="NE">NE-Nebraska</option>\n                                <option value="NV">NV-Nevada</option>\n                                <option value="NH">NH-New Hampshire</option>\n                                <option value="NJ">NJ-New Jersey</option>\n                                <option value="NM">NM-New Mexico</option>\n                                <option value="NY">NY-New York</option>\n                                <option value="NC">NC-North Carolina</option>\n                                <option value="ND">ND-North Dakota</option>\n                                <option value="OH">OH-Ohio</option>\n                                <option value="OK">OK-Oklahoma</option>\n                                <option value="OR">OR-Oregon</option>\n                                <option value="PA">PA-Pennsylvania</option>\n                                <option value="RI">RI-Rhode Island</option>\n                                <option value="SC">SC-South Carolina</option>\n                                <option value="SD">SD-South Dakota</option>\n                                <option value="TN">TN-Tennessee</option>\n                                <option value="TX">TX-Texas</option>\n                                <option value="UT">UT-Utah</option>\n                                <option value="VT">VT-Vermont</option>\n                                <option value="VA">VA-Virginia</option>\n                                <option value="WA">WA-Washington</option>\n                                <option value="WV">WV-West Virginia</option>\n                                <option value="WI">WI-Wisconsin</option>\n                                <option value="WY">WY-Wyoming</option>\n                            </optgroup>\n                            <optgroup label="Armed Forces">\n                                <option value="AE">AE-Armed Forces Africa</option>\n                                <option value="AA">AA-Armed Forces Americas</option>\n                                <option value="AE">AE-Armed Forces Canada</option>\n                                <option value="AE">AE-Armed Forces Europe</option>\n                                <option value="AE">AE-Armed Forces Middle East</option>\n                                <option value="AP">AP-Armed Forces Pacific</option>\n                            </optgroup>\n                            <optgroup label="U. S. Associated Territories">\n                                <option value="AS">AS-American Samoa</option>\n                                <option value="FM">FM-Fed. States of Micronesia</option>\n                                <option value="GU">GU-Guam</option>\n                                <option value="MH">MH-Marshall Islands</option>\n                                <option value="MP">MP-Northern Mariana Islands</option>\n                                <option value="PW">PW-Palau</option>\n                                <option value="PR">PR-Puerto Rico</option>\n                                <option value="VI">VI-Virgin Islands</option>\n                            </optgroup>\n                        </select>\n                    </div>\n                    <div class="large-2 columns">\n                        Zip*\n                    </div>\n                    <div class="large-4 columns">\n                        <input type="text" v-model="billingForm.zipcode" placeholder="Zip">\n                \n                    </div>\n                </div>\n                <div class="row">\n                    <div class="large-2 columns">\n                        Phone Number*\n                    </div>\n                    <div class="large-10 columns">\n                        <input type="text" v-model="billingForm.phoneNumber" placeholder="Phone Number (required)">\n                \n                    </div>\n                </div>\n            </form>\n            <div class="row">\n                <div class="large-2 columns"> </div>\n                <div class="large-10 columns">\n                    <a.button class="button ajaxForm cta" @click.native="onUseAddress()" title="Use this Address"></a.button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n',props:["data"],data:function(){return{billingForm:{firstName:"",lastName:"",companyName:"",street1:"",street2:"",city:"",state:"",zipcode:"",phoneNumber:"",country:"US",isDomestic:!0}}},methods:{onUseAddress:function(){console.log("onUseAddress"),brp.services.setBillingAddress(this.billingForm),this.reset()},reset:function(){this.billingForm.firstName="",this.billingForm.lastName="",this.billingForm.companyName="",this.billingForm.street1="",this.billingForm.street2="",this.billingForm.city="",this.billingForm.state="",this.billingForm.zipcode="",this.billingForm.phoneNumber="",this.billingForm.country="US",this.billingForm.isDomestic=!0}}});