// Tells the browser we want JavaScript to run in strict mode.
// This means faster code, but JavaScript needs to be cleaner.
"use strict";

// A definition of a student
class Student {
    // Student ID
    id;
    // Student name
    name;

    // Creates a new instance (object) of type Student
    constructor(id, name) {
        // Set the id and name of the object instance
        this.id = id;
        this.name = name;
    }

  	// Returns student details as a HTML table row.
    tableRow() {
        return `<tr><td>${this.id}</td><td>${this.name}</td></tr>`;
        return `<tr><td>${this.id}</td><td>${this.name}</td></tr>`;
    }
}

// An array of students.
var students = [
    new Student("001", "Dior Walker"), 
    new Student("002", "Carter Walker"), 
    new Student("003", "Atlas Walker")];

function printStudents() {
    // Build html for table.
    var html = 
        `<table border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>`;
    
            var html1 = 
            `<table border="1">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>`;
    // Iterate over all the students
    for (var student of students) {
        html += student.tableRow();
        html1 += student.tableRow();
    }
    // End html table.
    html += `</table>`
    html1 += `</table>`
    // Get the main element
    var main = document.getElementById("main");
    // Set the innerHTML to html
    main.innerHTML = html;
}