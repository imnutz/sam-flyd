import flyd from "flyd";
import binder from "./binder";
import state from "./state";
import actions from "./actions";
import model from "./model";

const patch = require('snabbdom').init([
  require('snabbdom/modules/class'),
  require('snabbdom/modules/props'),
  require('snabbdom/modules/eventlisteners'),
  require('snabbdom/modules/style'),
]);

binder(state, actions, model);

var old = document.querySelector("#contact-manager");

const ok = (representation) => {
    old = patch(old, representation);
}

flyd.map(ok, state.stream);
state.init();
