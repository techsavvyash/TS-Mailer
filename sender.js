const fs = require("fs");
const path = require("path");
const sendMail = require("./gmail");

const main = async () => {
  const fileAttachments = [
    {
      filename: "attachment1.txt",
      content: "This is a plain text file sent as an attachment",
    },
    {
      filename: "websites.pdf",
      path: "https://www.labnol.org/files/cool-websites.pdf",
    },
  ];

  const options = {
    to: "yami8b@gmail.com",
    cc: "techsavvyash@gmail.com, yaadonkabackup@gmail.com",
    replyTo: "yash_12012002@nitkkr.ac.in",
    subject: "Hello From Mailer🚀",
    text: "This email is sent from the command line",
    html: `<p>🙋🏻‍♀️  &mdash; This is a <b>test email</b> from my mailer.</p>`,
    attachments: fileAttachments,
    textEncoding: "base64",
    headers: [
      { key: "X-Application-Developer", value: "Yash Mittal" },
      { key: "X-Application-Version", value: "v1.0.0.2" },
    ],
  };

  const messageId = await sendMail(options);
  return messageId;
};

main()
  .then((messageId) => console.log("Message sent successfully:", messageId))
  .catch((err) => console.error(err));
