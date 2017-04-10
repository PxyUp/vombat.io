/**
 * Created by PyxRu on 4/10/2017.
 */

app.addComponent("card", Vue.component('card', {
    template: `<md-card>
                  <md-card-header>
                    <md-card-header-text>
                      <div class="md-title">{{ title }}</div>
                      <div class="md-subhead">{{ discription }}</div>
                    </md-card-header-text>
                
                    <md-card-media>
                      <img :src="url" :alt="title">
                    </md-card-media>
                  </md-card-header>
                
                  <md-card-actions>
                    <md-button @click.native="showAd(id)">{{ showAction.translate() }}</md-button>
                    <md-button @click.native="editAd(id)">{{ editAction.translate() }}</md-button>
                    <md-button @click.native="deleteAd(id)">{{ deleteAction.translate() }}</md-button>
                  </md-card-actions>
                </md-card>`,
    data: function () {
        return {
            showAction: "card.action.show",
            editAction: "card.action.edit",
            deleteAction: "card.action.delete"
        }
    },
    props: ['id', 'title', "discription", "url"],
    created: function () {
        app.getEvents().$on("changeLocale", this.eventChangeLocale)
    },
    beforeDestroy: function () {
        app.getEvents().$off('changeLocale', this.eventChangeLocale)
    },
    methods: {
        eventChangeLocale: function () {
            this.$forceUpdate()
        },
        showAd: function(id){
            console.log("show ",id)
        },
        editAd: function(id){
            console.log("edit ",id)
        },
        deleteAd: function(id){
            console.log("delete ",id)
        }
    }

}));