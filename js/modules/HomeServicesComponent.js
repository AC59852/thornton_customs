import SingleHomeService from "./homeComponents/SingleHomeServiceComponent.js"

export default {
    props: ["homeServices"],

    template: `
    <section id="homeServices" class="container">
        <div class="homeServText">
            <h2>Services Heading</h2>
            <h3>Services Subheading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p id="homeServPara2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div class="homeServIcons">
            <homeServ v-for="services in services" :services="services"></homeServ>
        </div>
    </section>
    `,

    data: function(){
        return {
            services: [
                {id: "1", name: "service one", img: "slick1"},
                {id: "2", name: "service two", img: "slick2"},
                {id: "3", name: "service three", img: "slick3"},
                {id: "4", name: "service four", img: "slick1"},
            ]
        }
    },

    components: {
        homeServ: SingleHomeService 
    }
}