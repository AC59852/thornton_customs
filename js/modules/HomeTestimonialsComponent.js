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
                {id: "1", name: "John Doe", para: "great work, keep it up, proud of you!"},
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
                    autoplaySpeed: 4000,
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