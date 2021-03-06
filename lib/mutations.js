'use strict'

const mongoose = require('mongoose');
const database = require('./db');

const errorHandler = require('./errorHandler');

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
            errorHandler(error)
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
            errorHandler(error)
        }
    },
    createPerson: async (root, { input }) => {
        try {
            let student = await database.collection('students').insertOne(input)
            input._id = student.insertedId
            return input
        } catch(error) {
            errorHandler(error)
        }
    },
    editPerson: async (root, { id, input }) => {
        try {
            await database.collection('students').updateOne(
                { _id: mongoose.Types.ObjectId(id)}, { $set: input }
            )
            let students = await database.collection('students').findOne({ _id: mongoose.Types.ObjectId(id) })
            return students
        } catch(error) {
            errorHandler(error)
        }
    },
    addStudent: async (root, { courseId, studentId }) => {
        try {
            let student = await database.collection('students').findOne({ _id: mongoose.Types.ObjectId(studentId) }) 
            let course = await database.collection('courses').findOne({ _id: mongoose.Types.ObjectId(courseId) })
            
            if (!course || !student) {
                throw new Error('El estudiante o el curso no existe')
            }

            await database.collection('courses').updateOne(
                { _id: mongoose.Types.ObjectId(courseId) },
                { $addToSet: { students: mongoose.Types.ObjectId(studentId) } }
            )

            return course
        } catch(error) {
            errorHandler(error)
        }
    }
}