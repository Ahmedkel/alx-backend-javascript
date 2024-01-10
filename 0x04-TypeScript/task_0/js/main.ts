// Step 1: Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

    // Step 2: Create two student objects
    let student1: Student = { firstName: 'Mol', lastName: '7alawiyat', age: 21, location: 'MAR' };
    let student2: Student = { firstName: '7alawiyat', lastName: 'Mol', age:21, location: 'OC' };

    // Step 3: Store these objects in an array
    let studentsList: Student[] = [student1, student2];
    
    // Step 4: Render a table and append a new row for each student
    let table = document.createElement('table');
    studentsList.forEach(student => {
        let row = document.createElement('tr');

        let firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);

        let locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(locationCell);
    
        table.appendChild(row);
    });
    
    document.body.appendChild(table);
    table.setAttribute("border", "2");
    table.cellPadding = "10";
    table.align = "center";
    table.setAttribute("style", "border-collapse: collapse");

