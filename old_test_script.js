const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

const displayResultsFromDb = (err, result) => {
  if (err) {
    return console.error("error running query", err);
  }
  console.log(result.rows); //output: 1
  client.end();
}


//return a string query, used place holders to prevent sql injections
const myQuery = () => {
  return `
    SELECT * 
    FROM  famous_people
    WHERE last_name = $1 
    OR    first_name = $1;
  `
}

const runSql = (q, inputs, cb) => {
  return client.query(q, inputs, cb);
}

//connect to pg db
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  //take the third item typed into command line
  let nameTest = process.argv[2];
  //run the query using the input returns the result to the cb
  runSql(myQuery(), [nameTest], displayResultsFromDb)

});
