mul.set( "brp.a.drillsubmenu" , [] , {
    template: embed( './templates/brp.a.drillsubmenu.html' ),
    props:["title","href","active"],
    data(){
        return { 
            visible:false,
            closing:false,
            isactive:false
        };
    },
    methods:{
        close(){
            this.isactive = false;
            this.closing = true;
            var that = this;
            setTimeout(function(){
                that.closing = false;
                that.visible = false;
            }, 1000);

        },
        show(){
            this.isactive = true;
            this.visible = true;
        }
    }
});