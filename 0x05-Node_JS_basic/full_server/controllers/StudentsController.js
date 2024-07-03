// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    const databasePath = process.argv[2];
    readDatabase(databasePath)
      .then((fields) => {
        let responseText = 'This is the list of our students\n';
        const sortedFields = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        sortedFields.forEach((field) => {
          responseText += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });

        res.status(200).send(responseText.trim());
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const databasePath = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databasePath)
      .then((fields) => {
        const students = fields[major] || [];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }
}

export default StudentsController;
