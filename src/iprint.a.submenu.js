mul.set( "iprint.a.submenu" , [] , {
    template: embed( './templates/iprint.a.submenu.html' ),
    props:["title","href","active"],
    data(){
        return { visible:false };
    }
});