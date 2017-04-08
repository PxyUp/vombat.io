/**
 * Created by PyxRu on 4/1/2017.
 */

app.addComponent("app-header", Vue.component('app-header', {
    template: `<div class="header">
                    <div class="content">
                        <div class="title">{{ title }}</div>
                        <div class="menu">
                            <router-link class="item" v-for="item in menu" v-bind:to="item.href" exact>{{ app.translator(item.title) }}</router-link>
                        </div>
                    </div>
                </div>`,
    data: function () {
        return {
            title: 'MonoPolly',
            menu: [
                {
                    title: "header.menu.item.title.main",
                    href: "/"
                },
                {
                    title: "header.menu.item.title.about",
                    href: "/about"
                },
                {
                    title: "header.menu.item.title.faq",
                    href: "/faq"
                }
            ]
        }
    },
    created: function () {
        app.getEvents().$on("changeLocale", this.eventChangeLocale)
    },
    beforeDestroy: function () {
        app.getEvents().$off('changeLocale', this.eventChangeLocale)
    },
    methods: {
        eventChangeLocale: function () {
            console.log("change header")
            this.$forceUpdate()
        }
    }
}));
