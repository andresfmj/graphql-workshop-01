'use strict'

const mongoose = require('mongoose');
const database = require('./db');

module.exports = {
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
    },
    getStudents: async () => {
        let students = []
        try {
            students = await database.collection('students').find().toArray()
            return students
        } catch(error) {
            console.error(error)
        }
    },
    getStudent: async (root, args) => {
        let student = await database.collection('students').findOne({ _id: mongoose.Types.ObjectId(args.id) })
        return student
    }
}
