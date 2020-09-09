import SingleServiceItem from './modules/SingleServiceItemComponent.js';

export default {
    template: `
    <section id="services">
        <div class="servicesHeader">
                <h2>What Do We Do?</h2>
        </div>
        <div class="servicesCon">
            <div class="serviceInfo">
                <h3>Placeholder Title 1</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam itaque corporis doloremque reiciendis vitae voluptate repudiandae placeat laudantium. Quidem esse quaerat, dolorem similique aspernatur adipisci animi at ducimus deleniti!</p>
            </div>
            <serviceObject v-for="serviceItem in serviceItems" :key="serviceItem.id" :serviceItem="serviceItem"></serviceObject>
        </div>
    </section>
    `,

    data: function() {
        return {
            serviceItems: [
                {id: 1, name: "Service Item 1", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", icon: "medal", img: "images/slick1.jpg"},
                {id: 2, name: "Service Item 2", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", icon: "medal", img: "images/slick2.jpg"},
                {id: 3, name: "Service Item 3", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", icon: "medal", img: "images/slick3.jpg"},
                {id: 4, name: "Service Item 4", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", icon: "medal", img: "images/slick4.jpg"},
                {id: 5, name: "Service Item 5", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", icon: "medal", img: "images/slick1.jpg"},
                {id: 6, name: "Service Item 6", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", icon: "medal", img: "images/slick2.jpg"},
            ]
        }
    },

    components: {
        serviceObject: SingleServiceItem
    }
}