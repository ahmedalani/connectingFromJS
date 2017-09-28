const settings = require("./knex"); // settings.json
const knex = require("knex")(settings);

const nameTest = process.argv[2];

knex('famous_people')
  .select('*')
  .where('last_name', 'like', '%' + nameTest + '%').orWhere('first_name', 'like', '%' + nameTest + '%')
  .then(console.log);





// //return a string query, used place holders to prevent sql injections
// const myQuery = () => {
//   return `
//     SELECT * 
//     FROM  famous_people
//     WHERE last_name = $1 
//     OR    first_name = $1;
//   `
// }


// const displayResultsFromDb = (err, result) => {
//   if (err) {
//     return console.error("error running query", err);
//   }
//   console.log(result.rows); //output: 1
//   client.end();
// }


// const runSql = (q, inputs, cb) => {
//   return client.query(q, inputs, cb);
// }

// //connect to pg db
// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   //take the third item typed into command line
//   let nameTest = process.argv[2];
//   //run the query using the input returns the result to the cb
//   runSql(myQuery(), [nameTest], displayResultsFromDb)

// });
