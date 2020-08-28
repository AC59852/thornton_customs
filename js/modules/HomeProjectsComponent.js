import HomeProjectSlick from "./homeComponents/SingleHomeProjectsComponent.js"

export default {
    props: ['homeProjects'],

    template: `
    <section class="container" id="homeProjects">
        <projectSlick v-for="homeProject in homeProject" :key="homeProject.id" :homeProject="homeProject"></projectSlick>
    </section>
    `,

    data: function() {
        return {
            homeProject: [
                {id: "1", title: "test title 1", img1: "slick1", img2: "slick2", img3: "slick3"},
                {id: "2", title: "test title 2", img1: "slick1", img2: "slick2", img3: "slick3"}
            ]
        }
    },

    mounted: function() {
    },

    methods: {
        
    },

    components: {
        projectSlick: HomeProjectSlick
    }
}