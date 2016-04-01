const h = require("snabbdom/h");

const counter = (model, actions) => {
    let warning = Boolean(model.warning) ? h("div.warning", String(model.warning)) : "";

    return h("div.wrapper", [
        h("button", {on:{click: function() {actions.inc()}}}, "+"),
        h("span", "   Count = " + String(model.count)),
        h("button", {on:{click: function() {actions.dec()}}}, "-"),
        warning
    ]);
}

export default { counter };
