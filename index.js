import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'senac@02',
    database: 'gabriela'
}).promise();

const result = await pool.query("select * from `sakila`.`staff`;");
//await é aguardarr a função do "query"
//  que é o verde e pega as info do amarelo;
console.log(result);    