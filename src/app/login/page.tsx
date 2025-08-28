import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LoginRedirect() {
  redirect('https://lasflorescompany.vercel.app'); // login del e-commerce
}
