mul.set( "iprint.a.col" , [] , {
    template: embed( './templates/iprint.a.col.html' ),
    props:{
        "style":String,
        "e":{
             type:String,
             default:''
        },
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
        },
        "sc":{
             type:String,
             default:''
        },
        "mc":{
             type:String,
             default:''
        },
        "lc":{
             type:String,
             default:''
        },
        "su":{
             type:String,
             default:''
        },
        "mu":{
             type:String,
             default:''
        },
        "lu":{
             type:String,
             default:''
        },
        "sp":{
             type:String,
             default:''
        },
        "mp":{
             type:String,
             default:''
        },
        "lp":{
             type:String,
             default:''
        },
        "sl":{
             type:String,
             default:''
        },
        "ml":{
             type:String,
             default:''
        },
        "ll":{
             type:String,
             default:''
        },
        "b":{
             type:String,
             default:''
        }
    },
    computed: {
        classObject: function () {
            var d = {};
            if( this.e ){
                d[ 'end' ] = true;
            }
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
                d[ 'small-offset-' + this.so ] = true;
            }
            if( this.mo ){
                d[ 'medium-offset-' + this.mo ] = true;
            }
            if( this.lo ){
                d[ 'large-offset-' + this.lo ] = true;
            }
            if( this.sp ){
                d[ 'small-push-' + this.sp ] = true;
            }
            if( this.mp ){
                d[ 'medium-push-' + this.mp ] = true;
            }
            if( this.lp ){
                d[ 'large-push-' + this.lp ] = true;
            }
            if( this.sl ){
                d[ 'small-pull-' + this.sl ] = true;
            }
            if( this.ml ){
                d[ 'medium-pull-' + this.ml ] = true;
            }
            if( this.ll ){
                d[ 'large-pull-' + this.ll ] = true;
            }
            if( this.sc ){
                d[ 'small-centered' ] = true;
            }
            if( this.mc ){
                d[ 'medium-centered' ] = true;
            }
            if( this.lc ){
                d[ 'large-centered' ] = true;
            }
            if( this.su ){
                d[ 'small-uncentered' ] = true;
            }
            if( this.mu ){
                d[ 'medium-uncentered' ] = true;
            }
            if( this.lu ){
                d[ 'large-uncentered' ] = true;
            }
            if( this.b ){
                d[ 'column-block' ] = true;
            }
            return d;
        }
    }
});