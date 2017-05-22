mul.set( "brp.a.row" , [] , {
    template: embed( './templates/brp.a.row.html' ),
    props:{
        "style":String,
        "expanded":String,
        "column":String,
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
        "sb":{
             type:String,
             default:''
        },
        "mb":{
             type:String,
             default:''
        },
        "lb":{
             type:String,
             default:''
        }
    },
    computed: {
        classObject: function () {
            var d = {};
            if( this.sc ){
                d[ 'small-collapse' ] = true;
            }
            if( this.mc ){
                d[ 'medium-collapse' ] = true;
            }
            if( this.lc ){
                d[ 'large-collapse' ] = true;
            }
            if( this.su ){
                d[ 'small-uncollapse' ] = true;
            }
            if( this.mu ){
                d[ 'medium-uncollapse' ] = true;
            }
            if( this.lu ){
                d[ 'large-uncollapse' ] = true;
            }
            if( this.sb ){
                d[ 'small-up-' + this.sb ] = true;
            }
            if( this.mb ){
                d[ 'medium-up-' + this.mb ] = true;
            }
            if( this.lb ){
                d[ 'large-up-' + this.lb ] = true;
            }
            return d;
        }
    }
});