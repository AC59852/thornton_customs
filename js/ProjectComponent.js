import SingleProjectComponent from './modules/projectComponents/SingleProjectComponent.js';

export default {
    template: `
    <section id="projects">
        <div class="projectsCon">
            <project v-for="project in projects" :project="project" :key="project.id"></project>
        </div>
        <div @click="hideItems1()"><span>Click Me</span></div>
        <div @click="hideItems2()"><span>Click Me</span></div>
    </section>
    `,

    data: function() {
        return {
            projects: {}
        }
    },

    mounted: function() {
        console.log("Projects Page Mounted");

        this.fetchWork();
        
    },

    methods: {
        hideItems1() {

            $('.commercial').removeClass("test");
            $('.commercial').addClass("test2");

            $('.project').not('.commercial').removeClass("test2");
            $('.project').not('.commercial').addClass("test");
        },

        hideItems2() {

            $('.residential').removeClass("test");
            $('.residential').addClass("test2");

            $('.project').not('.residential').removeClass("test2");
            $('.project').not('.residential').addClass("test");
        },

        fetchWork() {
            let url = `./config/index.php?getWork=true`;

            // AJAX fetch call grabbing data and converting it to json
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.projects = data;
            })

            // Catch any errors
            .catch((err) => console.log(err))
        }
    },

    components: {
        project: SingleProjectComponent
    }
}