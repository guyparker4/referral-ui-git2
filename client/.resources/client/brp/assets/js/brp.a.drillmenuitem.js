"use strict";mul.set("brp.a.drillmenuitem",[],{template:'<li role="menuitem"\n    class="is-submenu-item is-drilldown-submenu-item"\n    :class="{ active:active }">\n    <a :href="href"><i v-if="icon" :class="icon"></i><span>{{title}}</span></a>\n</li>',props:["title","href","active","icon"]});