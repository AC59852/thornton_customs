export default {
    props: ['project'],

    template: `
    <div class="project" :class="project.class">
        <div>
            <img :src="'images/' + project.previewImg + '.jpg'" :alt="'image for ' + project.name" height="300" width="300">
        </div>
        <h3>{{ project.name }}</h3>
    </div>
    `
}