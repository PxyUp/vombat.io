/**
 * Created by PyxRu on 4/1/2017.
 */
String.prototype.translate = function () {
    let key = this.split(".");
    if (key.length == 0)
        return "";
    let translate = app.lang[app.getCurrentLocale()];
    try {
        while (key.length != 0) {
            translate = translate[key.shift()]
        }
    }
    catch (error) {
        throw "Can't translate " + key;
    }
    return translate;
};

Application.prototype.translate = function (key){
    return key.translate()
}
