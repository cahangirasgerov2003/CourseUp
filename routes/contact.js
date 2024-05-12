import express from "express";

import nodemailer from "nodemailer";

const router = express.Router();

router.post("/email", (req, res) => {
  const messageOutput = `
    <h2>Mail details :</h2>
       <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          <li>Phone: ${req.body.phone}</li>
        </ul>
    <h3>Message :</h3>
       <p>${req.body.message}</p>
    `;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "cahangir22asgerov@gmail.com",
      pass: "caxg xify ylom eqrt",
    },
  });

  async function main() {
    const info = await transporter.sendMail({
      from: '"From :" <cahangir22asgerov@gmail.com>',
      to: "cahangir22asgerov@gmail.com",
      subject: "Node project message",
      html: messageOutput,
    });

    // console.log("Message sent: ", info.messageId);
  }

  main()
    .then(() => {
      req.session.sessionFlash = {
        type: "alert alert-success",
        message: "Postunuz başarili şəkildə əlavə edildi",
      };

      res.redirect("/contact");
    })
    .catch(console.error);
});

export default router;
