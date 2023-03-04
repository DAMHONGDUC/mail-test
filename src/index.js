const notifier = require("mail-notifier");

// đăng nhập
const imap = {
  user: "uservice.system23@gmail.com",
  password: "fugfhmauwxvhuzuk",

  host: "imap.gmail.com",
  port: 993, // imap port
  tls: true, // use secure connection
  tlsOptions: { rejectUnauthorized: false },
};

const reduceProp = (mail) => {
  const data = {
    text: mail.text,
    references: mail.references,
    subject: mail.subject,
    from: mail.from,
    to: mail.to,
    date: mail.date,
    receivedDate: mail.receivedDate,
    uid: mail.uid,
    flags: mail.flags,
  };

  return JSON.stringify(data);
};

// hàm này chỉ được call khi có mail mới
notifier(imap)
  .on("mail", (mail) => {
    console.log(reduceProp(mail));
    console.log(mail);
  })
  .start();
