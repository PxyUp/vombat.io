/**
 * Created by pyxru on 10.04.17.
 */


app.addComponent("add-form", {
    template: `<md-tabs md-fixed>
                     <md-tab v-for="(tab, index) in tabs" :md-active="index == 0" :md-icon="tab.icon">
                         <form novalidate @submit.stop.prevent="submit">
                            <h2>{{ tab.title.translate() }}</h2>
                            <md-input-container v-for="input in tab.fields">
                                <label>{{ input.label.translate() }}</label>
                                <md-input v-if="input.type == 'number' || input.type == 'text'" :type="input.type" v-model="input.model"></md-input>
                                <md-textarea v-if="input.type == 'textarea'"  v-model="input.model"></md-textarea>
                                <md-file v-if="input.type == 'file'" v-model="input.model"></md-file>
                            </md-input-container>
                         </form>
                    </md-tab>
                </md-tabs>`,
    data: function () {
        return {
            tabs: [
                {
                    title: "form.new.type.basic",
                    icon: "text_format",
                    fields: [
                        {
                            type: "text",
                            model: "",
                            label: "form.new.title",
                            active: true
                        },
                        {
                            type: "text",
                            model: "",
                            label: "form.new.discription"
                        },
                        {
                            type: "number",
                            model: 0,
                            label: "form.new.countView"
                        },
                        {
                            type: "textarea",
                            model: "",
                            label: "form.new.text"
                        }
                    ]
                },
                {
                    title: "form.new.type.image",
                    icon: "panorama",
                    fields: [
                        {
                            type: "text",
                            model: "",
                            label: "form.new.title"
                        },
                        {
                            type: "text",
                            model: "",
                            label: "form.new.discription"
                        },
                        {
                            type: "number",
                            model: 0,
                            label: "form.new.countView"
                        },
                        {
                            type: "file",
                            model: null,
                            label: "form.new.file"
                        }
                    ]
                },
                {
                    title: "form.new.type.video",
                    icon: "videocam",
                    fields: [
                        {
                            type: "text",
                            model: "",
                            label: "form.new.title"
                        },
                        {
                            type: "text",
                            model: "",
                            label: "form.new.discription"
                        },
                        {
                            type: "number",
                            model: 0,
                            label: "form.new.countView"
                        },
                        {
                            type: "file",
                            model: null,
                            label: "form.new.file"
                        }
                    ]
                },
                {
                    title: "form.new.type.html",
                    icon: "pageview",
                    fields: [
                        {
                            type: "text",
                            model: "",
                            label: "form.new.title"
                        },
                        {
                            type: "text",
                            model: "",
                            label: "form.new.discription"
                        },
                        {
                            type: "number",
                            model: 0,
                            label: "form.new.countView"
                        },
                        {
                            type: "file",
                            model: null,
                            label: "form.new.file"
                        }
                    ]
                },

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
            this.$forceUpdate()
        }
    }

});
