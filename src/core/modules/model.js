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
        catalog:null
    },
    methods: {},
    storage:{}
};

module.exports = modelModule;
