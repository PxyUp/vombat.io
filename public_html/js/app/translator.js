/**
 * Created by PyxRu on 4/1/2017.
 */
Application.prototype.translator = function (key) {
    key = key.split(".");
    if (key.length == 0)
        return "";
    let translate = app.lang[this.locale];
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