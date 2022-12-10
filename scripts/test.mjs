import * as conditions from "node-conditions";
console.log('xxx',conditions)
process.exit(conditions.BROWSER ? 1 : 0)
