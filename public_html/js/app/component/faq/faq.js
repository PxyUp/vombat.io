/**
 * Created by PyxRu on 4/2/2017.
 */
/**
 * Created by PyxRu on 4/2/2017.
 */
/**
 * Created by PyxRu on 4/2/2017.
 */

app.addComponent("faq", Vue.component('faq', {
    template: `<div class="content">
                    {{ app.translator(message) }}
                </div>`,
    data: function () {
        return {
            message: "faq.content"
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
            this.$forceUpdate();
        }
    }

}));
