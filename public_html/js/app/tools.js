/**
 * Created by pyxru on 11.04.17.
 */
const tools = {
    resetField: function (field) {
        switch (field.type) {
            case "text":
                return "";
            case "number":
                return 0;
            case "file":
                return null;
            default:
                return ""
        }
    }
}