import HeroComponent from "./modules/HeroComponent.js";
import HomeServicesComponent from "./modules/HomeServicesComponent.js";
import HomeProjectsComponent from "./modules/HomeProjectsComponent.js";
import HomeTestimonialsComponent from "./modules/HomeTestimonialsComponent.js";

export default {
    template: `
    <div>
        <hero></hero>
        <homeServices></homeServices>
        <homeTestimonials></homeTestimonials>
        <homeProjects></homeProjects>
        <aside id="homeCTA">
            <div>
                <h4>Test CTA Title</h4>
                <router-link to="/contact" class="homeCTABtn">Contact Btn</router-link>
            </div>
        </aside>
        <div id="adsgoeshere" v-html="adsenseContent"></div>
    </div>
    `,

    data: function() {
        return {
            adsenseContent: ''
        }
    },

    mounted: function() {
        this.adsenseContent = document.getElementById('divadsensedisplaynone').innerHTML
    },

    components: {
        hero: HeroComponent,
        homeServices: HomeServicesComponent,
        homeProjects: HomeProjectsComponent,
        homeTestimonials: HomeTestimonialsComponent
    }
}