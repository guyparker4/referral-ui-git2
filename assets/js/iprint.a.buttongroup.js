"use strict";mul.set("iprint.a.buttongroup",[],{template:'<div\n    class="button-group"\n    :class="{ stacked:stacked, \'stacked-for-small\':stackedForSmall , \'stacked-for-medium\':stackedForMedium , tiny:tiny , small:small , large:large , expanded:expanded , primary:primary , secondary:secondary , success:success , warning:warning, alert:alert}"\n    :style="style"\n>\n    <slot></slot>\n</div>',props:["style","stacked","stackedForSmall","stackedForMedium","tiny","small","large","expanded","primary","secondary","success","warning","alert"]});