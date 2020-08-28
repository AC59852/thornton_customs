export default {
    props: ['homeTestData'],

    template: `
    <div>
        <h3>{{ homeTestData.name }}</h3>
        <p>{{ homeTestData.para }}</p>
    </div>
    `
}