const conditions=require("node-conditions");
console.log('xxx',conditions)
process.exit(conditions.BROWSER ? 1 : 0)
