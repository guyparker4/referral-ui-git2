mul.set( "iprint.a.switch" , [] , {
    template: embed( './templates/iprint.a.switch.html' ),
    props:{
        "id":{
            default: function () {
                return app.methods.guid();
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