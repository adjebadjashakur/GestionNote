import { Database } from "../config/database.js";
import uuid from "../generateur.js";
import StudentRepostory from "../repositories/studentsRepostory.js";
export default class StudentService {
  students = [
    {
      id: 1000,
      firstname: "tchalla",
      lastname: "phanie",
      sexe: "F",
      birth_day: "01/02/2000",
    },

    {
      id: 2,
      firstname: "tcha",
      lastname: "mous",
      sexe: "M",
      birth_day: "01/02/1999",
    },
  ];

  studRepos;
  constructor() {
    this.studRepos = new StudentRepostory();
  }

  async getAll() {
    return this.studRepos.findAll();
  }

  async get(id) {
    return this.studRepos.findById(id);
  }

  async create(student){
    return this.studRepos.save(student);
  }

  async update(id, student_data) {
    return this.studRepos.update(id, student_data);
  }

  async delete(id) {
    return this.studRepos.delete(id);
  }
}

//   uuidGen;

//   constructor() {
//     this.uuidGen = uuid(1000);
//   }

//   async getAll() {
//     const db = await Database.getDatabaseInstance();
//     return await db.connection.all("SELECT * FROM students");
//     // liste de json sauvegarder dans list
//     //  return this.students;
//   }

//   async create(student_data) {
//     const db = await Database.getDatabaseInstance();
//     const { firstname, lastname, sexe, birth_day } = student_data;
//     const insert_sql = `
//         INSERT INTO students (firstname, lastname, sexe, birth_date) VALUES(:firstname, :lastname, :sexe, :birth_date);
//         `;
//     const { lastID } = await db.connection.run(insert_sql, {
//       ":firstname": firstname,
//       ":lastname": lastname,
//       ":sexe": sexe,
//       ":birth_date": birth_day,
//     });
//     return this.get(lastID);
//     //Création de notre propre id avec le générateur
//     // student_data.id=this.uuidGen.next().value;
//     // this.students.push(student_data)
//     //return student_data;
//   }

//   async get(id) {
//     const db = await Database.getDatabaseInstance();
//     return await db.connection.get(
//       " SELECT * From students Where id = :student_id;",
//       {
//         ":student_id": id,
//       }
//     );
//   }

//   async update(id, student_data) {
//     const { firstname, lastname, sexe, birth_day } = student_data;
//     const db = await Database.getDataBaseInstance();
//     const req = `UPDATE Students SET firstname = :firstname, lastname = :lastname, sexe = :sexe, birth_day = :birth_day WHERE id = :id`;
//     await db.connection.run(req, {
//       ":firstname": firstname,
//       ":lastname": lastname,
//       ":sexe": sexe,
//       ":birth_day": birth_day,
//       ":id": id,
//     });
//   }

//   async delete(id) {
//     const db = await Database.getDataBaseInstance();
//     const req = `DELETE FROM Students WHERE id = :id`;
//     await db.connection.run(req, {
//       ":id": id,
//     });
//   }
// }
