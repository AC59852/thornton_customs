import HeroComponent from "./modules/HeroComponent.js";
import HomeServicesComponent from "./modules/HomeServicesComponent.js";
import HomeProjectsComponent from "./modules/HomeProjectsComponent.js";
import HomeTestimonialsComponent from "./modules/HomeTestimonialsComponent.js";

export default {
    template: `
    <div>
        <hero></hero>
        <homeServices class="waypoint"></homeServices>
        <homeTestimonials></homeTestimonials>
        <homeProjects></homeProjects>
        <aside id="homeCTA">
            <div>
                <h4>Test CTA Title</h4>
                <router-link to="/contact" class="homeCTABtn">Contact Btn</router-link>
            </div>
        </aside>
    </div>
    `,

    data: function() {
        return {

        }
    },

    mounted: function() {
        this.waypoints();
    },

    methods: {
        waypoints() {
            var waypoint = new Waypoint({
                element: document.querySelector('.waypoint'),
                handler: function(direction) {
                  console.log('Scrolled to waypoint!')
                  let boxes = document.querySelectorAll('.homeServIcons div'),
                      homeText = document.querySelectorAll('.homeServText p')
                  let i = 0;
                  boxes.forEach(box => {
                      box.classList.add(`popin${i++}`);
                  });
                },
                offset: 650
              })
        }
    },

    components: {
        hero: HeroComponent,
        homeServices: HomeServicesComponent,
        homeProjects: HomeProjectsComponent,
        homeTestimonials: HomeTestimonialsComponent
    }
}