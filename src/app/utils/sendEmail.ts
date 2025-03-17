import { FormData } from '@/app/components/ContactForm';

export function sendEmail(data: FormData) {
    const apiEndpoint = '/api/send';

    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        return(response);
      })
      .catch((err) => {
        return(err);
      });
}