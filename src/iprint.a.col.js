mul.set( "iprint.a.col" , [] , {
    template: embed( './templates/iprint.a.col.html' ),
    props:[ "small" , "medium" , "large" ],
    data(){
        var d = {};
        d.classes = {};
        if( this.small ){
            d.classes[ 'small-' + small ] = true;
        }
        if( this.medium ){
            d.classes[ 'medium-' + medium ] = true;
        }
        if( this.large ){
            d.classes[ 'large-' + large ] = true;
        }
        return d;
    }
});