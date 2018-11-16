let final_list=[];
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
                //console.log("RECORDSET ::", recordset.recordset);

                const rec = recordset.recordset;
                const current_date = moment();
                
                rec.forEach(function (item, index) {
                    // item contains each tuple
                    // index starts from 0
                    let date_of_prescription = moment(item.prescription_date);
                    
                    if (compareDate(current_date, date_of_prescription) === true) {
                        console.log(item);
                        final_list.push(item);
                        console.log(final_list);
                    } else {
                        console.log("*", compareDate(current_date, date_of_prescription));
                    }
                    
                });
            }
        });
    });
}
function compareDate(current_date,date_of_prescription)
{
    //console.log(date_of_prescription);
    let last_date_submission = date_of_prescription.add(4, 'weeks');
    if (current_date.isAfter(last_date_submission))
    {
        return true;
    }
    return false;
}
