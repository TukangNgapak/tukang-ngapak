// src/pages/Api/send-email.ts
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);
export async function POST({ request }: { request: Request }) {
    try {
        const body = await request.json();
        const { name, message } = body;

        const data = await resend.emails.send({
            from: 'Website Contact <onboarding@resend.dev>',
            to: ['ngapakcivil@gmail.com', 'rifqihamza30@gmail.com'],
            subject: `Pesan dari ${name}`,
            html: `<p>${message}</p>`,
        });

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error kirim email:', error);
        return new Response(JSON.stringify({ success: false, error: 'Gagal mengirim email.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
