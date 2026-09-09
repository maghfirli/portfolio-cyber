import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",

      to: "maghfirliayubi@gmail.com",

      replyTo: email,

      subject: subject || "New Portfolio Message",

      html: `
      
      <div style="font-family:Arial">

      <h2>
      New Message From Portfolio Website
      </h2>


      <p>
      <b>Name:</b>
      ${name}
      </p>


      <p>
      <b>Email:</b>
      ${email}
      </p>


      <p>
      <b>Subject:</b>
      ${subject}
      </p>


      <hr/>


      <p>
      ${message}
      </p>


      </div>

      `,
    });

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Failed sending email",
      },
      {
        status: 500,
      },
    );
  }
}
