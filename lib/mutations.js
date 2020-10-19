'use strict'

const mongoose = require('mongoose');
const database = require('./db');

module.exports = {
    createCourse: async (root, { input }) => {
        const defaults = {
            teacher: '',
            topic: ''
        }
        const newCourse = Object.assign(defaults, input)
        try {
            let course = await database.collection('courses').insertOne(newCourse)
            newCourse._id = course.insertedId
            return newCourse
        } catch (error) {
            console.error(error)
        }
    },
    editCourse: async (root, { id, input }) => {
        try {
            await database.collection('courses').updateOne(
                { _id: mongoose.Types.ObjectId(id)}, { $set: input }
            )
            let course = await database.collection('courses').findOne({ _id: mongoose.Types.ObjectId(id) })
            return course
        } catch(error) {
            console.error(error)
        }
    },
    createStudent: async (root, { input }) => {
        try {
            let student = await database.collection('students').insertOne(input)
            input._id = student.insertedId
            return input
        } catch(error) {
            console.error(error)
        }
    },
    editStudent: async (root, { id, input }) => {
        try {
            await database.collection('students').updateOne(
                { _id: mongoose.Types.ObjectId(id)}, { $set: input }
            )
            let students = await database.collection('students').findOne({ _id: mongoose.Types.ObjectId(id) })
            return students
        } catch(error) {
            console.error(error)
        }
    }
}