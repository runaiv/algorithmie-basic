export default class GradeSchool {
    constructor() {
        this.students = new Map();
    }

    addStudent(name, grade){
        for (var [key, value] of myMap.entries()) {
            this.students.set(grade, [name])
            console.log
          }
        
    }

    getAllStudents(){
        return this.students
    }

    getGradeStudents(grade){
        return this.students.get(grade)
    }
}