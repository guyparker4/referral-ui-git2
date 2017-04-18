mul.set( "iprint.a.col" , [] , {
    template: embed( './templates/iprint.a.col.html' ),
    props:{
        "style":String,
        "small":{
             type:String,
             default:''
        },
        "medium":{
             type:String,
             default:''
        },
        "large":{
             type:String,
             default:''
        }
    },
    computed: {
        classObject: function () {
            var d = {};
            if( this.small ){
                d[ 'small-' + this.small ] = true;
            }
            if( this.medium ){
                d[ 'medium-' + this.medium ] = true;
            }
            if( this.large ){
                d[ 'large-' + this.large ] = true;
            }
            return d;
        }
    }
});