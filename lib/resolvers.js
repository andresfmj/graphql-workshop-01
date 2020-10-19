'use strict'

const queries = require('./queries');
const mutations = require('./mutations');

module.exports = {
	// hello: () => {
	// 	return 'Hola Mundo';
	// },
	// saludo: () => {
	// 	return 'Hola a todos!!';
    // },
    Query: queries,
    Mutation: mutations
}

