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

    changeLocale(locale) {
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
}

Vue.use(VueRouter);
const app = new Application();