import HomeComponent from './HomeComponent.js';
import ProjectComponent from './ProjectComponent.js';
import AboutComponent from './AboutComponent.js';
import ServicesComponent from './ServicesComponent.js';
import ContactComponent from './ContactComponent.js';
import EmailSentComponent from './modules/contactComponents/EmailSentComponent.js'

(() => {
    let router = new VueRouter({
        routes: [
            { path: '/', name: "home", component: HomeComponent },
            { path: '/projects', name: "work", component: ProjectComponent},
            { path: '/about', name: "about", component: AboutComponent},
            { path: '/services', name: "services", component: ServicesComponent},
            { path: '/contact', name: "contact", component: ContactComponent},
            { path: '/sent', name: "sent", component: EmailSentComponent}
        ]
    });

    const vm = new Vue({
        created: function() {
            console.log("application created");
        },

        mounted: function() {
        

            let topNav = document.querySelector("header"),
                navTitle = document.querySelector(".navTitle");

            document.addEventListener('touchstart', touchDown, false);
            document.addEventListener('touchmove', touchMove, false);

            window.addEventListener('wheel', function(event) {
                if (event.deltaY < 0) {
                    topNav.classList.remove("raise");
                    navTitle.classList.remove("raise");
                } else if (event.deltaY > 0) {
                    topNav.classList.add("raise");
                    navTitle.classList.add("raise");
                }
            });

            var xtouch = null;
            var ytouch = null;

            function getTouches(e) {
                return e.touches || e.originalEvent.touches;
            }

            function touchDown(e) {
                const firstTouch = getTouches(e)[0];                                      
                xtouch = firstTouch.clientX;
                ytouch = firstTouch.clientY;
            };

            function touchMove(e) {
                if ( ! xtouch || ! ytouch ) {
                    return;
                }

                var xUp = e.touches[0].clientX;
                var yUp = e.touches[0].clientY;

                var xDiff = xtouch - xUp;
                var yDiff = ytouch - yUp;

                if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
                    if ( xDiff > 0 ) {
                        return;
                    } else {
                        return;
                    } } else {
                    if ( yDiff > 0 ) {
                        topNav.classList.add("raise");
                        navTitle.classList.add("raise");
                    } else {
                        topNav.classList.remove("raise");
                        navTitle.classList.remove("raise");
                    }         
        }

            xtouch = null;
            ytouch = null;
        }
    },

        methods: {
            showNav() {
                $(".header nav").show();
            },

            hideNav() {
                $(".header nav").hide();
            }
        },

        router: router

    }).$mount("#app");
})();