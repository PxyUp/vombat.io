/**
 * Created by PyxRu on 4/10/2017.
 */

app.addComponent("card-list", {
    template: `<div class="card-list">
                    <div class="header">

                          <md-input-container v-if="isSearch" md-inline>
                            <label>{{ "cardList.element.search".translate() }}</label>
                            <md-input v-model="searchPhrase" @keyup="search"></md-input>
                          </md-input-container>
                          
                          <md-button v-if="!isSearch" class="md-icon-button" @click.native="isSearch=true;searchPhrase='';">
                            <md-icon>search</md-icon>
                          </md-button>
                          
                          <md-button v-if="isSearch" class="md-icon-button" @click.native="isSearch=false;searchPhrase='';">
                            <md-icon>close</md-icon>
                          </md-button>
                    
                          <md-button class="md-icon-button" @click.native="isReverse=!isReverse">
                            <md-icon>compare_arrows</md-icon>
                          </md-button>
                    </div>
                                        <add-form v-if="modal"></add-form>
                    <div class="content" :class="[isReverse ? 'reverse' : 'default']">
                        <card v-for="card in search(cards)" :card="card"></card>        
                    </div>
                    <md-button class="md-fab md-fab-bottom-right" id="fab" @click.native="modal = !modal">
                      <md-icon>add</md-icon>
                    </md-button>
                    

                </div>`,
    data: function () {
        return {
            cards: [],
            isReverse: false,
            searchPhrase: "",
            isSearch: false,
            modal: false
        }
    },
    components: {
        "card": app.getComponent("card"),
        "add-form": app.getComponent("add-form")
    },
    created: function () {
        app.getEvents().$on("changeLocale", this.eventChangeLocale)
    },
    beforeDestroy: function () {
        app.getEvents().$off('changeLocale', this.eventChangeLocale)
    },
    beforeCreate: function () {
        app.request("/api/cards/list").then((data) => {
            this.cards = data;
            this.$nextTick();
        })
    },
    methods: {
        eventChangeLocale: function () {
            this.$forceUpdate()
        },
        search: function () {
            if (this.isSearch) {
                return this.cards.filter((item) => {
                    return item.title.toLowerCase().indexOf(this.searchPhrase.toLowerCase()) != -1
                })
            }
            return this.cards
        }
    }

});
