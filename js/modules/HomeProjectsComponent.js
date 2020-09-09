import HomeProjectSlick from "./homeComponents/SingleHomeProjectsComponent.js"

export default {
    props: ['homeProjects'],

    template: `
    <section class="container" id="homeProjects">
        <h2>Example Work Title</h2>
        <div class="homeProjCycleCon">
        <projectSlick v-for="homeProject in homeProject" :key="homeProject.id" :homeProject="homeProject"></projectSlick>
        </div>
        <router-link to="/projects" class="homeProjBtn">View All Work</router-link>
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