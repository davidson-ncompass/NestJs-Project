require('dotenv').config();
const mysql = require('mysql2');


const poolConnection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    connectionLimit: 10,
})

const querExecuter = (sqlQuery, params) =>{
    const queryStatement = mysql.format(sqlQuery, params);
    return new Promise(async (resolve, reject) =>{
        poolConnection.getConnection((err, connection) =>{
            if(err) throw err;
            if(sqlQuery){
                connection.query(queryStatement, (err, result) =>{
                    connection.release();
                    if(err) throw err;
                    return resolve(result);
                })
            }
        })
    })

}

module.exports = querExecuter;