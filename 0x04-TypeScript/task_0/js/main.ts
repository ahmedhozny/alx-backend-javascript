interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Ahmed',
  lastName: 'Hosny',
  age: 8,
  location: 'Somewhere, Earth',
};

const student2: Student = {
  firstName: 'Mark',
  lastName: 'Zuckerberg',
  age: 13,
  location: 'Facebook, US, Earth',
};

const studentsList: Array<Student> = [student1, student2];

export default function createTable(): void {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const tr = document.createElement('tr');
  tr.insertAdjacentHTML('beforeend', '<td>First Name</td');
  tr.insertAdjacentHTML('beforeend', '<td>Location</td');
  thead.insertAdjacentElement('beforeend', tr);
  for (const student of studentsList) {
    const tr = document.createElement('tr');
    tr.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td`);
    tr.insertAdjacentHTML('beforeend', `<td>${student.location}</td`);
    tbody.insertAdjacentElement('beforeend', tr);
  }

  table.insertAdjacentElement('beforeend', thead);
  table.insertAdjacentElement('beforeend', tbody);
  document.body.insertAdjacentElement('beforeend', table);
}

createTable();
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = `
  table, td {
    border: 1px solid;
    padding: 5px;
    border-collapse: collapse;
  }
  
  thead {
    text-align: center;
  }
`;

document.head.insertAdjacentElement('beforeend', styleSheetElement);
