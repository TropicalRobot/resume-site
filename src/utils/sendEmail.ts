import { ContactFormData } from '@/components/ContactForm';

export async function sendEmail(formData: ContactFormData): Promise<{ message: string }> {
    
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.message || "Server error");
    }
  
    return data;
}
