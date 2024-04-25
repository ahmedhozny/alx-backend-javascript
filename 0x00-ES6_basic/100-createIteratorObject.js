export default function createIteratorObject(report) {
  const departments = Object.keys(report);

  let currentDept = 0;
  let currentEmp = 0;

  return {
    next() {
      if (currentDept >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[currentDept];
      const currentEmployees = report[currentDepartment];

      if (currentEmp >= currentEmployees.length) {
        currentDept += 1;
        currentEmp = 0;
        return this.next();
      }

      const employee = currentEmployees[currentEmp];
      currentEmp += 1;
      return { value: employee, done: false };
    },

    [Symbol.iterator]() {
      return this;
    },
  };
}
