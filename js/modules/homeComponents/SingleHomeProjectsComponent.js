export default {
    props: ['homeProject'],

    template: `
    <div class="box">
        <img :src="'images/' + homeProject.img + '.jpg'" :alt="'Image One For ' + homeProject.name">
    </div>
    `,

    mounted: function() {
    },

    methods:  {
    }
}