#! /usr/bin/env node
const request = require("request");

var limit = process.argv[2] || 1;
request.get(
  {
    url: "https://api.api-ninjas.com/v1/jokes?limit=" + limit,
    headers: {
      "X-Api-Key": "ZRiV7XlcytXn+zhGEgjIoQ==GRwJMErxyfqAZsUF"
    }
  },
  function (error, response, body) {
    if (error) return console.error("Request failed:", error);
    else if (response.statusCode != 200)
      return console.error("Error:", response.statusCode, body.toString("utf8"));
    else console.log(body);
  }
);
