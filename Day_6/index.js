const express = require('express');
const app = express();

/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

function greetHandler(req, res) {
  const { name } = req.query.name ?? "Guest";
  res.send(`<h1>Hello , ${name}!</h1>`)

}

app.get("/", (req , res) =>{

    res.send("Hello")
})
 app.get("/greet", greetHandler)
  app.listen(3000, () => {
   console.log("Server is running on http://localhost:3000");
 });

