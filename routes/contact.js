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
      user: "",
      pass: "",
    },
  });

  async function main() {
    const info = await transporter.sendMail({
      from: '"From :" <>',
      to: "",
      subject: "Node project message",
      html: messageOutput,
    });
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
