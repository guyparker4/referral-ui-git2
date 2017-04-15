mul.set( "iprint.a.submenu" , [] , {
    template: embed( './templates/iprint.a.submenu.html' ),
    props:["title","href"],
    data(){
        return { visible:false };
    }
});