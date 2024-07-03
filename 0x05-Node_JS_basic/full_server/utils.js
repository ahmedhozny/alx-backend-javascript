// full_server/utils.js
import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data.split('\n')
          .filter((line) => line)
          .map((line) => line.split(','))
          .slice(1);
        const fields = {};

        students.forEach(([firstname, , , field]) => {
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
        });

        resolve(fields);
      }
    });
  });
}
