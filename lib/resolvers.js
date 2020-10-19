'use strict'

const courses = [
    {
        _id: 'anyid',
        title: 'Mi titulo',
        teacher: 'Mi profesor',
        description: 'Una descripcion',
        topic: 'programacion'
    },
    {
        _id: 'anyid',
        title: 'Mi titulo 2',
        teacher: 'Mi profesor',
        description: 'Una descripcion',
        topic: 'programacion'
    },
    {
        _id: 'anyid',
        title: 'Mi titulo 3',
        teacher: 'Mi profesor',
        description: 'Una descripcion',
        topic: 'programacion'
    }
]


module.exports = {
	// hello: () => {
	// 	return 'Hola Mundo';
	// },
	// saludo: () => {
	// 	return 'Hola a todos!!';
    // },
    getCourses: () => {
        return courses
    }
}

