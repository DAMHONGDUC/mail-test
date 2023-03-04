const notifier = require("mail-notifier");

// đăng nhập
const imap = {
  user: "uservice.system23@gmail.com",
  password: "nidyapovixzbtihx",

  // phần này là setting mặc định để lắng nghe mail tới - chi tiết https://www.lifewire.com/what-are-the-gmail-imap-settings-1170852
  host: "imap.gmail.com",
  port: 993, // imap port
  tls: true, // use secure connection
  tlsOptions: { rejectUnauthorized: false },
};

// hàm này chỉ được call khi có mail mới
notifier(imap)
  .on("mail", (mail) => {
    console.log(JSON.stringify(mail));
  })
  .start();
