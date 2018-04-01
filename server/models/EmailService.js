const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Configure transport options
const mailgunOptions = {
  auth: {
    api_key: 'key-2afccaebd6baa62e789de40d5fdfa27e',
    domain: 'sandboxbbededb03b394ead8292c4fa55a18b12.mailgun.org',
  },
};
const transport = mailgunTransport(mailgunOptions);
// EmailService
class EmailService {
  constructor() {
    this.emailClient = nodemailer.createTransport(transport);
  }
  sendText(to, subject, text) {
    return new Promise((resolve, reject) => {
      this.emailClient.sendMail({
        from: ' "Your Name" <youremail@yourdomain.com>',
        to,
        subject,
        text,
      }, (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      });
    });
  }
}
module.exports = new EmailService();
