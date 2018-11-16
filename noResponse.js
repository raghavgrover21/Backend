let moment = require('moment');

function notResponded()
{
    let conn = new sql.ConnectionPool(dbConfig);

    let req = new sql.Request(conn);
    conn.connect(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        req.query("select * from Patient_master where patient_id NOT IN (select patient_id from Response_master)", function (err, recordset) {

            if (err) {
                console.log(err);

            }
            else {
                compareDate(recordset);
                             
            }
        });
    }); 
}
//compare the dates of the recordset and return id to gmail api.
function compareDate(recordset) {
    moment().format();
    let currentDate = moment();
    recordset.forEach(function (element) {
         
    });
