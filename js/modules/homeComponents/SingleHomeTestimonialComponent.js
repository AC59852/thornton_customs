export default {
    props: ['homeTestData'],

    template: `
    <div>
        <p>{{ homeTestData.para }}</p>
        <h3>{{ homeTestData.name }}</h3>
    </div>
    `
}