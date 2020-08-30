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
                <div class="homeCTABtn"><router-link to="/contact">Contact Btn</router-link></div>
            </div>
        </aside>
    </div>
    `,

    data: function() {
        return {

        }
    },

    components: {
        hero: HeroComponent,
        homeServices: HomeServicesComponent,
        homeProjects: HomeProjectsComponent,
        homeTestimonials: HomeTestimonialsComponent
    }
}