export const ContactLeftInfo = [
  { label: 'email', value: 'nicecath3@gmail.com', icon: '✉' },
  { label: 'tel', value: '010-6298-2310', icon: '◉' },
  {
    label: 'github',
    value: 'github.com/nicecath3',
    icon: '◈',
  },
];

export const verifyEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};
