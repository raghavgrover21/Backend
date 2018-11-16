let sql = require('mssql');

let dbConfig = {
    server : 'localhost\\SQLEXPRESS',
    database: 'Backend',
    user: 'sa',
    password: 'admin'
};


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
           // conn.close();
        });
    }); 
}
getDetails();
