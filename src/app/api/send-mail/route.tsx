import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export async function POST(request: Request): Promise<any> {
  const mailInformation = await request.json();
  if (
    mailInformation === "" ||
    mailInformation.firstName === "" ||
    mailInformation.lastName === "" ||
    mailInformation.email === "" ||
    mailInformation.message === ""
  ) {
    return new Response("Missing required information", {
      headers: {
        "Content-Type": "application/json",
      },
      status: 400,
    });
  }
  const message = {
    from: process.env.GMAIL_EMAIL_ADDRESS,
    to: process.env.GMAIL_EMAIL_ADDRESS_TO_SEND,
    subject: `Mail sent form Liam's Portfolio https://liamlee.id.vn`,
    html: `
      <h1> Mail by ${mailInformation.firstName} ${mailInformation.lastName}</h1>
      <p>${mailInformation.message}</p>
    `,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const sendMailPromise = new Promise((resolve, reject) => {
    transporter.sendMail(message, (err, info) => {
      if (err !== null) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });

  // Await the Promise and return response
  try {
    const info: any = await sendMailPromise;
    return new Response(`Message delivered to ${info.accepted.join(", ")}`, {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error: any) {
    // Handle any errors that occur during processing
    return new Response(JSON.stringify(error.message), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
}
