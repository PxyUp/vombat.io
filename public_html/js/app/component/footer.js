/**
 * Created by PyxRu on 4/2/2017.
 */

app.addComponent("app-footer", Vue.component('app-footer', {
    template: `<div class="footer">
                    <div class="content">
                        <div class="languages">
                            <div class="lang" v-bind:class="[app.getCurrentLocale() == lang ? 'current' : '']" v-for="lang in languages" v-on:click="changeLocale(lang)">{{ lang.toUpperCase() }}</div>
                        </div>
                    </div>
                </div>`,
    data: function () {
        return {
            languages: app.getAllowLocale()
        }
    },
    created: function () {
        app.getEvents().$on("changeLocale", this.eventChangeLocale)
    },
    beforeDestroy: function () {
        app.getEvents().$off('changeLocale', this.eventChangeLocale)
    },
    methods: {
        changeLocale: function (locale) {
            app.changeLocale(locale);
        },
        eventChangeLocale: function () {
            console.log("change footer")
            this.$forceUpdate();
        }
    }

}));
