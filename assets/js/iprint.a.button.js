"use strict";mul.set("iprint.a.button",[],{template:'<a\n    :href="href" \n    class="button"\n    @mouseover="dropdownhover_handler()"\n    @mouseout="dropdownhover_handler()"\n    @click.native="dropdownclick_handler()"\n    @click="dropdownclick_handler()"\n    :class="{ hollow:hollow, tiny:tiny , small:small , large:large , expanded:expanded , primary:primary , secondary:secondary , success:success , warning:warning, alert:alert}"\n    :style="style"\n>{{ title }}</a>',props:["dropdownclick","dropdownhover","title","href","style","hollow","tiny","small","large","expanded","primary","secondary","success","warning","alert"],created:function(){console.log(this),console.log(this.$parent)},methods:{dropdownclick_handler:function(){console.log("dropdownclick"),this.dropdownclick&&this.$parent.$refs[this.dropdownclick]&&(this.$parent.$refs[this.dropdownclick].active=!this.$parent.$refs[this.dropdownclick].active)},dropdownhover_handler:function(){console.log("dropdownhover"),this.dropdownhover&&this.$parent.$refs[this.dropdownhover]&&(this.$parent.$refs[this.dropdownhover].active=!this.$parent.$refs[this.dropdownhover].active)}}});