import HeroComponent from "./modules/HeroComponent.js";
import HomeServicesComponent from "./modules/HomeServicesComponent.js";

export default {
    template: `
    <div>
        <hero></hero>
        <homeServices></homeServices>
    </div>
    `,

    data: function() {
        return {

        }
    },

    components: {
        hero: HeroComponent,
        homeServices: HomeServicesComponent
    }
}