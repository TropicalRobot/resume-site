import { ContactForm } from '@/templates/ContactForm';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {

        const formData = await request.json();
        const { name, email, message, token } = formData;
    
        // Basic field validation
        if (!name || !email || !message || !token) {
          return Response.json({ error: 'Missing required fields' }, { status: 400 });
        }
    
        // ✅ Verify reCAPTCHA token
        const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        });
    
        const recaptchaJson = await recaptchaRes.json();
    
        if (!recaptchaJson.success) {
          return Response.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
        }

        const { error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['ryandeangriffiths@gmail.com'],
            subject: 'New Client!',
            react: await ContactForm({ name: formData.name, email: formData.email, message: formData.message }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ message: 'success' }, { status: 200 });
    } catch (error) {
        return Response.json({ error: error }, { status: 500 });
    }
}
