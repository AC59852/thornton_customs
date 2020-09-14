import AboutInfoComponent from './modules/aboutComponents/AboutInfoComponent.js';
import AboutServicesComponent from './modules/aboutComponents/AboutServicesComponent.js';
import AboutCtaComponent from './modules/aboutComponents/AboutCtaComponent.js';

export default {
    template: `
    <section id="about">
        <div class="aboutHeader">
            <h2>Who Are We?</h2>
        </div>
        <div class="aboutCon">
            <section id="aboutInfo">
                <aboutInfo></aboutInfo>
            </section>
            <section id="aboutCta">
                <aboutCta></aboutCta>
            </section>
            <section id="aboutServices">
                <aboutServices></aboutServices>
            </section>
        </div>
    </section>
    `,

    mounted: function() {

    },

    components: {
        aboutInfo: AboutInfoComponent,
        aboutServices: AboutServicesComponent,
        aboutCta: AboutCtaComponent
    }
}