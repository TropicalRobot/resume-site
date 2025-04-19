// import { ContactForm } from '@/templates/ContactForm';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {

        const formData = await request.json();
     
        if (!formData.name) {
          return Response.json({ error: 'Name is required' }, { status: 400 });
        }

        // const { data, error } = await resend.emails.send({
        //     from: 'Acme <onboarding@resend.dev>',
        //     to: ['ryandeangriffiths@gmail.com'],
        //     subject: 'New Client!',
        //     react: ContactForm({ name: formData.name, email: formData.email, message: formData.message }),
        // });

        // if (error) {
        //     return Response.json({ error }, { status: 500 });
        // }

        return Response.json({ message: 'success' }, { status: 200 });
    } catch (error) {
        return Response.json({ error: error }, { status: 500 });
    }
}
