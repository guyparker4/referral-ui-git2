mul.set( "iprint.a.drillsubmenu" , [] , {
    template: embed( './templates/iprint.a.drillsubmenu.html' ),
    props:["title","href","active"],
    data(){
        return { visible:false };
    }
});