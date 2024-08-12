const { Client } = require("pg");
const app = require("./app");
const dbConfig = {
  user: "postgres",
  password: "phalla",
  host: "localhost",
  port: "5432",
  database: "yelp",
};
const client = new Client(dbConfig);

// client
//   .connect()
//   .then(() => {
//     console.log("Connected to PostgreSQL database");
//   })
//   .catch((err) => {
//     console.error("Error connecting to PostgreSQL database", err);
//   });

// client.query("SELECT * FROM test", (err, result) => {
//   if (err) {
//     console.error("Error executing query", err);
//   } else {
//     console.log("Query result:", result.rows);

//     app.get("/api/v1/test", (req, res) => {
//         console.log(req.resquestTime);
//         // res.status(202).send('Hello from server');
//         // res.status(202).json({message: 'Hello from server', app: 'tours'});
//         res.status(200).json({
//           status: "success",
//           requestTime: req.resquestTime,
//         //   result: tours.length,
//           data: result.rows,
//         });
//       });
//   }
// });

// Connect to the database
client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");

    // Execute SQL queries here

    client.query("SELECT * FROM user_acc", (err, result) => {
      if (err) {
        console.error("Error executing query", err);
      } else {
        console.log("Query result:", result.rows);
        app.get("/api/v1/test", (req, res) => {
        //   console.log(req.resquestTime);
          // res.status(202).send('Hello from server');
          // res.status(202).json({message: 'Hello from server', app: 'tours'});
          res.status(200).json({
            status: "success",
            requestTime: req.resquestTime,
            //   result: tours.length,
            data: result.rows,
          });
        });
      }

      // Close the connection when done
      client
        .end()
        .then(() => {
          console.log("Connection to PostgreSQL closed");
        })
        .catch((err) => {
          console.error("Error closing connection", err);
        });
    });
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL database", err);
  });

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
