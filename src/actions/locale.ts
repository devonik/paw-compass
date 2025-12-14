'use server';
import { cookies } from 'next/headers';

export async function setUserLocale(locale: string) {
  (await cookies()).set('locale', locale);
}