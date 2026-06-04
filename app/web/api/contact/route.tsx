import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'nicecath3@gmail.com',
    subject: `[문의] ${name}님의 메시지`,
    html: `
      <p><strong>이름:</strong> ${name}</p>
      <p><strong>이메일:</strong> ${email}</p>
      <p><strong>내용:</strong> ${message}</p>
    `,
  });

  if (error) {
    return Response.json({ error }, { status: 400 });
  }

  return Response.json({ data });
}
