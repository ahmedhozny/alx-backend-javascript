const fs = require('node:fs');

function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileLines = fs
    .readFileSync(path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  const students = {};

  fileLines.slice(1).forEach((line) => {
    const [firstname, , , field] = line.split(',');
    if (!students[field]) {
      students[field] = [];
    }
    students[field].push(firstname);
  });

  const totalStudents = Object.values(students).reduce((acc, students) => acc + students.length, 0);
  console.log(`Number of students: ${totalStudents}`);

  for (const [field, names] of Object.entries(students)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
