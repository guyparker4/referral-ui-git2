mul.set( "iprint.a.col" , [] , {
    template: embed( './templates/iprint.a.col.html' ),
    props:{
        "style":String,
        "s":{
             type:String,
             default:''
        },
        "m":{
             type:String,
             default:''
        },
        "l":{
             type:String,
             default:''
        },
        "so":{
             type:String,
             default:''
        },
        "mo":{
             type:String,
             default:''
        },
        "lo":{
             type:String,
             default:''
        }
    },
    computed: {
        classObject: function () {
            var d = {};
            if( this.s ){
                d[ 'small-' + this.s ] = true;
            }
            if( this.m ){
                d[ 'medium-' + this.m ] = true;
            }
            if( this.l ){
                d[ 'large-' + this.l ] = true;
            }
            if( this.so ){
                d[ 'small-offset' + this.so ] = true;
            }
            if( this.mo ){
                d[ 'medium-offset' + this.mo ] = true;
            }
            if( this.lo ){
                d[ 'large-offset' + this.lo ] = true;
            }
            return d;
        }
    }
});