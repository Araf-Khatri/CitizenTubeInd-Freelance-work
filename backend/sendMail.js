// send to mails to user
const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    // console.log(req.body);
    const { name, email, message, phoneNumber } = req.body;

    const ourEmail = "contact@citizentubeind.com";
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: ourEmail,
        pass: "Hamza@12",
      },
    });

    const newName = name.charAt(0).toUpperCase() + name.slice(1);
    // const details = {
    //   name: newName,
    //   email: email,
    //   message: message,
    //   phoneNumber: phoneNumber,
    // };

    const emailToSend = {
      from: `CitizenTubeInd.com <${ourEmail}>`,
      to: email, // to send email to
      bcc: ourEmail,
      subject: "Thank you for your submission",
      text: `Dear ${newName},\nThank you for filling out our form. We appreciate your time and effort in providing us with the information.\n\nThe details you have provided are as follows:\nName: ${newName}\nEmail Address: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}\n\nWe will get in touch with you soon. If you have any further questions or concerns, please don't hesitate to contact us.\nBest regards,\nCitizen Tube IND
      `,
    };
    // Sending email to end user
    await transporter.sendMail(emailToSend);

    res.status(200).json({
      result: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      result: "Failed",
      error: err.message,
    });
  }
});

module.exports = router;
