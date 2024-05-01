export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export default function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements IStudentClass{
  private readonly _firstName: string;
  private readonly _lastName: string;
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework = (): string => "Currently working";

  displayName = (): string => this._firstName;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
