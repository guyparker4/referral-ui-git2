"use strict";mul.set("brp.o.toolbar",[],{template:'<section class="header header_show">\n    <div class="row columns">\n        <div class="large-12 columns"></div>\n    </div>\n    <div v-if="toolbarState==0" class="row columns nav-medium valign-middle show-for-medium site-nav">\n        <div class="nav_logo columns valign-middle">\n            <span class="site_logo"><a href="http://www.iprint.com/estore" alt="to home page">to home page</a></span>\n        </div>\n        <div class="nav_search columns valign-middle">\n\n            <div class="atg_store_search_underlay"></div>\n            <div id="atg_store_search" class="site-search">\n\n                <form action="/estore/en/search/searchResultsLanding.jsp" id="searchForm" requiressessionconfirmation="false">\n                    <input type="hidden" name="Dy" value="1">\n                    <input type="hidden" name="Nty" value="1">\n                    <input type="hidden" value="ok" name="siteScope">\n\n                    <input class="text atg_store_searchInput site-search-field" value="" type="text" id="searchText" autocomplete="off" placeholder="Search">\n                    <input type="hidden" name="Ntt" id="Ntt">\n\n                    <div id="searchBar"></div>\n                    <div class="dimSearchSuggContainer"></div>\n                    <div id="atg_store_searchStoreSelect"></div>\n                    <input class="site-search-submit" type="submit" name="search" id="atg_store_searchSubmit" value="">\n                </form>\n            </div>\n        </div>\n        <div class="nav_account columns valign-middle">\n            <ul class="nav-cart">\n                <li>\n                    <a class="cart cart-items" href="/estore/en/checkout/shoppingCart.jsp">\n                        <span class="cart-count-container">0</span>\n                        <span class="cart-text hidden-sm hidden-xs">Products cart</span>\n                    </a>\n                </li>\n            </ul>\n            <a.menu>\n                <a.submenu href="" title="Account">\n                    <a.menuitem href="" title="Order Status"></a.menuitem>\n                    <a.menuitem href="" title="My Account"></a.menuitem>\n                    <a.menuitem href="" title="View Favorites"></a.menuitem>\n                </a.submenu>\n                <a.submenu href="" title="Help">\n                    <a.menuitem href="" title="Customer Service"></a.menuitem>\n                    <a.menuitem href="" title="Order Status"></a.menuitem>\n                </a.submenu>\n                <a.menuitem href="" title="Login / Register"></a.menuitem>\n            </a.menu>\n        </div>\n    </div>\n    <div v-if="toolbarState==1" class="row columns nav-medium valign-middle show-for-medium site-nav">\n        <div class="nav_logo columns valign-middle">\n            <span class="site_logo"><a href="http://www.iprint.com/estore" alt="to home page">to home page</a></span>\n        </div>\n        <div class="nav_search columns valign-middle">\n\n            <div class="atg_store_search_underlay"></div>\n            <div id="atg_store_search" class="site-search">\n\n                <form action="/estore/en/search/searchResultsLanding.jsp" id="searchForm" requiressessionconfirmation="false">\n                    <input type="hidden" name="Dy" value="1">\n                    <input type="hidden" name="Nty" value="1">\n                    <input type="hidden" value="ok" name="siteScope">\n\n                    <input class="text atg_store_searchInput site-search-field" value="" type="text" id="searchText" autocomplete="off" placeholder="Search">\n                    <input type="hidden" name="Ntt" id="Ntt">\n\n                    <div id="searchBar"></div>\n                    <div class="dimSearchSuggContainer"></div>\n                    <div id="atg_store_searchStoreSelect"></div>\n                    <input class="site-search-submit" type="submit" name="search" id="atg_store_searchSubmit" value="">\n                </form>\n            </div>\n        </div>\n        <div class="nav_account columns valign-middle">\n            <ul class="nav-cart">\n                <li>\n                    <a class="cart cart-items" href="/estore/en/checkout/shoppingCart.jsp">\n                        <span class="cart-count-container">0</span>\n                        <span class="cart-text hidden-sm hidden-xs">Products cart</span>\n                    </a>\n                </li>\n            </ul>\n            <a.menu>\n                <a.submenu href="" title="Account">\n                    <a.menuitem href="" title="Order Status"></a.menuitem>\n                    <a.menuitem href="" title="My Account"></a.menuitem>\n                    <a.menuitem href="" title="View Favorites"></a.menuitem>\n                </a.submenu>\n                <a.submenu href="" title="Help">\n                    <a.menuitem href="" title="Customer Service"></a.menuitem>\n                    <a.menuitem href="" title="Order Status"></a.menuitem>\n                </a.submenu>\n                <a.menuitem href="" title="Login / Register"></a.menuitem>\n            </a.menu>\n        </div>\n    </div>\n    <div v-if="toolbarState==2" class="row columns nav-medium valign-middle show-for-medium site-nav">\n        <div class="nav_logo columns valign-middle">\n            <span class="site_logo"><a href="http://www.iprint.com/estore" alt="to home page">to home page</a></span>\n            <a.breadcrumbs style="width:500px">\n                <a.breadcrumb :active="$route.path==\'/cart/login\'" href="#/cart/login" title="SIGN IN"></a.breadcrumb>\n                <a.breadcrumb :active="$route.path==\'/cart/shipping\'" href="#/cart/shipping" title="SHIPPING"></a.breadcrumb>\n                <a.breadcrumb :active="$route.path==\'/cart/billing\'" href="#/cart/billing" title="BILLING"></a.breadcrumb>\n                <a.breadcrumb :active="$route.path==\'/cart/payment\'" href="#/cart/payment" title="PAYMENT &amp; PLACE ORDER"></a.breadcrumb>\n            </a.breadcrumbs>\n        </div>\n        <div class="nav_account columns valign-middle">\n        </div>\n    </div>\n</section>',props:[],computed:{toolbarState:function(){return"/cart/login"==this.$route.path?2:"/cart/shipping"==this.$route.path?2:"/cart/billing"==this.$route.path?2:"/cart/payment"==this.$route.path?2:1}}});