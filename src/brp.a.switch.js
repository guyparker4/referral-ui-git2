mul.set( "brp.a.switch" , [] , {
    template: embed( './templates/brp.a.switch.html' ),
    props:{
        "id":{
            default: function () {
                return brp.methods.guid();
            }
        },
        "alt":String,
        "name":String,
        "on":String,
        "off":String,
        "style":String,
        "tiny":String,
        "small":String,
        "large":String
    },
    computed:{
        type(){
            if( this.name ){
                return "radio";
            }
            return "checkbox"
        }
    }
});