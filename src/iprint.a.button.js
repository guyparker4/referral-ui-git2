mul.set( "iprint.a.button" , [] , {
    template: embed( './templates/iprint.a.button.html' ),
    props:["dropdownclick","dropdownhover","title","href","style","hollow","tiny","small","large","expanded","primary","secondary","success","warning","alert"],
    created(){
        console.log( this );
        console.log( this.$parent );
    },
    methods:{
        dropdownclick_handler(){
            console.log( 'dropdownclick' );
            if( this.dropdownclick && this.$parent.$refs[ this.dropdownclick ] ){
                this.$parent.$refs[ this.dropdownclick ].active = !this.$parent.$refs[ this.dropdownclick ].active;
            }
        },
        dropdownhover_handler(){
            console.log( 'dropdownhover' )
            if( this.dropdownhover && this.$parent.$refs[ this.dropdownhover ] ){
                this.$parent.$refs[ this.dropdownhover ].active = !this.$parent.$refs[ this.dropdownhover ].active;
            }
        }
    }
});