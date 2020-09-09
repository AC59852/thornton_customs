export default {
    props: ['service'],

    template: `
    <div>
        <img :src="'images/' + service.icon + '.svg'">
        <span>{{ service.name }}</span>
    </div>
    `
}