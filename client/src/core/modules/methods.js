var methodsModule = {};
var brp = window.brp;

//methodsModule.save = function( name ){
//};

methodsModule.debounce = function( func , wait , immediate ){
    var timeout;
    return function(){
        var context = this, args = arguments;
        var later = function(){
                timeout = null;
                if( !immediate ){
                    func.apply( context , args );
                }
        };
        var callNow = immediate && !timeout;
        clearTimeout( timeout );
        timeout = setTimeout( later , wait );
        if( callNow ){
            func.apply( context , args );
        }
    };
};

methodsModule.guid = function(){
    return 'gxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

methodsModule.resize = function(){
    console.log('> RESIZE cw,iw,ch,ih -------------')
    console.log( document.body.clientWidth );
    console.log( window.innerWidth );
    console.log( document.body.clientHeight );
    console.log( window.innerHeight );
    console.log('< RESIZE cw,iw,ch,ih -------------')
    var w = document.body.clientWidth || window.innerWidth;
    var h = document.body.clientHeight || window.innerHeight;
    var viewport = brp.model.viewport;
    if( w < 640 ){
        if( viewport !== 0 ){
            brp.model.viewport = 0;
        }
    }else if( w < 1024 ){
        if( viewport !== 1 ){
            brp.model.viewport = 1;
        }
    }else{
        if( viewport !== 2 ){
            brp.model.viewport = 2;
        }
    }
    brp.model.width = w;
    brp.model.height = h;
};


module.exports = methodsModule;