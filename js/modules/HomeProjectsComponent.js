import HomeProjectMason from "./homeComponents/SingleHomeProjectsComponent.js"

export default {
    props: ['homeProjects'],

    template: `
    <section class="container" id="homeProjects">
        <h2>Example Work Title</h2>
        <div id="macy">
        <projectMason v-for="homeProject in homeProject" :key="homeProject.id" :homeProject="homeProject"></projectMason>
        </div>
        <router-link to="/projects" class="homeProjBtn">View All Work</router-link>
    </section>
    `,

    data: function() {
        return {
            homeProject: [
                {id: "1", img: "mason1", name: "project1"},
                {id: "2", img: "mason2", name: "project2"},
                {id: "3", img: "mason3", name: "project3"},
                {id: "4", img: "mason4", name: "project4"},
                {id: "5", img: "mason5", name: "project5"},
                {id: "6", img: "mason3", name: "project6"},
            ]
        }
    },

    mounted: function() {
        var macy = Macy({
            container: '#macy',
            trueOrder: true,
            waitForImages: false,
            margin: 10,
            columns: 3,
            breakAt: {
                1112: 3,
                1000: 2,
                768: 2,
                767: 1
            }
        });

    },

    methods: {
        
    },

    components: {
        projectMason: HomeProjectMason
    }
}