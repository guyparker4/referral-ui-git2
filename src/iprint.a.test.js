mul.set( "iprint.a.test" , [] , {
    template: embed( './templates/iprint.a.test.html' ),
    data(){
        return {
            classes:{}
        };
    },
    props:{
        "ted-prop":String
    },
    methods:{
        log(){
            console.log( this );
        }
    }

});