/**
 * Created by PyxRu on 4/2/2017.
 */
/**
 * Created by PyxRu on 4/2/2017.
 */
/**
 * Created by PyxRu on 4/2/2017.
 */
/**
 * Created by PyxRu on 4/2/2017.
 */

app.addComponent("home", {
    template: `<div class="content">
                    <card-list></card-list>
                </div>`,
    data: function () {
        return {
            message: "home.content"
        }
    },
    components: {
        "card-list": app.getComponent("card-list")
    },
    created: function () {
        app.getEvents().$on("changeLocale", this.eventChangeLocale)
    },
    beforeDestroy: function () {
        app.getEvents().$off('changeLocale', this.eventChangeLocale)
    },
    methods: {
        eventChangeLocale: function () {
            this.$forceUpdate()
        }
    }

});
