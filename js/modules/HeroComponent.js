export default {
    props: ['hero'],

    template: `
    <div id="slideshow">
        <div class="slick">
            <div class="slick1">
                <div class="slickText">
                    <h2>Test Title 3</h2>
                    <p>This is some test paragraph text 3</p>
                </div>
            </div>
            <div class="slick2">
                <div class="slickText">
                    <h2>Test Title 3</h2>
                    <p>This is some test paragraph text 3</p>
                </div>
            </div>
            <div class="slick3">
                <div class="slickText">
                    <h2>Test Title 3</h2>
                    <p>This is some test paragraph text 3</p>
                </div>
            </div>
        </div>
    </div>
    `,

    mounted: function() {
        this.slickInit()
    },

    methods:  {
        slickInit() {
            $(document).ready(() => {
                $('#slideshow .slick').slick({
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 4000
                })
            })
        }
    }
}