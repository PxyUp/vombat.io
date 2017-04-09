/**
 * Created by PyxRu on 4/1/2017.
 */
class Application {

    constructor(locale = "ru") {
        this.allowLocale = ["ru", "en"];
        this.locale = locale;
        this.component = {};
        this.app = {};
        this.router = {};
        this.eventGlobal = new Vue();
    }

    setLocale(locale) {
        if (this.allowLocale.indexOf(locale) != -1) {
            this.locale = locale;
            this.eventGlobal.$emit("changeLocale");
        }
    }

    initApplication(selector) {
        this.router = new VueRouter({
            routes: this.initRoute(),
            mode: 'history',
            base: "/"
        });
        this.app = new Vue({
            router: this.router
        }).$mount(selector);
    }

    initRoute() {
        return [
            {path: '/', component: this.getComponent("home")},
            {path: '/about', component: this.getComponent("about")},
            {path: '/faq', component: this.getComponent("faq")},
        ]
    }

    addComponent(alias, component) {
        this.component[alias] = component;
    }

    getComponent(alias) {
        return this.component[alias]
    }

    getEvents() {
        return this.eventGlobal;
    }

    getAllowLocale() {
        return this.allowLocale
    }

    getCurrentLocale() {
        return this.locale
    }

    request(url, param = {}) {
        let defaultParams = {
            method: "POST",
            body: {},
            cache: "no-cache"
        }
        let params = _.extend({}, param, defaultParams)
        return fetch(url, params)
            .then(function (response) {
                return response.json();
            })

    }
}


Vue.use(VueMaterial);
Vue.use(VueRouter);
const app = new Application();