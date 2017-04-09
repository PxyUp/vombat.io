/**
 * Created by PyxRu on 4/1/2017.
 */

app.addComponent("app-header", Vue.component('app-header', {
    template: `<div class="header">
                  <md-whiteframe md-tag="md-toolbar" md-elevation="2" md-theme="light-blue" class="md-small">
                        <div class="md-toolbar-container">
                          <md-button class="md-icon-button" @click.native="$refs.sidenav.toggle()">
                            <md-icon>menu</md-icon>
                          </md-button>
                    
                          <span style="flex: 1"></span>
                    
                          <md-button class="md-icon-button">
                            <md-icon>search</md-icon>
                          </md-button>
                    
                          <md-button class="md-icon-button">
                            <md-icon>view_module</md-icon>
                          </md-button>
                        </div>
                    </md-whiteframe>
                    <md-sidenav md-theme="blue" class="md-left" ref="sidenav">                
                    <md-list>
                          <md-list-item v-for="item in menu"  class="md-primary">
                            <router-link @click.native="$refs.sidenav.toggle()" class="item" v-bind:to="item.href" exact><md-icon>{{ item.icon }}</md-icon> {{ item.title.translate() }}</router-link>
                          </md-list-item>
                    </md-list>
                  </md-sidenav>
                </div>`,
    data: function () {
        return {
            title: 'MonoPolly',
            menu: [
                {
                    title: "header.menu.item.title.main",
                    href: "/",
                    icon: "work"
                },
                {
                    title: "header.menu.item.title.about",
                    href: "/about",
                    icon: "chat"
                },
                {
                    title: "header.menu.item.title.faq",
                    href: "/faq",
                    icon: "info"
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
            this.$forceUpdate()
        }
    }
}));
