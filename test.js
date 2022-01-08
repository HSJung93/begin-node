const nodemailer = require("nodemailer");
const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "24af9c49cdb1a7",
    pass: "b5d346b322d2c8",
  },
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: "jrps2212@gmail.com",
  to: "jrps2212@snu.ac.kr",
  subject: "test mail",
  text: "mailing using nodejs",
};

send(email_data);
