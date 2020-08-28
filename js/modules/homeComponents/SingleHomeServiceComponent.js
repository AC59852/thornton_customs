export default {
    props: ['services'],

    template: `
    <div>
        <img :src="'images/' + services.img + '.jpg'" :alt="'icon for ' + services.name">
        <h3>{{ services.name }}</h3>
    </div>
    `
}