const express = require("express");
const sms = require("./sms");

const app = express();

module.exports = function appServer() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // TODO: Incoming messages route
  app.post("/incoming-messages", (req, res) => {
    const data = req.body;
    console.log(`Received message: \n ${data}`);
    res.sendStatus(200);
  });

  // TODO: Delivery reports route

  app.post("/delivery-reports", (req, res) => {
    const data = req.body;
    console.log(`Received report: \n ${data}`);
    res.sendStatus(200);
  });

  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`App running on port: ${port}`);

    // TODO: call sendSMS to send message after server starts
  });
};

// // Get dependencies
// const express = require('express');
// const path = require('path');
// const http = require('http');
// const bodyParser = require('body-parser');
// const cors = require('cors')

// // Get our API routes
// const api = require('./server/routes/api');

// const app = express();

// // app.use(cors());
// // Parsers for POST data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist')));

// // Set our api routes
// app.use('/api', api);

// // Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'));
// });

// /**
//  * Get port from environment and store in Express.
//  */
// const port = process.env.PORT || '4000';
// app.set('port', port);

// /**
//  * Create HTTP server.
//  */
// const server = http.createServer(app);

// /**
//  * Listen on provided port, on all network interfaces.
//  */
// server.listen(port, () => console.log(`+++++++++++++++++++++++++++++++++SMS_CHALLENGE API running on localhost, Port NO:${port}++++++++++++++++++++++++++++++++++++++`))
