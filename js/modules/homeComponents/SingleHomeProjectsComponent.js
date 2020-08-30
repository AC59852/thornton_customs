export default {
    props: ['homeProject'],

    template: `
    <div class="homeProjectSlide">
        <h3>{{ homeProject.title }}</h3>
        <div class="projectSlick">
            <img :src="'images/' + homeProject.img1 + '.jpg'" :alt="'Image One For ' + homeProject.name">
            <img :src="'images/' + homeProject.img2 + '.jpg'" :alt="'Image Two For ' + homeProject.name">
            <img :src="'images/' + homeProject.img3 + '.jpg'" :alt="'Image Three For ' + homeProject.name">
        </div>
    </div>
    `,

    mounted: function() {
        this.projectSlickInit()
    },

    methods:  {
        projectSlickInit() {
            $(document).ready(() => {
                $('.homeProjectSlide .projectSlick').not('.slick-initialized').slick({
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                })
            })
        }
    }
}