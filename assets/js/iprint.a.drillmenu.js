"use strict";mul.set("iprint.a.drillmenu",[],{template:'<div class="is-drilldown">\n    <ul class="menu" :class="{ \'align-right\':alignRight, \'align-left\':alignLeft, expanded:expanded, \'align-centered\':alignCenter, simple:simple }" role="menubar">\n        <slot></slot>\n    </ul>\n</div>',props:["style","alignRight","alignLeft","alignCenter","expanded","simple"]});