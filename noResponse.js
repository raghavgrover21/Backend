let final_list=[];
let moment = require('moment');

//create a recordset of patients who havent filled the form.
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
                const rec = recordset.recordset;
                const current_date = moment();
                
                rec.forEach(function (item, index) 
                {
                    let date_of_prescription = moment(item.prescription_date);
                    
                    if (compareDate(current_date, date_of_prescription) === true) {
                        final_list.push(item);
                    } 
                    else {}
                });
            }
        });
    });
}

//check if the the current date is beyond the 4 weeks of prescription being assigned
function compareDate(current_date,date_of_prescription)
{
    let last_date_submission = date_of_prescription.add(4, 'weeks');
    if (current_date.isAfter(last_date_submission))
    {
        return true;
    }
    return false;
}
