const flyd = require("flyd");

let stream = flyd.stream();

const dec = () => stream({ decBy: 1 })
const inc = () => stream({ incBy: 1 })
const warning = (data) => stream({ warning: data.message })

export default { stream, dec, inc, warning }
