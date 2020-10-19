'use strict'

const mongoose = require('mongoose');
const database = require('./db');


module.exports = {
	// hello: () => {
	// 	return 'Hola Mundo';
	// },
	// saludo: () => {
	// 	return 'Hola a todos!!';
    // },
    Query: {
        getCourses: async () => {
            let courses = []
            try {
                courses = await database.collection('courses').find().toArray()
                return courses
            } catch(error) {
                console.error(error)
            }
        },
        getCourse: async (root, args) => {
            let course = await database.collection('courses').findOne({ _id: mongoose.Types.ObjectId(args.id) })
            return course
        }
    }
}

