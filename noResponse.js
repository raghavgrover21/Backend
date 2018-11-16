let moment = require('moment');

function notResponded() {
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
                console.log("RECORDSET ::", recordset.recordset);

                const rec = recordset.recordset;

                rec.forEach(function (item, index) {
                    // item contains each tuple
                    // index starts from 0
                  //  console.log({ "ITEM prescription_date ======": item.prescription_date, "index": index });
                    let date = item.prescription_date;
                });
            }
        });
    });
};

notResponded();