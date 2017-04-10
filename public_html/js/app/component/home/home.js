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

app.addComponent("home", Vue.component('home', {
    template: `<div class="content">
                    {{ message.translate() }}
                    <md-whiteframe md-elevation="2" class="form-container">
                        <add-form></add-form>
                    </md-whiteframe>
                </div>`,
    data: function () {
        return {
            message: "home.content"
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
            this.$forceUpdate()
        }
    }

}));
