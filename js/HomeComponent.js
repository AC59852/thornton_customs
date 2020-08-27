import HeroComponent from "./modules/HeroComponent.js"

export default {
    template: `
    <div>
        <hero></hero>
        <div><h1>Lower Content</h1></div>
    </div>
    `,

    data: function() {
        return {

        }
    },

    components: {
        hero: HeroComponent
    }
}