"use strict";mul.set("brp.o.addressbook",[],{template:'<div class="grid_16 row my-account-panel">\n    <!-- ==== Grid 16 ==== -->\n    <div class="grid_16 row">\n        <h2>Address Book</h2>\n    </div>\n    <!-- ==== End Grid 16 ==== -->\n\n    <!-- ==== Grid 16 ==== -->\n    <div class="grid_16 row">\n        <div class="content-container clearfix">\n            <div class="grid_6 contacts-list-left">\n                <h3>\n                    Contacts (<span class="contact_count">1</span>)\n                </h3>\n                <div class="cl-container">\n                    <div class="buttons">\n                        <a href="#fb-my-account-vendor" class="btn-blue float-right" id="btn-import-contacts">Import\n                            Contacts</a>\n                        <a href="#contact_add" class="btn-blue" id="btn-add-contact" onclick="setAnalytics(\'AddAddress\',\'My Account\')">Add\n                            +</a>\n                    </div>\n                    <div class="search_contacts">\n                        <div id="predictive-search_results" style="position: absolute; top: 43px; left: 5px;">\n                            <ul></ul>\n                        </div>\n                        <form action="#">\n                            <input type="text" name="csearch" id="csearch" size="40" autocomplete="off"> <input type="submit" class="btn-search" id="btn-csearch" disabled="disabled" title="Search Contacts">\n                            <!-- <a href="#searchcontacts" class="btn-search" id="btn-csearch">Search</a> -->\n                        </form>\n                    </div>\n                    <div class="div-cl-ul">\n                        <ul><li class="hdr">C</li><li class="lnks"><a href="javascript:view_contact(0,\'null\');" id="0">Chen, Michael</a></li></ul>\n                    </div>\n                </div>\n            </div>\n            <div class="grid_10 contacts-list-right">\n                <h3>Contact Details</h3>\n                <div class="cl-container">\n                    <div class="buttons">\n                        <div class="btns-edit-delete">\n                            <a href="#" class="button ajaxForm" id="btn-edit-contact" style="display: none;">Edit\n                                Contact</a> &nbsp;&nbsp;\n                            <a href="#delete-sc" class="btn-blue" id="btn-delete-contacts" style="display: none;">Delete Contact</a>\n                        </div>\n                        <div class="btns-cancel-save">\n                            <a href="javascript:$.fancybox.close();" class="btn-secondary" id="btn-cancel-contacts" style="display: none;">Cancel</a> &nbsp;&nbsp; <a href="#" class="button ajaxForm" id="btn-save-contact" style="display: none;">Save</a>\n                        </div>\n                    </div>\n                    <div class="div-cl-content">\n                        <!--<div class="div-cl-content">-->\n                        <p class="none-selected">Select a contact.</p>\n                        <!--</div>-->\n                    </div>\n                </div>\n            </div>\n            <div class="clearfix"></div>\n        </div>\n    </div>\n    <!-- ==== End Grid 16 ==== -->\n    <script type="text/javascript">\n\n\t\tmaster_contact_array[0] = ["","Michael","Chen","","","5207","","San Antonio","TX","78249","(222)222-2222","143510","false","US","null","null"];\n\t\t$(function(){\n\t\t\t$("#btn-delete-contacts").hide();\n\t\t\t$("#btn-delete-contacts-shipping").hide();\n\t\t\t$("#btn-edit-contact").hide();\n\t\t\t$("#btn-cancel-contacts").hide();\n\t\t\t$("#btn-save-contact").hide();\n\t\t\tpopulate_address_book("null");\n\t\t});\n    </script>\n</div>',props:[]});