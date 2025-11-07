import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// you would have to import / invoke this in another file
export async function openDb () {
  return open({
    filename: '/home/phanie/Documents/adjebadja/GestionNotes/src/db.sqlite',
    driver: sqlite3.Database
  })
}
const db = await openDb();
const ddl = `
CREATE TABLE if not exists students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    sexe TEXT CHECK (sexe IN ('M', 'F')),
    birth_date TEXT
);

`;
const dml =`
INSERT INTO students (firstname, lastname, sexe, birth_date) VALUES
('shak', 'Adjebadja', 'M', '2004-21-15'),
('steph', 'Tchala', 'F', '2004-03-20'),
('mans', 'Birma', 'M', '2006-11-01'),
('Toum', 'Garcia', 'F', '2005-07-08'),
('Papa', 'Martin', 'M', '2004-02-25'),
('Léa', 'Lare', 'F', '2006-05-12'),
('Ali', 'daff', 'M', '2005-01-30');

`; 
await db.exec(ddl);
await db.exec(dml);
console.log(db);