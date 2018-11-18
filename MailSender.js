                                        //LATE SUBMISSION//


let nodemailer = require('nodemailer');
let xoauth2 = require('xoauth2');


// getting token and authenticating for sending mail to doctor.

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'poker.albosona@gmail.com',
        clientId: '449638658273-3anhe04hogohl8cqpgno3s3qdm7e1n5v.apps.googleusercontent.com',
        clientSecret: 'K-YkXYFv3J6ZQu9bOXb-kfbd',
        refreshToken: '1/v5Mle8Senh5QBb2UY8ioOcBMIDO9Kv-uRgVBo2-JhZg',
        accessToken: 'ya29.GltXBkIZkiC7rGZAyFVJDh77L0bSsBkO7NtztLd_OSAK5ccsppmeQ5wW_PaIokuTgB5OrxzNzZ9GOwRaqnbb7TPEd0lwDxlwy1qhB1be8at9KpiwDygg_5uM8DiC'
    },
});
//mail details

let mailOptions = {
    from: 'poker.albosona@gmail.com',
    to: 'maheshdoctortest@gmail.com',
    subject: 'patients who didnt complete the survey',
    text: `value: ${JSON.stringify(final_list)} -  hello world` // list to added here

}
//check if mail is send

transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
        console.log(err);
    }
    else {

        console.log('mail send');
    }
});