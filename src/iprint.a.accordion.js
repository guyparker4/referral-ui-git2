mul.set( "iprint.a.accordion" , [] , {
    template: embed( './templates/iprint.a.accordion.html' ),
    props:["mode"],
    methods:{
        childActivate( ref ){
            if( this.mode == "1" ){
                var len = this.$children.length;
                var item;
                var i;
                for(i = 0; i < len; i++) {
                    item = this.$children[ i ];
                    if( ref == item ){
                        continue;
                    }
                    item.active = false;
                }
            }
        }
    }
});