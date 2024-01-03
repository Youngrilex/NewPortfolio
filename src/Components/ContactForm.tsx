import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';


const userID = 'l6EHZ8y95aUuedA-6';

// Initialize EmailJS with your user ID
emailjs.init(userID);

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  
  //   // Your emailjs service ID and template ID
  //   const serviceId = 'service_ks5s53c';
  //   const templateId = 'template_47kt55r';
  
  //   // Prepare the data to send to EmailJS
  //   const emailJsData = {
  //     ...formData,
  //     service_id: serviceId,
  //     template_id: templateId,
  //   };
  
  //   // Send the email using emailjs
  //   console.log('Sending data to EmailJS:', emailJsData);
  //   emailjs.send(serviceId, templateId, formData as unknown as Record<string, unknown>)
  //     .then((response) => {
  //       console.log('Email sent:', response);
  //       // Handle success, e.g., show a success message or redirect
  //     })
  //     .catch((error) => {
  //       console.error('Email error:', error);
  //       // Handle error, e.g., show an error message
  //     });
  // };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Your emailjs service ID and template ID
    const serviceId = 'service_ks5s53c';
    const templateId = 'template_47kt55r';

    // Send the email using emailjs
    // console.log('Sending data to EmailJS:', formData);
    emailjs.send(serviceId, templateId,formData as unknown as Record<string, unknown>)
    .then((response) => {
      console.log('Email sent:', response);
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Handle success, e.g., show a success message to the user
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Email error:', error);

      // Handle error, e.g., show an error message to the user
      alert('Error sending message. Please try again later.');
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2" htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />

        <label className="block mb-2" htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />

        <label className="block mb-2" htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-[#4AC7F0] text-white px-4 py-2 rounded hover:bg-[#22a0ca] hover:scale-110 hover:transform hover:duration-300 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
