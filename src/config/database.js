import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import fs from 'fs/promises'
import {dirname,join} from 'node:path'
import path from 'node:path'
const url = new URL(import.meta.url)
const parent_dir =dirname(url.pathname)
const base_dir= join(parent_dir,'..');
const file_path = join(base_dir,'db.sqlite'); 
//import { dirname } from 'path'


export class Database{
    connection;
    static instance;
    static db_path = file_path;
    //'/home/phanie/Documents/adjebadja/GestionNotes/src/db.sqlite';
    constructor(){}
    static async getDatabaseInstance(){
        if(Database.instance === undefined){
            Database.instance= new Database();
            await Database.instance.openDb(Database.db_path);
        }
        return Database.instance;
    }
    async  openDb (db_path) {
    this.connection = await open({
    filename: db_path,
    driver: sqlite3.Database
  })
   await this.initDb();
}
 async initDb(){
    const  base_dir = path.dirname((new URL(import.meta.url)).pathname);

    //creer les tables
    console.log("creation de la table ");
    const ddl_sql = await fs.readFile(path.join(base_dir,'ddl.sql'),{
        encoding:'utf-8'
    });
   // const ddl.sql = await fs.readFile('')
    await this.connection.exec(ddl_sql);
    //inserer des n-uplet
    console.log("creation de la table ")

}
}