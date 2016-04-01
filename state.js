import theme from "./theme";

const flyd = require("flyd");

let stream = flyd.stream();

let _actions;
let displayedWarning = false;

const setActions = (actions) => _actions = actions

const render = (model) => {
    stream(theme.counter(model, _actions));
    nap(model);
}

const enough = (model) => model.count === 10 && !displayedWarning

const nap = (model) => {
    if(enough(model)) {
        _actions.warning({message: "You should stop at 10"});
        displayedWarning = true;
    }
}

const observe = (model) => {
    flyd.map(render, model);
}

const init = () => {
    stream(theme.counter({count: 0}, _actions));
}

export default { stream, observe, setActions, init };
