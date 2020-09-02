export default {
    props: ['services'],

    template: `
    <div>
        <img :src="'images/' + services.img + '.svg'" :alt="'icon for ' + services.name">
        <h3>{{ services.name }}</h3>
    </div>
    `
}