"use strict";mul.set("iprint.a.col",[],{template:'<div\n    class="columns"\n    :class="classObject"\n    :style="style"\n><slot></slot></div>',props:{style:String,small:{type:String,default:""},medium:{type:String,default:""},large:{type:String,default:""}},computed:{classObject:function(){var t={};return this.small&&(t["small-"+this.small]=!0),this.medium&&(t["medium-"+this.medium]=!0),this.large&&(t["large-"+this.large]=!0),t}}});