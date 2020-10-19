'use strict'

const mongoose = require('mongoose');
const database = require('./db');

const errorHandler = require('./errorHandler');

module.exports = {
    Course: {
        students: async ({ students }) => {
            let studentsData 
            let ids
            try {
                ids = students ? students.map(id => mongoose.Types.ObjectId(id)) : []
                studentsData = ids.length > 0 
                    ? await database.collection('students').find(
                        { _id: { $in: ids } }
                    ).toArray()
                    : []
                return studentsData
            } catch (error) {
                errorHandler(error)
            }
        }
    }
}