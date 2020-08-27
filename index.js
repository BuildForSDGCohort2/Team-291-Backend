<<<<<<< HEAD
// ANCHOR initialize the server and graphql, set routes and port for the server
import express from "express";
import expressGraphQl from "express-graphql";
import Schema from "./schema";
import root from "./resolver";
=======
'use strict';

// ANCHOR initialize the server and graphql, set routes and port for the server
const express = require('express');
const expressGraphQl = require('express-graphql');
const Schema = require('./schema');
const {root} = require('./resolver');
>>>>>>> 267b8c6ace412c6f7c43e75a48bddcf170676508

// Initialize Express server
const app = express();

// Set Routes
<<<<<<< HEAD
app.get("/", (req, res) => {
	return res.json({
		msg: "Welcome to my GQL World",
	});
=======
app.get('/', (req, res) => {
  return res.json({
    msg: 'Welcome to my GQL World',
  });
>>>>>>> 267b8c6ace412c6f7c43e75a48bddcf170676508
});

// Use express to initalize graphqql
app.use(
<<<<<<< HEAD
	"/graphql",
	expressGraphQl({
		schema: Schema,
		rootValue: root,
		graphiql: true,
	})
=======
  '/graphql',
  expressGraphQl({
    schema: Schema,
    rootValue: root,
    graphiql: true,
  })
>>>>>>> 267b8c6ace412c6f7c43e75a48bddcf170676508
);

// Listen for the port
app.listen(3000, () => {});
