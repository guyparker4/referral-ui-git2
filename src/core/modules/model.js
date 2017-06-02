var modelModule = {
    libs: {},
    events: {},
    services: {},
    views: {},
    model: {
        errors:[],
        scroll:{},
        history:[],
        viewport:0,
        height:document.body.clientHeight || window.innerHeight,
        width:document.body.clientWidth || window.innerWidth,
        current:null,
        catalog:null,
        cartPath:"",
        order:null,
        savedDesign:null,
        recommendedProducts:null,
        modalError:false
    },
    methods: {},
    storage:{}
};

module.exports = modelModule;
