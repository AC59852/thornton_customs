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