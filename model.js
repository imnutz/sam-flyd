const flyd = require("flyd");

let model = {
    count: 0
}

let stream = flyd.stream(0);

const present = (data = {}) => {
    if(data.incBy) {
        model.count += data.incBy;
    }

    if(data.decBy) {
        model.count -= data.decBy;
    }

    model.warning = data.warning || "";

    stream(model);
}

const observe = (actions) => {
    flyd.map(present, actions);
}

export default { stream, observe };
