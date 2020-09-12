export default {
    props: ['project'],

    template: `
    <div class="project" :class="project.class">
        <div>
            <img :src="'images/' + project.previewImg + '.jpg'" :alt="'image for ' + project.name">
        </div>
        <h3>{{ project.name }}</h3>
    </div>
    `
}