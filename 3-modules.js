// CommonJS, every file is a module by default   
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names")
const sayHi = require("./5-utils")
const data = require("./6-alternative-flavor")
require('./7-mine-grenade')
sayHi("john")
sayHi(names.hardik)
sayHi(names.khatri)