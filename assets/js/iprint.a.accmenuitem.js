"use strict";mul.set("iprint.a.accmenuitem",[],{template:'<li role="menuitem" @activate="activate()" \n    class="is-submenu-item is-accordion-submenu-item"\n    :class="{ active:active }">\n    <a :href="href"><i v-if="icon" :class="icon"></i><span>{{title}}</span></a>\n</li>',props:["title","href","active","icon"]});