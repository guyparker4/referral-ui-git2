mul.set( "brp.a.accordionitem" , [] , {
    template: embed( './templates/brp.a.accordionitem.html' ),
    props:["active","title"],
    methods:{
        activate(){
            if( this.active ){
                this.active=false;
            }else{
                this.active=true;
                console.log( this.$parent );
                if( this.$parent.childActivate ){
                    this.$parent.childActivate( this );
                }
            }
        }
    }
});