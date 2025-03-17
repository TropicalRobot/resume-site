import * as React from "react";

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC<Readonly<ContactFormProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Name: {name}</h1>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);
