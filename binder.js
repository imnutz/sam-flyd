export default (state, actions, model) => {
    state.observe(model.stream);
    model.observe(actions.stream)

    state.setActions(actions);
}
