"use strict";mul.set("iprint.a.accordionitem",[],{template:'<li class="accordion-item" :class="{ \'is-active\':active }">\n    <a @click="activate()" class="accordion-title">{{title}}</a>\n    <div v-if="active" class="accordion-content animated300 fadeIn" style="display:block">\n        <slot></slot>\n    </div>\n</li>',props:["active","title"],methods:{activate:function(){this.active?this.active=!1:(this.active=!0,console.log(this.$parent),this.$parent.childActivate&&this.$parent.childActivate(this))}}});