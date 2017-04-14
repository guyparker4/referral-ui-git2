
var mul = {};

//default path to load modules
mul.root = "/";
mul.folder = "__";
mul.modules = {};
mul.callbacks = {};


mul.get = function( name , callback ){
    console.log( " > mul.get" );
    console.log( name );
    //console.log( callback );
    //console.log( context );
    //modules exists & loaded
    if( mul.modules[name] && mul.modules[name].loaded == true ){
        callback( mul.modules[name].module );
        return;
    }
    //setup loading
    if( callback ){
        if( mul.callbacks[name] == undefined ){
            mul.callbacks[name] = [];
        }
        mul.callbacks[name].push( callback );
    }

    var tag = document.createElement( "script" );
    tag.setAttribute( "type" , "text/javascript" );
    tag.setAttribute( "data-mul" , name );
    tag.onload = tag.onreadystatechange = function() {
        if( !this.readyState || this.readyState == "loaded" || this.readyState == "complete" ) {
            console.log( " SCRIPT LOADED >>> " + name );
        }
    }
    tag.setAttribute( "src" , mul.root + name.split( mul.folder ).join( "/" ) + '.js?version=' + app.version );
    document.getElementsByTagName( "head" )[0].appendChild( tag );
    //console.log( " < mul.get" );
};

mul.set = function( name , deps ,  mod ){
    console.log( " > mul.set" );
    console.log( name );
    //console.log( deps );
    //console.log( mod );

    mul.modules[name] = { 
        module:mod,
        dependencies:deps,
        loaded:true
    };
    if( deps ){
        mul.processDependencies( deps );
    }
    if( mul.callbacks[name] ){
        mul.processCallbacks( mod , mul.callbacks[name] );
    }
    //console.log( " < mul.set" );
};

mul.processDependencies = function( deps ){
    //console.log( " > mul.processDependencies" );
    //console.log( deps );
    //load dependencies that are not started
    var len = deps.length;
    var i;
    for( i = 0; i < len; i++ ){
        if( mul.modules[ dependecies[i] ] == undefined ){
            mul.get( dependecies[i] );
        }
    }
    //console.log( "Check Dependencies for all modules");

    //console.log( " < mul.processDependencies" );
}

mul.processCallbacks = function( mod , callbacks ){
    //console.log( " > mul.processCallbacks" );
    //console.log( mod );
    //console.log( callbacks );
    var len = callbacks.length;
    var i;
    for( i = 0; i < len; i++ ){
        callbacks[i]( mod );
    }
    //console.log( " > mul.processCallbacks" );
}

module.exports = mul;
window.mul = mul;