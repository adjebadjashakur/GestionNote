CREATE TABLE if not exists students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    sexe TEXT CHECK (sexe IN ('M', 'F')),
    birth_date TEXT
);
