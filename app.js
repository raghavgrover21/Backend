//external libraries
let sql = require('mssql');


//server config to connect to MSSQL

let dbConfig = {
    server : 'localhost\\SQLEXPRESS',
    database: 'Backend',
    user: 'sa',
    password: 'admin'
};


//Viewing all the patients_id nad prescription in the database

function getDetails()
{
    let conn = new sql.ConnectionPool(dbConfig);

    let req = new sql.Request(conn);
    conn.connect(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        req.query("select * from Patient_master", function (err, recordset) {

            if (err) {
                console.log(err);

            }
            else {
                console.log(recordset);
            }
           
        });
    }); 
}
exports : {
    dbConfig
}