import SingleProjectComponent from './modules/projectComponents/SingleProjectComponent.js';

export default {
    template: `
    <section id="projects">
        <div class="lbCon">
            <div class="projLb">
                <div class="lbTop">
                    <h2>{{ currentProject.class }}</h2>
                    <span @click="hideContent()">X</span>
                </div>
                <div class="lbMain">
                    <h2>{{ currentProject.name }}</h2>
                    <h3>{{ currentProject.subheading }}</h3>
                    <div class="lbSlick">
                        <img class="lbSlick1" :src="'images/' + currentProject.workImg1 + '.jpg'">
                        <img class="lbSlick2" :src="'images/' + currentProject.workImg2 + '.jpg'">
                        <img class="lbSlick3" :src="'images/' + currentProject.workImg3 + '.jpg'">
                        <img class="lbSlick4" :src="'images/' + currentProject.workImg4 + '.jpg'">
                    </div>
                    <p>{{ currentProject.workDesc }}</p>
                    <p>{{ currentProject.workDesc2 }}</p>
                </div>
            </div>
        </div>
        <div class="filterBtns">
            <div @click="hideItems1()"><span>Click Me</span></div>
            <div @click="hideItems2()"><span>Click Me 2</span></div>
        </div>
        <div class="projectsCon">
            <project v-for="project in projects" :project="project" :key="project.id" v-on:click.native="newWork(project); showContent()"></project>
        </div>
    </section>
    `,

    data: function() {
        return {
            projects: {},

            currentProject: {}
        }
    },

    mounted: function() {
        console.log("Projects Page Mounted");

        this.fetchWork();

        this.workSlickInit();

        $('.lbCon').css('opacity', '0');
        $('.lbCon').css('display', 'block');

        setTimeout(function() {
            $('.lbCon').css('opacity', '1');
            $('.lbCon').css('display', 'none');
        },50)
        
    },

    methods: {
        hideItems1() {

            $('.commercial').removeClass("test");
            $('.commercial').addClass("test2");

            $('.project').not('.commercial').removeClass("test2");
            $('.project').not('.commercial').addClass("test");
        },

        hideItems2() {

            $('.residential').removeClass("test");
            $('.residential').addClass("test2");

            $('.project').not('.residential').removeClass("test2");
            $('.project').not('.residential').addClass("test");
        },

        fetchWork() {
            let url = `./config/index.php?getWork=true`;

            // AJAX fetch call grabbing data and converting it to json
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.projects = data;
            })

            // Catch any errors
            .catch((err) => console.log(err))
        },

        newWork(info) {
            this.currentProject = info;
        },

        workSlickInit() {
            $(document).ready(() => {
                $('.lbMain .lbSlick').not('.slick-initialized').slick({
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    infinite: false
                })
            })
        },

        showContent() {
            $('body').toggleClass('noScroll');

            $('.lbCon').show();
            $('.lbCon').addClass('lbBckOn');

            
            $('.projLb').toggleClass('fade-in-top');
            
            $('.projLb').removeClass('fade-out-top');
        },

        hideContent() {
            $('body').toggleClass('noScroll');
            
            $('.lbCon').removeClass('lbBckOn');
            $('.lbCon').addClass('lbBckOff');

            $('.projLb').removeClass('fade-in-top');
            $('.projLb').addClass('fade-out-top');

            setTimeout(function() {
                $('.lbCon').hide();
                $('.lbCon').removeClass('lbBckOff');
            }, 280)
        }
    },

    components: {
        project: SingleProjectComponent
    }
}