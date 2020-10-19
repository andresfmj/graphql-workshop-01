'use strict'

const queries = require('./queries');
const mutations = require('./mutations');
const types = require('./types');

module.exports = {
	// hello: () => {
	// 	return 'Hola Mundo';
	// },
	// saludo: () => {
	// 	return 'Hola a todos!!';
    // },
    Query: queries,
	Mutation: mutations,
	...types
}

