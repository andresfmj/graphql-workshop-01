'use strict'

const mongoose = require('mongoose');
const database = require('./db');

const errorHandler = require('./errorHandler');

module.exports = {
    getCourses: async () => {
        let courses = []
        try {
            courses = await database.collection('courses').find().toArray()
            return courses
        } catch(error) {
            errorHandler(error)
        }
    },
    getCourse: async (root, args) => {
        let course = await database.collection('courses').findOne({ _id: mongoose.Types.ObjectId(args.id) })
        return course
    },
    getPeople: async () => {
        let students = []
        try {
            students = await database.collection('students').find().toArray()
            return students
        } catch(error) {
            errorHandler(error)
        }
    },
    getPerson: async (root, args) => {
        let student = await database.collection('students').findOne({ _id: mongoose.Types.ObjectId(args.id) })
        return student
    },
    searchItem: async (root, { keyword }) => {
        let courses = await database.collection('courses').find(
            { $text: { $search: keyword } }
        ).toArray()
        let studends = await database.collection('students').find(
            { $text: { $search: keyword } }
        ).toArray()
        let items = [...courses, ...studends]
        return items
    }
}
