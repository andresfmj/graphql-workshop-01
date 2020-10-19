'use strict';

require('dotenv').config();
require('./lib/db');
// const { graphql, buildSchema } = require('graphql')
// const { buildSchema } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers')

const app = express();
const port = process.env.PORT || 3000;

// definir el esquema
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema({ typeDefs, resolvers });

// ejecutar el schema query hello
// graphql(schema, '{ hello, saludo }', resolvers)
// .then(data => {
//     console.log(data)
// })

app.use(
	'/api',
	graphqlHTTP({
		schema,
		rootValue: resolvers,
		graphiql: true,
	})
);

app.listen(port, () => {
	console.log(`server is listening on port ${port}`);
});
