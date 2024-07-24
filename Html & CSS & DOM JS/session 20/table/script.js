let tableContainer = document.getElementById('my-table');

let studentsTable = document.createElement('table');
tableContainer.append(studentsTable);

// let thead = document.createElement('thead');
// studentsTable.append(thead);
let thead = studentsTable.createTHead();

// let tr = document.createElement('tr');
// thead.append(tr);

let tr = thead.insertRow();
// let th1 = document.createElement('th');
// th1.innerText = 'Name';
// tr.append(th1);


// let th2 = document.createElement('th');
// th2.innerText = 'Age';
// tr.append(th2);

// let th3 = document.createElement('th');
// th3.innerText = 'City';
// tr.append(th3);

let headers = ['id', 'Name', 'Grade', 'College'];

for (let t of headers) {
    let th = document.createElement('th');
    th.innerText = t;
    tr.append(th);

}


// let tbody = document.createElement('tbody');
// studentsTable.append(tbody);
let tbody = studentsTable.createTBody();

let students = [

    { id: 1, name: 'John', grade: 90, college: 'MIT' },
    { id: 2, name: 'Jane', grade: 95, college: 'Harvard' },
    { id: 3, name: 'Doe', grade: 85, college: 'Stanford' },
    { id: 4, name: 'Smith', grade: 80, college: 'Yale' },
    { id: 5, name: 'Alex', grade: 75, college: 'Princeton' },
    { id: 6, name: 'Sara', grade: 70, college: 'Columbia' },
    { id: 7, name: 'Tom', grade: 65, college: 'Brown' },
    { id: 8, name: 'Jerry', grade: 60, college: 'Dartmouth' },
    { id: 9, name: 'Sue', grade: 55, college: 'Cornell' },
    { id: 10, name: 'Sam', grade: 50, college: 'Penn' }
    
];

students.forEach(student => {
 let tr = tbody.insertRow();

    for (let key in student) {
        // let td = document.createElement('td');
        let td = tr.insertCell();
        td.innerText = student[key];
        tr.append(td);

    }



});