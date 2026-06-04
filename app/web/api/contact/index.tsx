import { sendType } from '@/app/web/api/contact/support';

export const sendMessage = async ({ name, email, message }: sendType) => {
  const res = await fetch('/web/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });

  if (!res.ok) {
    throw new Error('전송 실패');
  }

  return res.json();
};
