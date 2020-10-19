'use strict'

const { graphql, buildSchema } = require('graphql');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const port = process.env.PORT || 3000

// definir el esquema
const schema = buildSchema(`
    type Query {
        "Retorna un saludo"
        hello: String,
        "Retorna otro saludo"
        saludo: String
    }
`)

// configurar los resolvers
const resolvers = {
    hello: () => {
        return 'Hola Mundo'
    },
    saludo: () => {
        return 'Hola a todos!!'
    }
}

// ejecutar el schema query hello
// graphql(schema, '{ hello, saludo }', resolvers)
// .then(data => {
//     console.log(data)
// })

app.use('/api', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})
