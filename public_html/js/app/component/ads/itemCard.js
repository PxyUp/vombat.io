/**
 * Created by PyxRu on 4/10/2017.
 */

app.addComponent("card", {
    template: `<md-card>
                  <md-card-header>
                    <md-card-header-text>
                      <div class="md-title">{{ card.title }}</div>
                      <div class="md-subhead">{{ card.discription }}</div>
                    </md-card-header-text>
                
                    <md-card-media>
                      <img :src="card.url" :alt="card.title">
                    </md-card-media>
                  </md-card-header>
                
                  <md-card-actions>
                    <md-button @click.native="showAd()">{{ showAction.translate() }}</md-button>
                    <md-button @click.native="editAd()">{{ editAction.translate() }}</md-button>
                    <md-button @click.native="deleteAd()">{{ deleteAction.translate() }}</md-button>
                  </md-card-actions>
                </md-card>`,
    data: function () {
        return {
            showAction: "card.action.show",
            editAction: "card.action.edit",
            deleteAction: "card.action.delete"
        }
    },
    props: ['card'],
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
        showAd: function () {
            console.log("show ", this.card.id)
        },
        editAd: function () {
            console.log("edit ", this.card.id)
        },
        deleteAd: function () {
            console.log("delete ", this.card.id)
        }
    }

});