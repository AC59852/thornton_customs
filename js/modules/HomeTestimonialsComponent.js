import HomeSingleTest from "./homeComponents/SingleHomeTestimonialComponent.js"

export default {
    props: ['homeTestimonials'],

    template: `
    <aside id="homeTestimonials">
        <div class="testimonialSlick">
            <singleHomeTest v-for="homeTestData in homeTestData" :homeTestData="homeTestData" :key="homeTestData.id"></singleHomeTest>
        </div>
    </aside>
    `,

    data: function(){
        return {
            homeTestData: [
                {id: "1", name: "John Doe", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {id: "2", name: "Guy Mann", para: "Loved what Kyle did to the place, wouldn't choose anyone else."},
                {id: "3", name: "Jake Weary", para: "Absolutely phenomenal remodel, cannot wait to have Thornton Customs work again!"}
            ]
        }
    },

    mounted: function() {
        this.testSlickInit()
    },

    methods: {
        testSlickInit() {
            $(document).ready(() => {
                $('#homeTestimonials .testimonialSlick').not('.slick-initialized').slick({
                    arrows: false,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 3500,
                    pauseOnHover: false,
                    fade: true,
                    speed: 1000
                })
            })
        }
    },

    components: {
        singleHomeTest: HomeSingleTest
    }
}