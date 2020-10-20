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
    },
    Person: {
        __resolveType: (person, context, info) => {
            if (person.phone) {
                return 'Monitor'
            } 
            return 'Student'
        }
    },
    GlobalSearch: {
        __resolveType: (item, context, info) => {
            if (item.title) {
                return 'Course'
            } else if (item.phone) {
                return 'Monitor'
            }
            return 'Student'
        }
    }
}