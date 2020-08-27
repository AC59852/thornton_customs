import HomeComponent from './HomeComponent.js'

(() => {
    let router = new VueRouter({
        routes: [
            { path: '/', component: HomeComponent }
        ]
    });

    const vm = new Vue({
        created: function() {
            console.log("application created")
        },

        mounted: function() {

        },

        methods: {

        },

        router: router

    }).$mount("#app");
})();