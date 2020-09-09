import SingleServiceComponent from './singles/SingleServiceComponent.js'

export default {
    props: ['aboutServices'],

    template: `
    <div class="aboutServicesCon">
        <div class="aboutServiceContent">
            <h4>{{ aboutServiceData.heading }}</h4>
            <p>{{ aboutServiceData.para }}</p>
        </div>
        <div class="aboutServiceBtns">
            <serviceBtn v-for="service in services" :service="service" :class="{highlighted:service.id == selected}" :key="services.id" v-on:click.native="swapContent(service); selected = service.id"></serviceBtn>
        </div>
    </div>
    `,

    data: function() {
        return {
            services: {},

            aboutServiceData: {
            heading: "Placeholder Heading", 
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },

        selected: undefined
        }
    },

    mounted: function() {
        this.fetchServices();
    },

    methods: {
        fetchServices() {
            let url = `./config/index.php?getServices=true`;

            // AJAX fetch call grabbing data and converting it to json
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.services = data;
            })

            // Catch any errors
            .catch((err) => console.log(err))
        },

        swapContent(info) {
            this.aboutServiceData = info;
        }
    },

    components: {
        serviceBtn: SingleServiceComponent
    }
}