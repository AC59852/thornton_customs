export default {
    props: ['aboutInfo'],

    template: `
    <div>
        <img :src="'images/' + aboutData.img + '.jpg'">
        <div class="aboutInfoContent">
            <h3>{{ aboutData.heading }}</h3>
            <h4>{{ aboutData.subheading }}</h4>
            <p>{{ aboutData.paragraph }}</p>
        </div>
    </div>
    `,

    data: function() {
        return {
            aboutData: {
                img: 'slick1',
                heading: 'Test Heading 1',
                subheading: 'Test Subheading 1',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            }
        }
    }
}