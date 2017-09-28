const settings = require("./knex"); // settings.json
const knex = require("knex")(settings);

const nameTest = process.argv[2];

knex('famous_people')
  .select('*')
  .where('last_name', nameTest).orWhere('first_name', nameTest)
  .then(console.log);



