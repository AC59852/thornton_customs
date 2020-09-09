export default {
    props: ['serviceItem'],

    template: `
    <div class="serviceItem">
        <div class="banner" :style="{'background': 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(' + serviceItem.img + ')'}">
            <img :src="'images/' + serviceItem.icon + '.svg'">
        </div>
        <h3>{{ serviceItem.name }}</h3>
        <p>{{ serviceItem.info }}</p>
    </div>
    `
}