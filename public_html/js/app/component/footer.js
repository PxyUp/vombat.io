/**
 * Created by PyxRu on 4/2/2017.
 */


app.addComponent("app-footer", Vue.component('app-footer', {
    template: `<div class="footer">
                   <md-button :disabled="app.getCurrentLocale() == lang" class="lang" v-for="lang in languages" @click.native="changeLocale(lang)" class="md-dense">{{ lang.toUpperCase() }}</md-button>
                </div>`,
    data: function () {
        return {
            languages: app.getAllowLocale()
        }
    },
    methods: {
        changeLocale: function (lang) {
            app.setLocale(lang)
        },
        eventChangeLocale: function () {
            this.$forceUpdate()
        }
    },
    created: function () {
        app.getEvents().$on("changeLocale", this.eventChangeLocale)
    },
    beforeDestroy: function () {
        app.getEvents().$off('changeLocale', this.eventChangeLocale)
    }

}));